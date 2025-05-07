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
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/abhishek-khadse" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-accent-500 dark:hover:text-accent-500 transition-colors"
              aria-label="GitHub"
            >
              <GitHub className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/abhishek-khadse45/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-accent-500 dark:hover:text-accent-500 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:abhishekkhadse289@gmail.com" 
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