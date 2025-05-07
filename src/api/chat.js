// API handler for chat requests

import { chat as mockChat } from '../lib/chat';

export async function handler(req) {
  try {
    // Get messages from the request body
    const { messages } = req.body;
    
    if (!messages || !Array.isArray(messages)) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Invalid request format' })
      };
    }
    
    // Use our mock chat implementation
    const content = await mockChat(messages);
    
    return {
      statusCode: 200,
      body: JSON.stringify({ content })
    };
  } catch (error) {
    console.error('API error:', error);
    
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' })
    };
  }
}
