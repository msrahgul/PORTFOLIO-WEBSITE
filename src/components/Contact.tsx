import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Contact</h2>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Get in Touch</h3>
              <p className="text-gray-600">
                Feel free to reach out for any queries or opportunities. I'm always open to discussing new projects and ideas.
              </p>
              <div className="space-y-4">
                <a href="mailto:msrahgul@gmail.com" 
                   className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                  <Mail className="w-5 h-5 mr-3" />
                  msrahgul@gmail.com
                </a>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 mr-3" />
                  Karunya Institute of Technology and Sciences, Coimbatore
                </div>
              </div>
            </div>
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Connect</h3>
              <a
                href="mailto:msrahgul@gmail.com"
                className="w-full inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
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

export default Contact;