import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

let client: GoogleGenAI | null = null;

const getClient = () => {
  if (!client) {
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
      contents: [{ role: 'user', parts: [{ text: message }] }],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });

    return response.text || "I processed that but couldn't generate a text response.";
  } catch (error: any) {
    console.error("Gemini Error Details:", error);
    // Extract internal error message if possible
    const errorMsg = error.response?.data?.error?.message || error.message || "Unknown error";

    if (errorMsg.includes("429") || errorMsg.includes("quota")) {
      return "Rate limit reached. The free tier for the AI has exceeded its current quota. Please wait a moment or try again later!";
    }

    return `Error: ${errorMsg}`;
  }
};