import React from 'react';
import { Github as GitHub, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-dark-800 py-8 border-t border-gray-200 dark:border-dark-700">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {currentYear} Abhishek Khadse. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
              Designed & Built with React + TypeScript + Tailwind CSS
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-accent-500 dark:hover:text-accent-500 transition-colors"
              aria-label="GitHub"
            >
              <GitHub className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com/in/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-accent-500 dark:hover:text-accent-500 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://twitter.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-accent-500 dark:hover:text-accent-500 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a 
              href="mailto:contact@example.com" 
              className="text-gray-600 dark:text-gray-400 hover:text-accent-500 dark:hover:text-accent-500 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;