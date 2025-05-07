// This is a mock implementation that doesn't require an API key
// Replace this with the real OpenAI implementation when you have your API key properly configured

// Simulate some delays to make it feel more realistic
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Simple responses based on keywords
const responses: Record<string, string> = {
  'hello': 'Hello there! How can I assist you with your cybersecurity portfolio today?',
  'hi': 'Hi! I\'m your AI assistant. What would you like to know about cybersecurity?',
  'project': 'I\'d be happy to discuss your cybersecurity projects! Could you tell me more about what you\'re working on?',
  'skills': 'Your portfolio showcases impressive cybersecurity skills including penetration testing, web application security, and bug bounty hunting!',
  'security': 'Security is a critical field today. Your focus on cybersecurity is very relevant in today\'s threat landscape.',
  'contact': 'Visitors can use the contact form to reach out to you about cybersecurity opportunities and collaborations.',
  'default': 'Thanks for your message. Feel free to explore the portfolio to learn more about my cybersecurity expertise and projects.'
};

export async function chat(messages: any[]) {
  try {
    // Simulate API delay
    await delay(1000);
    
    // Get the last user message
    const lastMessage = messages[messages.length - 1];
    if (!lastMessage || lastMessage.role !== 'user') {
      return responses.default;
    }
    
    const userMessage = lastMessage.content.toLowerCase();
    
    // Find matching keywords
    for (const [keyword, response] of Object.entries(responses)) {
      if (userMessage.includes(keyword)) {
        return response;
      }
    }
    
    // Default response if no keywords match
    return responses.default;
  } catch (error) {
    console.error('Error in mock chat:', error);
    return 'I\'m having trouble processing your request. Please try again later.';
  }
}
