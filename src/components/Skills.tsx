import React from 'react';
import { Code2 } from 'lucide-react';
import SkillBadge from './SkillBadge';

const Skills = () => {
  const skills = [
    'C Programming',
    'Python',
    'Java',
    'MySQL'
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <SkillBadge key={skill} icon={<Code2 />} name={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;