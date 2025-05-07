import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionTitle from '../common/SectionTitle';
import {
  Code, Shield, Cloud, Terminal, Brain, Server, Lock
} from 'lucide-react';

const skills = [
  {
    category: 'Cybersecurity',
    icon: <Shield className="w-6 h-6 text-accent-500" />,
    skills: [
      { name: 'Web Application Security', level: 90 },
      { name: 'Penetration Testing', level: 85 },
      { name: 'Bug Bounty Hunting', level: 90 },
      { name: 'Threat Modeling', level: 80 },
      { name: 'OWASP Top 10', level: 95 },
      { name: 'Firewall Configuration', level: 75 },
    ],
  },
  {
    category: 'Programming',
    icon: <Code className="w-6 h-6 text-accent-500" />,
    skills: [
      { name: 'Python', level: 90 },
      { name: 'Flask & Django', level: 85 },
      { name: 'JavaScript', level: 80 },
      { name: 'Bash Scripting', level: 75 },
      { name: 'API Security', level: 90 },
      { name: 'Secure Coding', level: 85 },
    ],
  },
  {
    category: 'Cloud & DevSecOps',
    icon: <Cloud className="w-6 h-6 text-accent-500" />,
    skills: [
      { name: 'Google Cloud Security', level: 80 },
      { name: 'IAM', level: 85 },
      { name: 'Docker', level: 75 },
      { name: 'Supabase', level: 70 },
      { name: 'CI/CD Security', level: 75 },
      { name: 'Encryption', level: 80 },
    ],
  },
  {
    category: 'Tools & Platforms',
    icon: <Terminal className="w-6 h-6 text-accent-500" />,
    skills: [
      { name: 'Kali Linux', level: 95 },
      { name: 'Burp Suite', level: 90 },
      { name: 'Wireshark', level: 85 },
      { name: 'Nmap', level: 90 },
      { name: 'Metasploit', level: 80 },
      { name: 'OSINT Tools', level: 85 },
    ],
  },
];

const SkillsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-dark-800">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle number="02" title="Skills & Expertise" />
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skills.map((category, catIdx) => (
            <motion.div
              key={`${category.category}-${catIdx}`}
              variants={itemVariants}
              className="bg-white dark:bg-dark-900 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold ml-2">{category.category}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <div key={`${skill.name}-${skillIdx}`}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-sm font-mono text-accent-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2.5">
                      <motion.div
                        className="bg-accent-500 h-2.5 rounded-full"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.2 + skillIdx * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-12 text-center"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Currently working towards my <span className="text-accent-500 font-semibold">OSCP certification</span> and following the <span className="text-accent-500 font-semibold">IITG Cybersecurity Curriculum</span> to continue expanding my knowledge and expertise in the field.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;