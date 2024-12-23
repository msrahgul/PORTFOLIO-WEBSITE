import React from 'react';

const CertificationCard = ({ title, issuer, date, link }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      <p className="text-gray-700">Issued by: {issuer}</p>
      <p className="text-gray-500">{date}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline mt-2 block"
        >
          View Certificate
        </a>
      )}
    </div>
  );
};

export default CertificationCard;
