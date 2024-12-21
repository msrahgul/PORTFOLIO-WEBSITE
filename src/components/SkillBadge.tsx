import React, { ReactNode } from 'react';

interface SkillBadgeProps {
  icon: ReactNode;
  name: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ icon, name }) => {
  return (
    <div className="flex items-center space-x-2 bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow">
      <span className="text-blue-600">{icon}</span>
      <span className="font-medium text-gray-800">{name}</span>
    </div>
  );
};

export default SkillBadge;