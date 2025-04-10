import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            About Notes & ToDos
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Simplifying your life, one note and task at a time.
          </p>
        </div>


        <div className="relative mt-12 bg-white rounded-lg shadow-lg p-8 overflow-hidden group before:absolute before:left-0 before:bottom-0 before:w-full before:h-0 before:rounded-lg before:bg-blue-500 before:backdrop-blur-xl before:transition-all before:duration-500 before:ease-in-out hover:before:h-full before:z-0">

          <h3 className="relative text-2xl font-semibold text-gray-800 mb-6 z-10 transition-colors duration-500 group-hover:text-white">
            Our Mission
          </h3>
          <p className="relative text-gray-700 leading-relaxed mb-4 z-10 transition-colors duration-500 group-hover:text-white">
            We created Notes & ToDos to provide a clean, intuitive, and efficient way to manage your tasks and thoughts. In today fast-paced world, staying organized can be a challenge. Thats why we are dedicated to building a tool that helps you stay on top of your priorities, without unnecessary distractions.
          </p>
          <p className="relative text-gray-700 leading-relaxed z-10 transition-colors duration-500 group-hover:text-white">
            Our goal is to empower you to capture your ideas, plan your day, and achieve your goals with ease.
          </p>
        </div>

        <div className="relative mt-8 bg-white rounded-lg shadow-lg p-8 overflow-hidden group before:absolute before:left-0 before:bottom-0 before:w-full before:h-0 before:rounded-lg before:bg-purple-500 before:transition-all before:duration-500 before:ease-in-out hover:before:h-full before:z-0">

          <h3 className="relative text-2xl font-semibold text-gray-800 mb-6 z-10 transition-colors duration-500 group-hover:text-white">
            Why Notes & ToDos?
          </h3>
          <ul className="relative list-disc list-inside text-gray-700 z-10 transition-colors duration-500 group-hover:text-white">
            <li className="mb-2">
              <strong>Simplicity:</strong> We believe in a clutter-free interface that focuses on what matters.
            </li>
            <li className="mb-2">
              <strong>Accessibility:</strong> Access your notes and to-dos from anywhere, anytime.
            </li>
            <li className="mb-2">
              <strong>Productivity:</strong> Streamline your workflow and boost your efficiency.
            </li>
            <li>
              <strong>Focus:</strong> Minimize distractions and concentrate on your tasks.
            </li>
          </ul>
        </div>


        <div className="relative mt-8 bg-white rounded-lg shadow-lg p-8 overflow-hidden group before:absolute before:left-0 before:bottom-0 before:w-full before:h-0 before:rounded-lg before:bg-green-700 before:transition-all before:duration-500 before:ease-in-out hover:before:h-full before:z-0">

          <h3 className="relative text-2xl font-semibold text-gray-800 mb-6 z-10 transition-colors duration-500 group-hover:text-white">
            Our Commitment
          </h3>
          <p className="relative text-gray-700 leading-relaxed z-10 transition-colors duration-500 group-hover:text-white">
            We are constantly working to improve Notes & ToDos and provide you with the best possible experience. Your feedback is invaluable to us, and we are committed to making this tool even more useful for you.
          </p>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;