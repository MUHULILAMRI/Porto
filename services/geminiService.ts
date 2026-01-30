import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

let client: GoogleGenAI | null = null;

const getClient = () => {
  if (!client) {
    // Ideally, check if API key exists. If not, the UI should handle it gracefully.
    // For this demo, we assume process.env.API_KEY is available.
    if (process.env.API_KEY) {
      client = new GoogleGenAI({ apiKey: process.env.API_KEY });
    }
  }
  return client;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  const ai = getClient();
  
  if (!ai) {
    return "I'm sorry, my brain (API Key) is currently missing. Please contact Ulil directly via email!";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    return response.text || "I processed that but couldn't generate a text response.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I encountered a temporary glitch in the matrix. Please try again later.";
  }
};