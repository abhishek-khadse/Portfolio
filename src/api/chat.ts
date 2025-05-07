import { OpenAI } from 'openai';
import { Request } from 'express';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || process.env.VITE_OPENAI_API_KEY
});

export async function handler(req: Request) {
  try {
    const { messages } = req.body;
    
    if (!messages || !Array.isArray(messages)) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: 'Invalid request: messages array is required'
        })
      };
    }

    if (!openai.apiKey) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          error: 'OpenAI API key is not configured'
        })
      };
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: messages,
      temperature: 0.7,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        content: completion.choices[0].message.content
      })
    };
  } catch (error) {
    console.error('Error in chat API:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Failed to generate response'
      })
    };
  }
}
