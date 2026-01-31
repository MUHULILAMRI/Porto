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
    return "Maaf, 'otak' saya (API Key) belum terpasang. Harap hubungi Ulil langsung melalui email!";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash-exp', // Menggunakan model terbaru
      contents: [{ role: 'user', parts: [{ text: message }] }],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });

    return response.text || "Saya sudah memprosesnya, tetapi tidak dapat menghasilkan tanggapan teks.";
  } catch (error: any) {
    console.error("Gemini Error Details:", error);
    const errorMsg = error.response?.data?.error?.message || error.message || "Kesalahan tidak diketahui";

    if (errorMsg.includes("429") || errorMsg.includes("quota")) {
      return "Batas kuota tercapai. Layanan AI gratis telah melampaui batas penggunaan saat ini. Harap tunggu sebentar atau coba lagi nanti!";
    }

    return `Kesalahan: ${errorMsg}`;
  }
};