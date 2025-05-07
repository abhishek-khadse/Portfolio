import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, FileText } from 'lucide-react';

export interface Research {
  id: number;
  title: string;
  date: string;
  status: 'published' | 'in progress' | 'upcoming';
  summary: string;
  abstract?: string;
  link?: string;
}

interface ResearchCardProps {
  research: Research;
}

const ResearchCard: React.FC<ResearchCardProps> = ({ research }) => {
  const [isOpen, setIsOpen] = useState(false);

  const statusColors = {
    published: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    'in progress': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
    upcoming: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
  };

  return (
    <motion.div
      className="bg-white dark:bg-dark-900 rounded-lg shadow-md overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      layout
    >
      <div 
        className="p-5 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-primary-950 dark:text-white pr-4">{research.title}</h3>
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </motion.span>
        </div>
        
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm text-gray-500 dark:text-gray-400">{research.date}</span>
          <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${statusColors[research.status]}`}>
            {research.status.charAt(0).toUpperCase() + research.status.slice(1)}
          </span>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300">{research.summary}</p>
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="px-5 pb-5 border-t border-gray-200 dark:border-dark-700"
          >
            {research.abstract && (
              <div className="pt-4">
                <h4 className="font-semibold mb-2 text-primary-950 dark:text-white">Abstract</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{research.abstract}</p>
              </div>
            )}
            
            {research.link && (
              <a
                href={research.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent-500 hover:text-accent-400 font-medium transition-colors"
              >
                <FileText className="w-4 h-4" /> View Publication
              </a>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ResearchCard;