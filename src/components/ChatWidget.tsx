import React, { useState, useEffect, forwardRef, useRef } from 'react';
import { FiMessageSquare, FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface ChatWidgetProps {
  messages?: Message[];
}

const ChatWidget = forwardRef<HTMLDivElement, ChatWidgetProps>((props, ref) => {
  const { messages: initialMessages } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages || [
    {
      role: 'assistant',
      content: 'Hi there! I\'m your AI assistant. How can I help you today?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const internalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialMessages) {
      setMessages(initialMessages);
    }
  }, [initialMessages]);

  useEffect(() => {
    if (ref) {
      if (typeof ref === 'function') {
        ref(internalRef.current);
      } else if ('current' in ref) {
        ref.current = internalRef.current;
      }
    }
  }, [ref]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Import the chat function directly
      const { chat } = await import('../lib/chat');
      
      // Call our local mock chat function
      const currentMessages = [...messages, userMessage];
      const responseContent = await chat(currentMessages);
      
      // Add assistant response to messages
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: responseContent || 'I\'m not sure how to respond to that.'
      }]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again.'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  if (!isOpen) {
    return (
      <motion.button
        onClick={toggleChat}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-4 right-4 bg-blue-500 text-white rounded-full p-3 shadow-lg hover:bg-blue-600 transition-colors"
      >
        <FiMessageSquare size={24} />
      </motion.button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="bg-gray-100 dark:bg-gray-900 rounded-lg shadow-lg w-96 max-h-[80vh] overflow-hidden ml-auto border border-gray-300 dark:border-gray-700"
        ref={internalRef}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">AI Assistant</h3>
          <button onClick={toggleChat} className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white">
            <FiX size={20} />
          </button>
        </div>

        <div className="h-[calc(100%-130px)] overflow-y-auto p-4 bg-gray-50 dark:bg-gray-900">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-4 p-3 rounded-lg max-w-[80%] shadow-sm ${
                message.role === 'user' 
                  ? 'bg-blue-600 text-white ml-auto' 
                  : 'bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-100'
              }`}
            >
              <p className="break-words whitespace-normal text-sm">{message.content}</p>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="p-3 border-t border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 p-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium"
          >
            {isLoading ? (
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              'Send'
            )}
          </button>
        </form>
      </motion.div>
    </div>
  );
});

ChatWidget.displayName = 'ChatWidget';

export default ChatWidget;
