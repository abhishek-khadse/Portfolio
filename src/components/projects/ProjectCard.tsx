import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';
import ProjectModal from './ProjectModal';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
  status: 'completed' | 'ongoing' | 'upcoming';
  details: string;
  features: string[];
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const statusColors = {
    completed: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    ongoing: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
    upcoming: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
  };

  return (
    <>
      <motion.div
        className="bg-white dark:bg-dark-900 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
      >
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute top-2 right-2">
            <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${statusColors[project.status]}`}>
              {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
            </span>
          </div>
        </div>
        <div className="p-5">
          <h3 className="text-xl font-bold mb-2 text-primary-950 dark:text-white">{project.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, index) => (
              <span key={`${tech}-${index}`} className="text-xs bg-gray-100 dark:bg-dark-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-md font-mono">
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex justify-between items-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-accent-500 hover:text-accent-400 font-medium flex items-center gap-1 transition-colors"
            >
              View Details <ChevronRight className="w-4 h-4" />
            </button>
            
            <div className="flex space-x-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-accent-500 dark:hover:text-accent-500 transition-colors"
                  aria-label="GitHub Repository"
                >
                  <Github className="w-5 h-5" />
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-accent-500 dark:hover:text-accent-500 transition-colors"
                  aria-label="Live Demo"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
      
      <ProjectModal 
        project={project} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default ProjectCard;