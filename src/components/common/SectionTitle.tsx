import React from 'react';

interface SectionTitleProps {
  number: string;
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ number, title }) => {
  return (
    <div className="text-center mb-12">
      <span className="text-accent-500 font-mono text-sm tracking-wider mb-2 block">
        {number}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;