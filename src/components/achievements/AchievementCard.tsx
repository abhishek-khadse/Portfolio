import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Award } from 'lucide-react';

export interface Achievement {
  id: number;
  title: string;
  date: string;
  issuer: string;
  summary: string;
  details?: string;
  link?: string;
}

interface AchievementCardProps {
  achievement: Achievement;
}

const AchievementCard: React.FC<AchievementCardProps> = ({ achievement }) => {
  const [isOpen, setIsOpen] = useState(false);

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
          <h3 className="text-xl font-bold text-primary-950 dark:text-white pr-4">{achievement.title}</h3>
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </motion.span>
        </div>
        
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm text-gray-500 dark:text-gray-400">{achievement.date}</span>
          <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300">
            {achievement.issuer}
          </span>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300">{achievement.summary}</p>
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
            {achievement.details && (
              <div className="pt-4">
                <h4 className="font-semibold mb-2 text-primary-950 dark:text-white">Details</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{achievement.details}</p>
              </div>
            )}
            
            {achievement.link && (
              <a
                href={achievement.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent-500 hover:text-accent-400 font-medium transition-colors"
              >
                <Award className="w-4 h-4" /> View Certificate
              </a>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default AchievementCard;
