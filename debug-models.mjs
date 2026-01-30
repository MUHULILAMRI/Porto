import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const client = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function listModels() {
    try {
        const models = await client.models.list();
        console.log("Available models:");
        models.forEach(m => console.log(`- ${m.name} (${m.supportedGenerationMethods})`));
    } catch (error) {
        console.error("Error listing models:", error);
    }
}

listModels();
