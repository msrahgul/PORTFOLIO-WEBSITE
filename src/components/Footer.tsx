import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex space-x-6">
            <a href="https://github.com/msrahgul" 
               className="hover:text-blue-300 transition-colors p-2"
               target="_blank"
               rel="noopener noreferrer">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/rahgulms/" 
               className="hover:text-blue-300 transition-colors p-2"
               target="_blank"
               rel="noopener noreferrer">
              <Linkedin size={24} />
            </a>
            <a href="mailto:msrahgul@gmail.com" 
               className="hover:text-blue-300 transition-colors p-2">
              <Mail size={24} />
            </a>
          </div>
          <div className="text-center">
            <p className="text-blue-200">© 2024 Rahgul M S. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;