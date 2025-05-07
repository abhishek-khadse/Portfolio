import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import SectionTitle from '../common/SectionTitle';
import ProjectCard, { Project } from './ProjectCard';

// Import project images
import { SageShieldImg, MalwareSageImg, SageGuardImg, SageEyeImg } from './projectImages';

interface ProjectsSectionProps {
  showAll?: boolean;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ showAll = false }) => {
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
      image: SageShieldImg,
      technologies: ['Python', 'TensorFlow', 'Flask', 'Docker'],
      github: 'https://github.com/yourusername/sage-shield',
      demo: 'https://sage-shield-demo.com',
      status: 'completed',
      details: 'Sage Shield is an advanced DDoS detection and prevention system that leverages machine learning algorithms to identify and mitigate distributed denial of service attacks in real-time.',
      features: [
        'Real-time traffic analysis',
        'ML-based attack detection',
        'Automated mitigation',
        'Detailed reporting'
      ]
    },
    {
      id: 2,
      title: 'Malware Sage',
      description: 'A malware reverse engineering toolkit with automation support to analyze and understand malware behavior more efficiently.',
      image: MalwareSageImg,
      technologies: ['Python', 'YARA', 'Assembly', 'Django'],
      github: 'https://github.com/yourusername/malware-sage',
      demo: 'https://malware-sage-demo.com',
      status: 'completed',
      details: 'Malware Sage is a comprehensive toolkit designed to streamline the process of malware analysis and reverse engineering.',
      features: [
        'Automated analysis',
        'Pattern recognition',
        'Behavioral analysis',
        'Report generation'
      ]
    },
    {
      id: 3,
      title: 'Sage Guard',
      description: 'A road accident detection and threat intelligence system with real-time monitoring and alert capabilities.',
      image: SageGuardImg,
      technologies: ['Python', 'OpenCV', 'TensorFlow', 'React'],
      github: 'https://github.com/yourusername/sage-guard',
      demo: 'https://sage-guard-demo.com',
      status: 'ongoing',
      details: 'Sage Guard is an innovative system that combines computer vision and machine learning to detect road accidents and potential safety threats in real-time.',
      features: [
        'Real-time monitoring',
        'Accident detection',
        'Emergency alerts',
        'Traffic analysis'
      ]
    },
    {
      id: 4,
      title: 'SageEye',
      description: 'An ML-powered solution to detect phishing attempts across emails and websites with high accuracy.',
      image: SageEyeImg,
      technologies: ['Python', 'NLP', 'React', 'Flask'],
      status: 'upcoming',
      details: 'SageEye is a comprehensive anti-phishing platform that utilizes advanced machine learning and natural language processing techniques.',
      features: [
        'Email analysis',
        'Website scanning',
        'Threat detection',
        'Real-time alerts'
      ]
    }
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 4);

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

  // Custom layout: 3 in first row, 4th centered in second row
  let gridItems;
  if (displayedProjects.length === 4) {
    gridItems = [
      // First row
      <motion.div key={displayedProjects[0].id} variants={itemVariants}>
        <ProjectCard project={displayedProjects[0]} />
      </motion.div>,
      <motion.div key={displayedProjects[1].id} variants={itemVariants}>
        <ProjectCard project={displayedProjects[1]} />
      </motion.div>,
      <motion.div key={displayedProjects[2].id} variants={itemVariants}>
        <ProjectCard project={displayedProjects[2]} />
      </motion.div>,
      // Second row: empty, project, empty
      <div key="empty-left" className="hidden md:block" />,
      <motion.div key={displayedProjects[3].id} variants={itemVariants}>
        <ProjectCard project={displayedProjects[3]} />
      </motion.div>,
      <div key="empty-right" className="hidden md:block" />,
    ];
  } else {
    gridItems = displayedProjects.map((project) => (
      <motion.div key={project.id} variants={itemVariants}>
        <ProjectCard project={project} />
      </motion.div>
    ));
  }

  return (
    <section className="py-20 md:py-28 bg-gray-50 dark:bg-dark-800">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
        <SectionTitle number="03" title={showAll ? "All Projects" : "Featured Projects"} />
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mt-8"
        >
          {gridItems}
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