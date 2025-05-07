import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PageTransition from '../components/common/PageTransition';
import SectionTitle from '../components/common/SectionTitle';
import ResearchCard from '../components/research/ResearchCard';
import { Research } from '../components/research/ResearchCard';

const ResearchPage: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const researchItems: Research[] = [
    {
      id: 1,
      title: 'Gamified Education through Btech Gamer',
      date: 'Expected Q3 2025',
      status: 'in progress',
      summary: 'Exploring the intersection of gaming mechanics and educational content delivery for cybersecurity awareness and training.',
      abstract: 'This paper investigates how gamification can enhance cybersecurity education, making complex security concepts more accessible and engaging. By implementing game-like elements such as points, badges, leaderboards, and narrative-driven challenges, we demonstrate improved knowledge retention and application among participants compared to traditional learning methods. Our case study focuses on "Btech Gamer," a platform designed to teach secure coding practices and vulnerability identification through interactive scenarios and competitive elements.',
    },
    {
      id: 2,
      title: 'Machine Learning for Advanced Persistent Threat Detection',
      date: 'Expected Q4 2025',
      status: 'upcoming',
      summary: 'Research on applying machine learning algorithms to detect sophisticated APT attacks by identifying subtle patterns and anomalies in network traffic.',
    },
    {
      id: 3,
      title: 'Secure Code Review Automation: Challenges and Solutions',
      date: 'Expected Q2 2026',
      status: 'upcoming',
      summary: 'Investigation into automating secure code reviews using AI and static analysis to identify potential vulnerabilities at scale.',
    },
  ];

  return (
    <PageTransition>
      <section className="pt-24 md:pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle number="04" title="Research & Publications" />
          
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 max-w-3xl"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300">
              My research focuses on the intersection of cybersecurity, machine learning, and education.
              I'm particularly interested in developing innovative approaches to security challenges and making security concepts more accessible.
            </p>
          </motion.div>
          
          <div className="space-y-6">
            {researchItems.map((item, index) => (
              <ResearchCard 
                key={item.id} 
                research={item} 
              />
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16 bg-white dark:bg-dark-900 rounded-lg shadow-md p-6"
          >
            <h3 className="text-xl font-semibold mb-4 text-primary-950 dark:text-white">
              Research Interests
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex items-start">
                <span className="text-accent-500 mr-2 font-mono">→</span>
                <span className="text-gray-600 dark:text-gray-300">AI for Threat Detection and Response</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent-500 mr-2 font-mono">→</span>
                <span className="text-gray-600 dark:text-gray-300">Gamification in Cybersecurity Education</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent-500 mr-2 font-mono">→</span>
                <span className="text-gray-600 dark:text-gray-300">Secure Coding Practices and Automation</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent-500 mr-2 font-mono">→</span>
                <span className="text-gray-600 dark:text-gray-300">Zero Trust Architecture Implementation</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent-500 mr-2 font-mono">→</span>
                <span className="text-gray-600 dark:text-gray-300">Cloud Security Optimization</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent-500 mr-2 font-mono">→</span>
                <span className="text-gray-600 dark:text-gray-300">Emerging Attack Vector Analysis</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default ResearchPage;