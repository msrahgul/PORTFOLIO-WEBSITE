import React from 'react';
import { Award } from 'lucide-react';

const CertificationCard = ({ title, description, link }: {
  title: string;
  description: string;
  link?: string;
}) => (
  <div className="bg-white rounded-lg shadow-lg p-6">
    <div className="flex items-start gap-4">
      <Award className="text-blue-600 mt-1" size={24} />
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-700 mt-2">{description}</p>
        {link && (
          <a 
            href={link}
            className="text-blue-600 hover:text-blue-800 mt-2 inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            Verify Certificate
          </a>
        )}
      </div>
    </div>
  </div>
);

const Certifications = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Certifications</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <CertificationCard
            title="Google Cybersecurity Professional Certificate"
            description="Completed 8-course program covering network security, Linux, SQL, Python automation, risk management, and threat detection."
          />
          <CertificationCard
            title="CISCO Networking Academy Certification"
            description="Completed networking fundamentals and security essentials certification."
          />
          <CertificationCard
            title="Introduction to MongoDB"
            description="Gained skills in MongoDB databases, CRUD operations, aggregation, indexing, and transactions."
          />
        </div>
      </div>
    </section>
  );
};

export default Certifications;