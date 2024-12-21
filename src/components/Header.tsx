import React from 'react';
import profilePhoto from '../assests/images/profile.jpg';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-700 to-blue-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-48 h-48 rounded-full overflow-hidden bg-white/10 flex items-center justify-center border-4 border-white/20">
            {/* Profile photo */}
            <img
              src={profilePhoto}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Rahgul M S</h1>
            <p className="text-xl sm:text-2xl text-blue-100 mb-4">STUDENT | PYTHON DEVELOPER</p>
            <p className="text-lg text-blue-100 mb-8 max-w-3xl">
              Second-year B.Tech student specializing in Computer Science and Engineering with a focus on
              Artificial Intelligence and Machine Learning at the Karunya Institute of Technology and Sciences.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
