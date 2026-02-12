import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md sm:max-w-lg bg-white rounded-xl shadow-lg p-5 sm:p-8">
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">
          About Me
        </h2>

        <p className="text-gray-600 text-sm sm:text-base text-center mb-4">
          Hi, I’m <span className="font-semibold">Ismail Koppal</span>, a passionate
          React.js Developer with 2+ years of experience in building responsive
          and user-friendly web applications.
        </p>

        <div className="mb-4">
          <h3 className="font-semibold mb-2">Skills</h3>
          <ul className="grid grid-cols-2 gap-2 text-sm sm:text-base text-gray-700">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Tailwind CSS</li>
            <li>JavaScript (ES6+)</li>
            <li>React.js</li>
            <li>Redux Toolkit</li>
            <li>React Router</li>
          </ul>
        </div>

        <div className="text-gray-600 text-sm sm:text-base">
          <p>
            I have experience working on real-world projects, handling API
            integrations, state management using Redux, and building scalable
            frontend architectures.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
