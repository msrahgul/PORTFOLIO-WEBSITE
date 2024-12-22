import React from 'react';
import CertificationCard from './CertificationCard';

const Certifications = () => {
  const certifications = [
    {
      title: "English Language And Literature",
      issuer: "NPTEL",
      date: "JAN-APR 2024",
      link: "https://drive.google.com/file/d/1WaCJtjsGok_0-iGAwGfVQ70OERNczGof/view?usp=sharing",
    },
    {
      title: "PCAP: Programming Essentials in Python",
      issuer: "CISCO NETWORKING ACADEMY",
      date: "JAN 2024",
      link: "https://drive.google.com/file/d/12aJjuZ_MJcyAgYHXyNYAlNcVCBve8TVT/view?usp=sharing",
    },
    {
      title: "CLA: Programming Essential in C",
      issuer: "CISCO NETWORKING ACADEMY",
      date: "NOV 2023",
      link: "https://drive.google.com/file/d/1pdenm7falRY-k0m4OvtmcyIrBSgouJOX/view?usp=sharing",
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Certifications
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <CertificationCard key={index} {...cert} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
