import React from 'react';
import { Briefcase, ExternalLink } from 'lucide-react'; // Import the ExternalLink icon

const Experience = () => {
  const tasks = [
    {
      title: "Task 1",
      description: "I created a registration form using Tkinter. This simple form collects user details and stores them in a Word file. It also includes a verification step to ensure the entered data is correct.",
      link: "https://github.com/msrahgul/Internship_2024_Summer/tree/main/Next24Tech/Task%201"
    },
    {
      title: "Task 2",
      description: "I created a cricket chatbot using Tkinter for the graphical user interface. I utilized FuzzyWuzzy for fuzzy string matching and Python's logging module for event logging. The chatbot is designed to answer questions based on pre-fed data.",
      link: "https://github.com/msrahgul/Internship_2024_Summer/tree/main/Next24Tech/Task%202"
    },
    {
      title: "Task 3",
      description: "I created a lyrics fetcher using Tkinter for the graphical interface and the Genius API to fetch song lyrics. The application offers two options: upload a song or enter the artist and song name. The lyrics are then fetched automatically.",
      link: "https://github.com/msrahgul/Internship_2024_Summer/tree/main/Next24Tech/Task%203"
    }
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Work Experience</h2>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-start gap-4">
            <Briefcase className="text-blue-600 mt-1" size={24} />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Python Development Intern</h3>
              <p className="text-gray-600">Next24Tech</p>
              <p className="text-gray-500">May 20, 2024 - July 20, 2024</p>
              <p className="text-gray-700 mt-4">
                During my internship at Next24Tech, I had the opportunity to work on three significant projects
                that enhanced my technical skills and provided valuable industry experience. Each task was designed
                to challenge different aspects of Python development and problem-solving abilities.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tasks.map((task, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{task.title}</h4>
              <p className="text-gray-700">{task.description}</p>
              <a
                href={task.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-bold underline hover:text-blue-800 transition-colors text-sm flex items-center gap-2"
              >
                View Project
                <ExternalLink size={16} className="text-blue-600" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
