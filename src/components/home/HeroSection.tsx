import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ParticlesBackground from './ParticlesBackground';

const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticlesBackground />
      
      <div className="container mx-auto px-4 md:px-6 z-10 py-16 md:py-24">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded && inView ? "visible" : "hidden"}
          className="max-w-4xl"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <p className="text-accent-500 font-mono text-lg">
              <TypeAnimation
                sequence={[
                  'Hello, my name is',
                  1000,
                ]}
                speed={50}
                cursor={false}
              />
            </p>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold text-primary-950 dark:text-white mb-2 md:mb-4 relative inline-block"
          >
            Abhishek Khadse
            <motion.span
              className="absolute -inset-1 opacity-20 bg-accent-500 rounded-lg blur-lg"
              animate={{
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </motion.h1>
          
          <motion.h2 
            variants={itemVariants} 
            className="text-3xl md:text-5xl font-semibold text-secondary-600 dark:text-secondary-600 mb-6"
          >
            <TypeAnimation
              sequence={[
                500,
                'Cybersecurity Expert',
                1000,
                'Bug Bounty Hunter',
                1000,
                'Security Researcher',
                1000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-2xl mb-8"
          >
            Security Intern @ Albus Security LLP with expertise in bug bounty hunting, red teaming, and cloud security. 
            Passionate about real-world hacking, threat detection, and building secure systems.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-4"
          >
            <motion.button
              onClick={() => navigate('/projects')}
              className="px-6 py-3 bg-accent-500 text-primary-950 font-medium rounded-md flex items-center gap-2 hover:bg-accent-400 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects <ArrowRight className="w-4 h-4" />
            </motion.button>
            <motion.button
              onClick={() => navigate('/contact')}
              className="px-6 py-3 bg-transparent text-accent-500 border-2 border-accent-500 font-medium rounded-md hover:bg-accent-500/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5, 
          delay: 2.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <p className="text-sm text-gray-500 dark:text-gray-400 font-mono mb-2">Scroll Down</p>
        <motion.div 
          className="w-1 h-10 bg-accent-500"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;