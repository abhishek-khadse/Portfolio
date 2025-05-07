import React from 'react';
import PageTransition from '../components/common/PageTransition';
import ProjectsSection from '../components/projects/ProjectsSection';

const Projects: React.FC = () => {
  return (
    <PageTransition>
      <div className="pt-24 md:pt-32">
        <ProjectsSection showAll={true} />
      </div>
    </PageTransition>
  );
};

export default Projects;