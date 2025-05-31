// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node

import {
    GoogleGenAI,
} from '@google/genai';


async function main() {

    const apiKey = process.env.GEMINI_API_KEY;
    console.log("API Key:", apiKey);
    // Ensure GEMINI_API_KEY is set in your environment variables
    // eslint-disable-next-line no-undef
    if (!process.env.GEMINI_API_KEY) {
        console.error("GEMINI_API_KEY environment variable is not set.");
        return;
    }


    const ai = new GoogleGenAI({
        // eslint-disable-next-line no-undef
        apiKey: process.env.GEMINI_API_KEY, // Pass API key directly
    });

    const config = {
        responseMimeType: 'text/plain',
    };
    const model = 'gemma-3-27b-it';

    const contents = [
        {
            role: 'user',
            parts: [
                {
                    text: `What is react?`,
                },
            ],
        },
    ];

    const response = await ai.models.generateContentStream({
        model,
        config,
        contents,
    });
    let fileIndex = 0;
    for await (const chunk of response) {
        console.log(chunk.text);
    }
}

main();
