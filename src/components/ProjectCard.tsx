import React from 'react';
import {ExternalLink } from 'lucide-react'; // Import the ExternalLink icon

const ProjectCard = ({ title, description, tech, link, videoUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((techItem, index) => (
          <span
            key={index}
            className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full"
          >
            {techItem}
          </span>
        ))}
      </div>
      <div className="w-full aspect-video mb-4">
        <iframe
          src={videoUrl.replace('youtu.be/', 'www.youtube.com/embed/')}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full rounded-lg"
        ></iframe>
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 font-bold underline hover:text-blue-800 transition-colors text-sm flex items-center gap-2"
      >
        View Project
        <ExternalLink size={16} className="text-blue-600" />
      </a>
    </div>
  );
};

export default ProjectCard;
