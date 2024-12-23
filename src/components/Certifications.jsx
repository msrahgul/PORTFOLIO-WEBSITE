import React from 'react';
import CertificationCard from './CertificationCard';

const Certifications = () => {
  const certifications = [
    {
      title: "English Language And Literature",
      issuer: "NPTEL",
      date: "April 2024",
      link: "https://drive.google.com/file/d/1WaCJtjsGok_0-iGAwGfVQ70OERNczGof/view?usp=sharing",
    },
    {
      title: "PCAP: Programming Essentials in Python",
      issuer: "CISCO NETWORKING ACADEMY",
      date: "January 2024",
      link: "https://drive.google.com/file/d/12aJjuZ_MJcyAgYHXyNYAlNcVCBve8TVT/view?usp=sharing",
    },
    {
      title: "CLA: Programming Essential in C",
      issuer: "CISCO NETWORKING ACADEMY",
      date: "November 2023",
      link: "https://drive.google.com/file/d/1pdenm7falRY-k0m4OvtmcyIrBSgouJOX/view?usp=sharing",
    },
    {
      title: "Google Cybersecurity Jam",
      issuer: "Google | Coursera",
      date: "March 2024",
      link: "https://coursera.org/verify/professional-cert/Q7ZFH3XCGH64",
    },
    {
      title: "Google AI Essential",
      issuer: "Google | Coursera",
      date: "October 2024",
      link: "https://www.coursera.org/account/accomplishments/verify/CZKZCYKVGT9L",
    },
    {
      title: "Participation in Gen AI Hackathon",
      issuer: "INTEL | KPR Institute",
      date: "October 2024",
      link: "https://drive.google.com/file/d/1NO1gZZ-Qy6hyy-UM7IvG1o-vDjm_E7cX/view?usp=sharing",
    }
  ];

  const batches = [
    {
      batchName: "DevFest 2023 attendee",
      issueDate: "October 2023",
      link: "https://g.dev/rahgulms",
    }
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Certifications and Batches
        </h2>
        
        {/* Certifications Section */}
        <h3 className="text-2xl font-semibold text-blue-800 mb-6">Certifications</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {certifications.map((cert, index) => (
            <CertificationCard key={index} {...cert} />
          ))}
        </div>

        {/* Batches Section */}
        <h3 className="text-2xl font-semibold text-blue-800 mb-6">Batches</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {batches.map((batch, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500"
            >
              <h4 className="text-xl font-semibold text-gray-900 mb-2">{batch.batchName}</h4>
              <p className="text-gray-700">
                <strong>Issue Date:</strong> {batch.issueDate}
              </p>
              <a
                href={batch.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-bold underline hover:text-blue-800 transition-colors mt-2 inline-block"
              >
                View Details
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
