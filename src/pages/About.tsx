import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Award, GraduationCap, Shield } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import PageTransition from '../components/common/PageTransition';
import SectionTitle from '../components/common/SectionTitle';
import SkillsSection from '../components/about/SkillsSection';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const profileImageUrl = "https://images.pexels.com/photos/1699419/pexels-photo-1699419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  return (
    <PageTransition>
      <section className="pt-24 md:pt-32 pb-12">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle number="01" title="About Me" />
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
            <motion.div 
              className="md:col-span-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-lg leading-relaxed">
                Hello! I'm Abhishek Khadse, a cybersecurity enthusiast and practitioner with a focus on web application security, bug bounty hunting, and secure system design.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-lg leading-relaxed">
                Currently, I'm working as a Security Intern at <span className="text-accent-500 font-semibold">Albus Security LLP</span>, where I collaborate with experienced security professionals to perform vulnerability assessments, penetration testing, and help develop secure coding practices.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                My passion lies in identifying and fixing real-world security threats. Whether it's finding vulnerabilities through bug bounty programs, implementing robust security controls, or educating others about security best practices, I'm committed to making the digital world safer.
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
                    <span className="text-accent-500 mr-2"><Award className="w-5 h-5" /></span>
                    <div>
                      <p className="font-medium">OSCP (Offensive Security Certified Professional)</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">In Progress</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-2"><Shield className="w-5 h-5" /></span>
                    <div>
                      <p className="font-medium">Bug Bounty Hunter</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Active on various platforms</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary-950 dark:text-white">Objective</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-lg leading-relaxed">
                  To leverage my expertise in cybersecurity to identify and mitigate security threats, while continuously expanding my knowledge in emerging attack vectors and defense mechanisms.
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  I'm always looking to connect with like-minded professionals and organizations that value proactive security measures and innovative approaches to cybersecurity challenges.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              className="md:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="relative">
                <div className="relative rounded-md overflow-hidden mb-6 group">
                  <img
                    src={profileImageUrl}
                    alt="Abhishek Khadse"
                    className="w-full h-auto rounded-md transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="absolute -z-10 top-4 left-4 w-full h-full border-2 border-accent-500 rounded-md"></div>
              </div>
              
              <div className="bg-white dark:bg-dark-900 rounded-lg shadow-md p-5 mt-8">
                <h3 className="text-xl font-semibold mb-3 text-primary-950 dark:text-white">Quick Facts</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <ChevronRight className="w-4 h-4 text-accent-500 mr-2" />
                    <span className="text-gray-600 dark:text-gray-300">Security Intern @ Albus Security LLP</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="w-4 h-4 text-accent-500 mr-2" />
                    <span className="text-gray-600 dark:text-gray-300">Active Bug Bounty Hunter</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="w-4 h-4 text-accent-500 mr-2" />
                    <span className="text-gray-600 dark:text-gray-300">Python, Flask, Django Developer</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="w-4 h-4 text-accent-500 mr-2" />
                    <span className="text-gray-600 dark:text-gray-300">AI for Threat Detection Enthusiast</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="w-4 h-4 text-accent-500 mr-2" />
                    <span className="text-gray-600 dark:text-gray-300">OSCP Aspirant</span>
                  </li>
                </ul>
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