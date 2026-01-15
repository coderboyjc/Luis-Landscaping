import { GoogleGenAI, Chat } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize the Gemini client
const ai = new GoogleGenAI({ apiKey });

// System instruction to guide the AI's behavior
const SYSTEM_INSTRUCTION = `
You are "Luis," the AI virtual assistant for Luis Landscape, a premier landscaping company in Maryland (MD).
Your goal is to help potential customers by providing rough estimates and collecting lead information.

Key Information about Luis Landscape:
- Location: Serving Maryland (focus on Montgomery, Prince George's, and Howard Counties).
- Services: Lawn Mowing, Mulching, Hardscaping (Patios, Retaining Walls), Spring/Fall Cleanup, Planting.
- Tone: Friendly, professional, local, and trustworthy.

Instructions:
1. When a user greets you, welcome them to Luis Landscape and ask how you can help with their yard today.
2. If they ask for a quote, ask 2-3 qualifying questions (e.g., approximate size of yard in sq ft or acres, frequency of service, current condition).
3. Provide a *rough* estimate range based on typical MD market rates (e.g., mowing starts at $45/visit for townhomes).
4. ALWAYS emphasize that this is a rough estimate and ask for their name and phone number to have a real human visit for a precise quote.
5. Keep responses concise (under 3 sentences where possible) for a chat interface.
6. If asked about insurance, confirm we are "Licensed & Insured MHIC #123456".

Do not provide medical or legal advice. Stick to landscaping.
`;

let chatSession: Chat | null = null;

export const initializeChat = (): void => {
  if (!apiKey) {
    console.error("API Key is missing for Gemini Service");
    return;
  }
  
  chatSession = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
  });
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!apiKey) return "I'm sorry, I'm currently offline (API Key missing). Please call us directly.";
  
  try {
    if (!chatSession) {
      initializeChat();
    }
    
    if (!chatSession) {
      throw new Error("Failed to initialize chat session");
    }

    const response = await chatSession.sendMessage({ message });
    return response.text || "I'm sorry, I didn't catch that. Could you please rephrase?";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "I'm having trouble connecting to our scheduling system right now. Please give us a call at (301) 555-0123.";
  }
};