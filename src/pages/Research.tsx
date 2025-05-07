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
      title: '38994 - Gamified Coding Platform',
      date: '2025-03-15',
      status: 'published',
      summary: 'Exploring the intersection of gaming mechanics and educational content delivery for training.',
      abstract: 'This paper investigates how gamification can enhance education, making complex concepts more accessible and engaging. By implementing game-like elements such as points, badges, leaderboards, and narrative-driven challenges, we demonstrate improved knowledge retention and application among participants compared to traditional learning methods. Our case study focuses on "Btech Gamer," a platform designed to teach secure coding practices and vulnerability identification through interactive scenarios and competitive elements.',
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
            
          </motion.div>
          
          <div className="space-y-6">
            {researchItems.map((item) => (
              <ResearchCard 
                key={item.id} 
                research={item} 
              />
            ))}
          </div>
          

        </div>
      </section>
    </PageTransition>
  );
};

export default ResearchPage;