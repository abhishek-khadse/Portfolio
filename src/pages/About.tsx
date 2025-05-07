import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, Shield, Trophy } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import PageTransition from '../components/common/PageTransition';
import SectionTitle from '../components/common/SectionTitle';
import SkillsSection from '../components/about/SkillsSection';
import MyPic from '../../Assets/My pic.png';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const profileImageUrl = MyPic;

  return (
    <PageTransition>
      <section className="pt-24 md:pt-32 pb-12">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle number="01" title="About Me" />
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <motion.div 
              className="md:col-span-7"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-lg leading-relaxed">
                Hello! I'm Abhishek Khadse, a cybersecurity enthusiast and practitioner with a focus on web application security, bug bounty hunting, and secure system design.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-lg leading-relaxed">
                Currently, I'm working as a Security Intern at <span className="text-accent-500 font-semibold">Albus Security LLP</span>, where I collaborate with experienced security professionals to perform vulnerability assessments, penetration testing, and help develop secure coding practices using tools like <span className="text-cyan-600 dark:text-cyan-400 hover:underline transition-all">Burp Suite</span>, <span className="text-cyan-600 dark:text-cyan-400 hover:underline transition-all">Wireshark</span>, and scripting in <span className="text-cyan-600 dark:text-cyan-400 hover:underline transition-all">Python</span> and <span className="text-cyan-600 dark:text-cyan-400 hover:underline transition-all">Bash</span>.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-lg leading-relaxed">
                My passion lies in uncovering and mitigating real-world cybersecurity threats through a mix of red team tactics and defensive strategy. I thrive on discovering bugs through bug bounty programs, developing automation scripts to detect anomalies, and deploying secure systems using best practices in secure software development.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                I enjoy working on projects that blend research and practical application, especially in areas like network defense, exploit development, and malware analysis. My current interests include cloud infrastructure security (GCP), real-time threat detection pipelines, and WebSocket-based attack monitoring systems.
              </p>
              

              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-primary-950 dark:text-white">Education & Certifications</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-2"><GraduationCap className="w-5 h-5" /></span>
                    <div>
                      <p className="font-medium">IITG Cybersecurity Curriculum</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Current Focus</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-2"><Shield className="w-5 h-5" /></span>
                    <div>
                      <p className="font-medium">Bug Bounty Hunter</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Active on various platforms</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-2"><Trophy className="w-5 h-5" /></span>
                    <div>
                      <p className="font-medium">CTF Challenge Participation</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Active competitor</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary-950 dark:text-white">Objective</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-lg leading-relaxed">
                  To proactively identify and mitigate security threats through advanced analysis and hands-on testing, while continuously exploring cutting-edge techniques in offensive and defensive cybersecurity.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-lg leading-relaxed">
                  I'm always looking to connect with like-minded professionals and organizations that value proactive security measures and innovative approaches to cybersecurity challenges.
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-lg font-medium">
                  Feel free to reach out if you're working on <span className="text-cyan-600 dark:text-cyan-400">security research</span>, <span className="text-cyan-600 dark:text-cyan-400">capture-the-flag competitions</span>, or <span className="text-cyan-600 dark:text-cyan-400">open-source collaborations</span>.
                </p>
                
                <div className="mt-8 bg-white/5 dark:bg-gray-900/10 backdrop-blur-sm rounded-lg p-5 border-l-4 border-cyan-500 dark:border-cyan-600">
                  <h3 className="text-xl font-semibold mb-4 text-primary-950 dark:text-white">Areas of Focus</h3>
                  <ul className="space-y-2.5 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="text-lg mr-2.5 min-w-[1.5rem]">🔍</span>
                      <span>Web Application Security & Penetration Testing (OWASP Top 10)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-lg mr-2.5 min-w-[1.5rem]">🐞</span>
                      <span>Responsible Disclosure via Bug Bounty Platforms (Bugcrowd, HackerOne)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-lg mr-2.5 min-w-[1.5rem]">🔐</span>
                      <span>Secure Coding & Script Automation using Python, Bash</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-lg mr-2.5 min-w-[1.5rem]">🧠</span>
                      <span>Threat Modeling, Risk Assessment & Red Team Simulation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-lg mr-2.5 min-w-[1.5rem]">📈</span>
                      <span>Live Monitoring & DDoS Detection (CloudGuard Project)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-lg mr-2.5 min-w-[1.5rem]">🎯</span>
                      <span>CTF Challenges (Reverse Engineering, Pwn, Web Exploitation)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="md:col-span-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="relative mb-10">
                <div className="relative z-10 rounded-md overflow-hidden group">
                  <img
                    src={profileImageUrl}
                    alt="Abhishek Khadse"
                    className="w-full h-auto rounded-md transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="absolute -z-10 top-4 left-4 right-4 bottom-4 border-2 border-accent-500 rounded-md"></div>
              </div>
              
              <div className="profile-card bg-white/10 dark:bg-gray-900/20 backdrop-blur-sm rounded-lg border border-gray-200/30 dark:border-gray-800/30 shadow-md p-6 mt-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white flex items-center">
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-500 h-5 w-1 mr-2 rounded-full"></span>
                  Quick Facts
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <span className="text-lg mr-2.5">🔒</span>
                    Security Intern @ <span className="text-cyan-600 dark:text-cyan-400">Albus Security LLP</span>
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <span className="text-lg mr-2.5">🛡️</span>
                    Active Bug Bounty Hunter
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <span className="text-lg mr-2.5">👨‍💻</span>
                    Python, Flask, Django Developer
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <span className="text-lg mr-2.5">🤖</span>
                    AI for Threat Detection Enthusiast
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <span className="text-lg mr-2.5">🎯</span>
                    OSCP Aspirant
                  </li>
                </ul>
                
                <a href="#contact" className="block mt-6 text-center py-2.5 px-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium rounded-md shadow-sm transition-all hover:shadow-md">
                  🤝 Let's Collaborate
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <SkillsSection />
    </PageTransition>
  );
};

export default About;