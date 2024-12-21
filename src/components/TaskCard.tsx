import React from 'react';
import { Play } from 'lucide-react';

interface TaskCardProps {
  title: string;
  description: string;
  videoUrl: string;
}

const TaskCard: React.FC<TaskCardProps> = ({ title, description, videoUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a 
          href={videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Play size={16} className="mr-2" />
          Watch Demo
        </a>
      </div>
    </div>
  );
};

export default TaskCard;