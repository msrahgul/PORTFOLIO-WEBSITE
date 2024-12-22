import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "Smart Aquarium Using Arduino UNO",
      description: "I have uploaded my working model code on GitHub. You can find the link to my project here. While I understand this may not be an impressive project, it provided me with extensive knowledge about using Arduino components and coding. Despite its simplicity, I encountered numerous challenges along the way. Through this project, I gained significant confidence in tackling many more projects in the future. ",
      tech: ['Arduino', 'Python','Hardware'],
      link: "https://github.com/msrahgul/Smart_Aquarium_Using_Arduino_UNO",
      videoUrl: "https://youtu.be/vRwijVWaNuo?si=gLvG9PoBOHZsKRsv"
    },
    {
      title: "Reserve My Show",
      description: "This is my first Python project, where I developed a simple interface for reserving a show. The primary objective of this project was to familiarize myself with Python programming and understand how to create user interfaces. Through this project, I learned the basics of Python ",
      tech: ['Python'],
      link: "https://github.com/msrahgul/reserve_my_show",
      videoUrl: "https://youtu.be/iDBhbLQMCCg?si=bYCN2Hb2Zv31Y7X9"
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;