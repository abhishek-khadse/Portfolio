import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  number: string;
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ number, title }) => {
  return (
    <motion.div 
      className="flex items-center w-full mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2 
        className="flex items-center text-2xl md:text-3xl font-bold"
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <span className="text-accent-500 font-mono mr-2">{number}.</span>
        {title}
      </motion.h2>
      <div className="ml-4 flex-grow h-px bg-gray-300 dark:bg-dark-700 max-w-xs md:max-w-md"></div>
    </motion.div>
  );
};

export default SectionTitle;