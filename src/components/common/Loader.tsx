import React from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-50 dark:bg-dark-900 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          transition: {
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
          }
        }}
        className="text-center"
      >
        <Shield className="w-16 h-16 mx-auto text-accent-500" />
        <p className="mt-4 text-lg font-mono text-gray-800 dark:text-gray-200">
          Loading<motion.span
            animate={{ 
              opacity: [0, 1, 0],
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              times: [0, 0.2, 1] 
            }}
          >...</motion.span>
        </p>
      </motion.div>
    </div>
  );
};

export default Loader;