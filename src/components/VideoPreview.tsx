import React from 'react';
import { Play } from 'lucide-react';

interface VideoPreviewProps {
  videoUrl: string;
  title: string;
}

const VideoPreview: React.FC<VideoPreviewProps> = ({ videoUrl, title }) => {
  // Extract video ID from YouTube URL
  const videoId = videoUrl.split('v=')[1]?.split('&')[0];
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <div className="relative group">
      <img 
        src={thumbnailUrl}
        alt={`${title} preview`}
        className="w-full h-48 object-cover rounded-lg"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all rounded-lg flex items-center justify-center">
        <a
          href={videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-white rounded-full group-hover:scale-110 transition-transform"
        >
          <Play className="w-6 h-6 text-blue-600" />
        </a>
      </div>
    </div>
  );
};

export default VideoPreview;