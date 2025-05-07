import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import SectionTitle from '../common/SectionTitle';
import ProjectCard, { Project } from './ProjectCard';

interface ProjectsSectionProps {
  showAll: boolean;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ showAll }) => {
  const navigate = useNavigate();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects: Project[] = [
    {
      id: 1,
      title: 'Sage Shield',
      description: 'A real-time DDoS detection and prevention system using Python and ML for smarter traffic filtering and threat response.',
      image: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['Python', 'TensorFlow', 'Flask', 'Docker'],
      github: 'https://github.com/',
      demo: 'https://example.com',
      status: 'completed',
      details: 'Sage Shield is an advanced DDoS detection and prevention system that leverages machine learning algorithms to identify and mitigate distributed denial of service attacks in real-time. The system analyzes network traffic patterns to distinguish between legitimate user traffic and malicious attack traffic, allowing for precise filtering and minimizing false positives.',
      features: [
        'Real-time traffic analysis and anomaly detection',
        'ML-based classification of attack patterns',
        'Adaptive rate limiting and traffic filtering',
        'Detailed attack visualization and reporting',
        'API integration with network infrastructure',
        'Automated mitigation response workflows'
      ]
    },
    {
      id: 2,
      title: 'Malware Sage',
      description: 'A malware reverse engineering toolkit with automation support to analyze and understand malware behavior more efficiently.',
      image: 'https://images.pexels.com/photos/5380651/pexels-photo-5380651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['Python', 'YARA', 'Assembly', 'Django'],
      github: 'https://github.com/',
      status: 'completed',
      details: 'Malware Sage is a comprehensive toolkit designed to streamline the process of malware analysis and reverse engineering. It provides automated tools for static and dynamic analysis, helping security researchers understand malware behavior, extract indicators of compromise (IoCs), and develop effective detection signatures.',
      features: [
        'Automated unpacking and deobfuscation of malware samples',
        'Static code analysis with pattern recognition',
        'Sandbox-based behavioral analysis',
        'Network traffic capture and analysis',
        'YARA rule generation from identified patterns',
        'Comprehensive reporting of malware capabilities'
      ]
    },
    {
      id: 3,
      title: 'Sage Guard',
      description: 'A road accident detection and threat intelligence system with real-time monitoring and alert capabilities.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['Python', 'OpenCV', 'TensorFlow', 'React'],
      github: 'https://github.com/',
      status: 'ongoing',
      details: 'Sage Guard is an innovative system that combines computer vision and machine learning to detect road accidents and potential safety threats in real-time. By analyzing video feeds from traffic cameras, the system can automatically identify incidents, assess their severity, and dispatch appropriate emergency services.',
      features: [
        'Real-time video analysis from multiple camera feeds',
        'AI-powered accident detection and classification',
        'Automated emergency response coordination',
        'Traffic flow optimization during incidents',
        'Historical data analysis for identifying high-risk areas',
        'Mobile app for emergency personnel with real-time updates'
      ]
    },
    {
      id: 4,
      title: 'SageEye',
      description: 'An ML-powered solution to detect phishing attempts across emails and websites with high accuracy.',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['Python', 'NLP', 'React', 'Flask'],
      status: 'upcoming',
      details: 'SageEye is a comprehensive anti-phishing platform that utilizes advanced machine learning and natural language processing techniques to identify sophisticated phishing attempts. The solution analyzes emails, websites, and other digital communications to detect social engineering attempts and protect users from credential theft and malware distribution.',
      features: [
        'NLP-based analysis of email content and metadata',
        'Visual similarity comparison for brand impersonation',
        'URL analysis and website content inspection',
        'Browser extension for real-time website assessment',
        'Email filtering integration with popular email platforms',
        'Continuous learning from new phishing techniques'
      ]
    },
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

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
        <SectionTitle number="03" title={showAll ? "All Projects" : "Featured Projects"} />
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {displayedProjects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
        
        {!showAll && (
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <button
              onClick={() => navigate('/projects')}
              className="px-6 py-3 bg-transparent text-accent-500 border-2 border-accent-500 font-medium rounded-md inline-flex items-center gap-2 hover:bg-accent-500/10 transition-colors"
            >
              View All Projects <ChevronRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;