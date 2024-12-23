import React from 'react';
import { FileText, Download, Mail } from 'lucide-react';

const ResumeAndContact = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Contact</h2>

        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Resume Section */}
          <div className="flex-1 bg-blue-50 rounded-lg p-8 shadow-lg">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Resume</h3>
            <p className="text-gray-600 mb-6">Click the button below to explore my resume, where you can view or download it to learn more about my skills, experience, and qualifications!</p>
            <a
              href="https://drive.google.com/file/d/1WFWkt8TyUHjmoRR7185dMafdOxLhW5uL/view?usp=sharing"
              download
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </a>
          </div>

          {/* Contact Section */}
          <div className="flex-1 bg-blue-50 rounded-lg p-8 shadow-lg">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Contact</h3>
            <p className="text-gray-600 mb-6">
              Feel free to reach out for any queries or opportunities. I'm always open to discussing new projects and ideas.
            </p>
            <div className="flex justify-between items-center">
              {/* Email Address */}
              <div className="flex items-center gap-4">
                <Mail className="text-blue-600" size={20} />
                <span className="text-gray-800">msrahgul@gmail.com</span>
              </div>
              {/* Send Email Button */}
              <a
                href="mailto:msrahgul@gmail.com"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Mail className="mr-2" size={20} />
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeAndContact;
