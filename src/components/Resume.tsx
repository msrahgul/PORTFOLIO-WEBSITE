import React from 'react';
import { FileText, Download } from 'lucide-react';

const Resume = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Resume</h2>
          <p className="text-lg text-gray-600 mb-8">Download my resume or view it online</p>
          <a
            href="https://drive.google.com/file/d/1WFWkt8TyUHjmoRR7185dMafdOxLhW5uL/view?usp=sharing"
            download
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Download className="mr-2" size={20} />
            Download Resume
          </a>
        </div>

        <div className="bg-blue-50 rounded-lg p-8 shadow-lg">
          <div className="grid gap-8">
            {/* Education Summary */}
            <div>
              <h3 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
                <FileText className="mr-2" /> Education
              </h3>
              <div className="ml-8 space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900">B.Tech Computer Science (AI & ML)</h4>
                  <p className="text-gray-600">Karunya Institute of Technology and Sciences</p>
                  <p className="text-gray-500">2022 - Present</p>
                </div>
              </div>
            </div>

            {/* Skills Summary */}
            <div>
              <h3 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
                <FileText className="mr-2" /> Technical Skills
              </h3>
              <div className="ml-8">
                <div className="flex flex-wrap gap-2">
                  {['Python', 'C Programming', 'Java', 'MySQL', 'Arduino'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-white text-blue-800 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Experience Summary */}
            <div>
              <h3 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
                <FileText className="mr-2" /> Experience
              </h3>
              <div className="ml-8">
                <div>
                  <h4 className="font-medium text-gray-900">Python Development Intern</h4>
                  <p className="text-gray-600">Next24Tech</p>
                  <p className="text-gray-500">May 20, 2024 - July 20, 2024</p>
                </div>
              </div>
            </div>

            {/* Projects Summary */}
            <div>
              <h3 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
                <FileText className="mr-2" /> Key Projects
              </h3>
              <div className="ml-8 space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900">Smart Aquarium Using Arduino UNO</h4>
                  <p className="text-gray-600">Arduino-based automated aquarium management system</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Reserve My Show</h4>
                  <p className="text-gray-600">Python-based show reservation system</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
