import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, Sparkles, User, Loader2, Terminal, Circle } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage, SectionId } from '../types';

const AIChat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "System initialized. I am Ulil's digital portfolio assistant. Accessing database... Ready. \n\nAsk me about my projects, stack, or experience." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(userMessage);
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "Connection error: Unable to reach neural network.", isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id={SectionId.AI_CHAT} className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Talk to the <span className="text-cyan-400">Machine</span>
            </h2>
            <p className="text-slate-400">
              Interactive AI agent trained on my professional history.
            </p>
          </div>

          <div className="rounded-xl overflow-hidden bg-[#0a0a0a] border border-slate-800 shadow-2xl shadow-cyan-900/20 h-[600px] flex flex-col relative font-mono text-sm">
            {/* Terminal Header */}
            <div className="bg-slate-900 px-4 py-3 flex items-center justify-between border-b border-slate-800">
              <div className="flex gap-2">
                <Circle size={12} className="fill-red-500 text-red-500" />
                <Circle size={12} className="fill-yellow-500 text-yellow-500" />
                <Circle size={12} className="fill-green-500 text-green-500" />
              </div>
              <div className="text-slate-500 flex items-center gap-2 text-xs">
                <Terminal size={14} />
                ulil_portfolio_bot.exe
              </div>
              <div className="w-12"></div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar bg-slate-950/80 backdrop-blur-sm">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex gap-4 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {msg.role === 'model' && (
                    <div className="w-8 h-8 rounded bg-cyan-900/30 border border-cyan-500/30 flex items-center justify-center flex-shrink-0 mt-1">
                      <Bot size={16} className="text-cyan-400" />
                    </div>
                  )}
                  
                  <div className={`max-w-[80%] p-3 rounded lg:text-base ${
                    msg.role === 'user' 
                      ? 'bg-slate-800 text-slate-200 border border-slate-700' 
                      : 'text-cyan-50'
                  }`}>
                    {msg.role === 'model' ? (
                       <div className="whitespace-pre-wrap">
                          <span className="text-cyan-500 mr-2">{'>'}</span>
                          {msg.text}
                       </div>
                    ) : (
                      msg.text
                    )}
                  </div>

                  {msg.role === 'user' && (
                    <div className="w-8 h-8 rounded bg-slate-800 border border-slate-700 flex items-center justify-center flex-shrink-0 mt-1">
                      <User size={16} className="text-slate-400" />
                    </div>
                  )}
                </div>
              ))}
              
              {isLoading && (
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded bg-cyan-900/30 border border-cyan-500/30 flex items-center justify-center flex-shrink-0 mt-1">
                    <Bot size={16} className="text-cyan-400" />
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded bg-slate-800/50 border border-slate-700/50">
                      <Loader2 size={14} className="animate-spin text-cyan-400" />
                      <span className="text-xs font-mono text-slate-400">
                        typing<span className="animate-pulse">...</span>
                      </span>
                   </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-slate-900 border-t border-slate-800">
              <form onSubmit={handleSend} className="flex items-center gap-4">
                <span className="text-cyan-500 font-bold">{'>'}</span>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type a command or question..."
                  className="flex-1 bg-transparent border-none text-slate-200 focus:ring-0 placeholder-slate-600 font-mono"
                  disabled={isLoading}
                  autoFocus
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="p-2 text-cyan-500 hover:text-cyan-300 disabled:opacity-30 transition-colors"
                >
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIChat;