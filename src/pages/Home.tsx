import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ProjectsSection from '../components/projects/ProjectsSection';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import PageTransition from '../components/common/PageTransition';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <HeroSection />
      
      <section className="py-20 bg-white dark:bg-dark-900">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-950 dark:text-white">
              Cybersecurity Expertise
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              I'm passionate about building secure systems and finding vulnerabilities before malicious actors do.
              My work spans bug bounty hunting, penetration testing, and developing robust security solutions.
            </p>
            <motion.button
              onClick={() => navigate('/about')}
              className="px-6 py-3 bg-accent-500 text-primary-950 font-medium rounded-md flex items-center gap-2 hover:bg-accent-400 transition-colors mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More About Me <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </div>
      </section>
      
      <ProjectsSection showAll={false} />
    </PageTransition>
  );
};

export default Home;