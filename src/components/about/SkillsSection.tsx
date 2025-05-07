import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionTitle from '../common/SectionTitle';
import {
  Code, Shield, Cloud, Terminal
} from 'lucide-react';

const skills = [
  {
    category: '🛡️ Cybersecurity',
    icon: <Shield className="w-6 h-6 text-accent-500" />,
    skills: [
      { name: 'Web Application Security', level: 90, isTop: true, project: 'CloudGuard (vulnerability scanning)' },
      { name: 'Penetration Testing', level: 85, isTop: true, project: 'Client security assessments' },
      { name: 'Bug Bounty Hunting', level: 90, isTop: true, project: 'HackerOne, Bugcrowd platforms' },
      { name: 'Threat Modeling', level: 80, isTop: true, project: 'STRIDE methodology implementations' },
      { name: 'OWASP Top 10', level: 95, isTop: true, project: 'Security awareness training' },
      { name: 'Firewall Configuration', level: 75, isTop: true, project: 'Network security hardening' },
    ],
  },
  {
    category: '💻 Programming',
    icon: <Code className="w-6 h-6 text-accent-500" />,
    skills: [
      { name: 'Python', level: 90, isTop: true, project: 'Automation scripts, security tools' },
      { name: 'Flask & Django', level: 85, isTop: true, project: 'Web application development' },
      { name: 'JavaScript', level: 80, isTop: true, project: 'Frontend security implementations' },
      { name: 'Bash Scripting', level: 75, isTop: true, project: 'System automation, security checks' },
      { name: 'API Security', level: 90, isTop: true, project: 'RESTful & GraphQL endpoints hardening' },
      { name: 'Secure Coding', level: 85, isTop: true, project: 'SAST/DAST implementation' },
    ],
  },
  {
    category: '🔧 Tools & Platforms',
    icon: <Terminal className="w-6 h-6 text-accent-500" />,
    skills: [
      { name: 'Kali Linux', level: 95, isTop: true, project: 'Penetration testing environment' },
      { name: 'Burp Suite', level: 90, isTop: true, project: 'Web app security testing' },
      { name: 'Wireshark', level: 85, isTop: true, project: 'Network traffic analysis' },
      { name: 'Nmap', level: 90, isTop: true, project: 'Network reconnaissance' },
      { name: 'Metasploit', level: 80, isTop: true, project: 'Exploitation framework' },
      { name: 'OSINT Tools', level: 85, isTop: true, project: 'Reconnaissance & information gathering' },
    ],
  },
  {
    category: '☁️ Cloud & DevSecOps',
    icon: <Cloud className="w-6 h-6 text-accent-500" />,
    skills: [
      { name: 'Google Cloud Security', level: 80, isTop: true, project: 'Cloud security posture management' },
      { name: 'IAM', level: 85, isTop: true, project: 'Identity & access management' },
      { name: 'Docker', level: 75, isTop: true, project: 'Container security' },
      { name: 'CI/CD Security', level: 75, isTop: true, project: 'Pipeline security integration' },
      { name: 'Supabase', level: 70, isTop: true, project: 'Backend-as-a-service security' },
      { name: 'Encryption', level: 80, isTop: true, project: 'Data protection implementations' },
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
                  <div key={`${skill.name}-${skillIdx}`} className="group relative">
                    <div className="flex justify-between mb-1">
                      <div className="flex items-center">
                        {skill.isTop && <span className="text-yellow-500 mr-1.5">⭐</span>}
                        <span className={`text-sm font-medium ${skill.isTop ? 'text-primary-800 dark:text-cyan-300' : 'text-gray-700 dark:text-gray-300'}`}>
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm font-mono text-accent-500">
                        {skill.level >= 90 ? 'Advanced' : skill.level >= 80 ? 'Proficient' : 'Intermediate'}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2.5 overflow-hidden">
                      <div 
                        className={`${skill.isTop ? 'bg-gradient-to-r from-cyan-500 to-blue-500' : 'bg-accent-500'} h-2.5 rounded-full`}
                        style={{ width: `${skill.level}%`, animation: 'skillBar 1s ease-out forwards' }}
                      />
                    </div>
                    
                    {/* Project Tooltip */}
                    {skill.project && (
                      <div className="absolute z-10 -top-2 left-1/2 transform -translate-x-1/2 -translate-y-full
                                  w-48 p-2 bg-white dark:bg-dark-800 shadow-lg rounded-md text-xs
                                  opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        <div className="text-gray-700 dark:text-gray-300">
                          <span className="font-semibold block mb-1">Project/Use:</span>
                          <span>{skill.project}</span>
                        </div>
                        <div className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-3 h-3 rotate-45 bg-white dark:bg-dark-800"></div>
                      </div>
                    )}
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
            Currently <span className="text-accent-500 font-semibold"></span> following the <span className="text-accent-500 font-semibold">IITG Cybersecurity Curriculum</span> to continue expanding my knowledge and expertise in the field.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;