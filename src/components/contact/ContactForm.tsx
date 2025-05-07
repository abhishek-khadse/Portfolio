import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Reset form and show success message
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitted(true);
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (err) {
      setError('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const inputVariants = {
    focus: { scale: 1.01, boxShadow: '0 0 0 2px rgba(100, 255, 218, 0.3)' },
    blur: { scale: 1, boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)' }
  };

  return (
    <motion.div 
      className="bg-white dark:bg-dark-900 rounded-lg shadow-md p-6 w-full max-w-xl mx-auto"
      variants={formVariants}
      initial="hidden"
      animate="visible"
    >
      {isSubmitted ? (
        <motion.div 
          className="flex flex-col items-center justify-center py-10 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Message Sent!</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Thank you for reaching out. I'll get back to you as soon as possible.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              Name
            </label>
            <motion.input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-dark-700 bg-white dark:bg-dark-800 text-gray-700 dark:text-gray-300 focus:outline-none focus:border-accent-500"
              variants={inputVariants}
              whileFocus="focus"
              initial="blur"
              animate="blur"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <motion.input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-dark-700 bg-white dark:bg-dark-800 text-gray-700 dark:text-gray-300 focus:outline-none focus:border-accent-500"
              variants={inputVariants}
              whileFocus="focus"
              initial="blur"
              animate="blur"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              Subject
            </label>
            <motion.select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-dark-700 bg-white dark:bg-dark-800 text-gray-700 dark:text-gray-300 focus:outline-none focus:border-accent-500"
              variants={inputVariants}
              whileFocus="focus"
              initial="blur"
              animate="blur"
            >
              <option value="">Select a subject</option>
              <option value="job">Job Opportunity</option>
              <option value="collaboration">Collaboration</option>
              <option value="consultation">Consultation</option>
              <option value="other">Other</option>
            </motion.select>
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              Message
            </label>
            <motion.textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-dark-700 bg-white dark:bg-dark-800 text-gray-700 dark:text-gray-300 focus:outline-none focus:border-accent-500"
              variants={inputVariants}
              whileFocus="focus"
              initial="blur"
              animate="blur"
            />
          </div>
          
          {error && (
            <div className="mb-6 p-3 bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300 rounded-md">
              {error}
            </div>
          )}
          
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-6 py-3 bg-accent-500 text-primary-950 font-medium rounded-md flex items-center justify-center gap-2 hover:bg-accent-400 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-primary-950" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : (
              <>
                Send Message <Send className="w-4 h-4" />
              </>
            )}
          </motion.button>
        </form>
      )}
    </motion.div>
  );
};

export default ContactForm;