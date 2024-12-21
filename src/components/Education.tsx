import React from 'react';
import { GraduationCap } from 'lucide-react';

const EducationCard = ({ institution, degree, score, period }: {
  institution: string;
  degree: string;
  score: string;
  period?: string;
}) => (
  <div className="bg-white rounded-lg shadow-lg p-6">
    <div className="flex items-start gap-4">
      <GraduationCap className="text-blue-600 mt-1" size={24} />
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{institution}</h3>
        <p className="text-gray-600">{degree}</p>
        <p className="text-gray-700 font-medium">{score}</p>
        {period && <p className="text-gray-500 text-sm">{period}</p>}
      </div>
    </div>
  </div>
);

const Education = () => {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Educational Background</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <EducationCard
            institution="Karunya Institute of Technology and Sciences"
            degree="B.Tech Computer Science (AI & ML)"
            score="Current"
            period="2022 - Present"
          />
          <EducationCard
            institution="Velammal Vidyashram, Dindigul"
            degree="12th Standard CBSE"
            score="80%"
          />
          <EducationCard
            institution="Prasiddhi Vidyodaya"
            degree="10th Standard CBSE"
            score="88%"
          />
        </div>
      </div>
    </section>
  );
};

export default Education;