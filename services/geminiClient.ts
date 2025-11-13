import { GoogleGenAI } from "@google/genai";

/**
 * Initializes and returns a new instance of the GoogleGenAI client.
 * The API key is sourced from the process.env.API_KEY environment variable.
 */
export const getAiClient = (): GoogleGenAI => {
    // Per guidelines, process.env.API_KEY is assumed to be available and valid.
    // Direct initialization ensures compliance and security.
    const apiKey = process.env.API_KEY;

    if (!apiKey) {
        // This error will be caught by the calling services and trigger the UI error message.
        throw new Error("API 키가 설정되지 않았습니다. API_KEY 환경 변수를 확인해주세요.");
    }

    return new GoogleGenAI({ apiKey });
};
