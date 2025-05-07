import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PageTransition from '../components/common/PageTransition';
import SectionTitle from '../components/common/SectionTitle';
import AchievementCard, { Achievement } from '../components/achievements/AchievementCard';

const AchievementsPage: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements: Achievement[] = [
    {
      id: 1,
      title: '38994 - Gamified Coding Platform',
      date: '2025-03-15',
      issuer: 'IJFMR Journal',
      summary: 'Published research paper exploring the intersection of gaming mechanics and educational content delivery for training.',
      details: 'This paper investigates how gamification can enhance education, making complex concepts more accessible and engaging. By implementing game-like elements such as points, badges, leaderboards, and narrative-driven challenges, we demonstrate improved knowledge retention and application among participants compared to traditional learning methods. Our case study focuses on "Btech Gamer," a platform designed to teach secure coding practices and vulnerability identification through interactive scenarios and competitive elements.',
      link: 'https://doi.org/g892qq'
    },
    {
      id: 2,
      title: 'Best Research Paper Presentation recognition!',
      date: '2025-03-12',
      issuer: 'Research Scholars Day organized by DY Patil University, Pune (DYPU)',
      summary: 'Best Research Paper Presentation recognition!',
      details: 'Honored to receive the Best Research Paper Presentation recognition! 🏅📜 This experience has been an incredible journey of learning, collaboration, and innovation. Special thanks to my mentors, professors, and peers for their support and guidance throughout this research. Looking forward to more opportunities to contribute to the field of !'
    }
  ];

  return (
    <PageTransition>
      <section className="pt-24 md:pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle number="04" title="Achievements & Certifications" />
          
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 max-w-3xl"
          >
            
          </motion.div>
          
          <div className="space-y-6">
            {achievements.map((achievement) => (
              <AchievementCard 
                key={achievement.id} 
                achievement={achievement} 
              />
            ))}
          </div>
          
        </div>
      </section>
    </PageTransition>
  );
};

export default AchievementsPage;
