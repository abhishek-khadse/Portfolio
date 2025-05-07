import React from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink } from 'lucide-react';
import PageTransition from '../components/common/PageTransition';
import SectionTitle from '../components/common/SectionTitle';

const Resume: React.FC = () => {
  // Placeholder URL for demonstration - would be replaced with actual resume PDF URL
  const resumeUrl = "https://example.com/resume.pdf";

  return (
    <PageTransition>
      <section className="pt-24 md:pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle number="05" title="Resume" />
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 md:mb-0 max-w-2xl">
              Here's an overview of my professional experience and qualifications. You can also download the full resume for more details.
            </p>
            
            <div className="flex gap-4">
              <motion.a
                href={resumeUrl}
                download="Abhishek_Khadse_Resume.pdf"
                className="px-4 py-2 bg-accent-500 text-primary-950 font-medium rounded-md flex items-center gap-2 hover:bg-accent-400 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-4 h-4" /> Download PDF
              </motion.a>
              <motion.a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-transparent text-accent-500 border-2 border-accent-500 font-medium rounded-md flex items-center gap-2 hover:bg-accent-500/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-4 h-4" /> View Online
              </motion.a>
            </div>
          </div>
          
          <div className="bg-white dark:bg-dark-900 rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4 text-primary-950 dark:text-white">Experience</h3>
            
            <div className="mb-6 border-l-2 border-accent-500 pl-4">
              <div className="mb-1">
                <h4 className="text-lg font-medium">Security Intern</h4>
                <p className="text-accent-500 font-mono">Albus Security LLP</p>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">June 2023 - Present</p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                <li>Conduct vulnerability assessments and penetration tests for web applications</li>
                <li>Participate in security incident response and threat hunting activities</li>
                <li>Develop and implement secure coding guidelines</li>
                <li>Assist in red team exercises and security awareness training</li>
              </ul>
            </div>
            
            <div className="border-l-2 border-accent-500 pl-4">
              <div className="mb-1">
                <h4 className="text-lg font-medium">Independent Bug Bounty Hunter</h4>
                <p className="text-accent-500 font-mono">Various Platforms</p>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">January 2022 - Present</p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                <li>Identify and report security vulnerabilities in web applications</li>
                <li>Focus on OWASP Top 10 vulnerabilities</li>
                <li>Collaborate with security teams to remediate identified issues</li>
                <li>Stay updated with emerging threat vectors and attack techniques</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white dark:bg-dark-900 rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4 text-primary-950 dark:text-white">Education</h3>
            
            <div className="border-l-2 border-accent-500 pl-4">
              <div className="mb-1">
                <h4 className="text-lg font-medium">IITG Cybersecurity Curriculum</h4>
                <p className="text-accent-500 font-mono">Indian Institute of Technology, Guwahati</p>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">2023 - Present</p>
              <p className="text-gray-600 dark:text-gray-300">
                Specialized training in advanced cybersecurity concepts, network security, secure system design, and ethical hacking.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-dark-900 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-primary-950 dark:text-white">Certifications</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-accent-500 mr-2 font-mono">→</span>
                  <div>
                    <p className="font-medium">OSCP (Offensive Security Certified Professional)</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">In Progress</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-500 mr-2 font-mono">→</span>
                  <div>
                    <p className="font-medium">Certified Ethical Hacker (CEH)</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Planned for 2025</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-dark-900 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-primary-950 dark:text-white">Languages</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-center justify-between">
                  <span>Python</span>
                  <div className="w-32 bg-gray-200 dark:bg-dark-700 rounded-full h-2.5">
                    <div className="bg-accent-500 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </li>
                <li className="flex items-center justify-between">
                  <span>Bash</span>
                  <div className="w-32 bg-gray-200 dark:bg-dark-700 rounded-full h-2.5">
                    <div className="bg-accent-500 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </li>
                <li className="flex items-center justify-between">
                  <span>JavaScript</span>
                  <div className="w-32 bg-gray-200 dark:bg-dark-700 rounded-full h-2.5">
                    <div className="bg-accent-500 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </li>
                <li className="flex items-center justify-between">
                  <span>SQL</span>
                  <div className="w-32 bg-gray-200 dark:bg-dark-700 rounded-full h-2.5">
                    <div className="bg-accent-500 h-2.5 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Resume;