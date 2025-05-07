import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink } from 'lucide-react';
import { Project } from './ProjectCard';

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 } 
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.3 } 
    }
  };

  const modalVariants = {
    hidden: { 
      y: 50,
      opacity: 0 
    },
    visible: { 
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring",
        damping: 25,
        stiffness: 300
      }
    },
    exit: { 
      y: 50,
      opacity: 0,
      transition: { duration: 0.3 } 
    }
  };

  const statusColors = {
    completed: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    ongoing: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
    upcoming: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
          />
          
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <motion.div
              className="bg-white dark:bg-dark-900 rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <button
                  onClick={onClose}
                  className="absolute top-3 right-3 bg-black/50 hover:bg-black/70 text-white p-1.5 rounded-full transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute top-3 left-3">
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${statusColors[project.status]}`}>
                    {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-primary-950 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span key={`${tech}-${index}`} className="text-xs bg-gray-100 dark:bg-dark-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-md font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2 text-primary-950 dark:text-white">About the Project</h4>
                  <p className="text-gray-600 dark:text-gray-300">{project.details}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2 text-primary-950 dark:text-white">Key Features</h4>
                  <ul className="list-disc list-inside space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={`${feature}-${index}`} className="text-gray-600 dark:text-gray-300">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex justify-end space-x-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-dark-700 hover:bg-gray-200 dark:hover:bg-dark-600 text-gray-800 dark:text-white rounded-md transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-accent-500 hover:bg-accent-400 text-white rounded-md transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      View Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;