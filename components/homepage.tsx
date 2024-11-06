// pages/index.tsx

import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold text-gray-900">
            Hi, I&apos;m Matt Wickman
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Software Developer, Leader, and Inventor with 15+ years of experience in Web and Mobile Apps
          </p>
        </div>
      </section>

      {/* About Me Section */}
      <section className="bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
          <p className="mt-4 text-lg text-gray-700">
            I&apos;ve been doing software development with a focus on web and mobile apps for about 15 years. My passion lies in creating efficient and user-friendly applications that make a difference.
          </p>
        </div>
      </section>

      {/* Patents Section */}
      <section className="bg-white">
        <div className="max-w-3xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900">Patents</h2>
          <ul className="mt-4 space-y-4">
            <li className="text-lg text-gray-700">
              <strong>Real-Time Street Parking</strong> - A system and method for real-time street parking management.
            </li>
            <li className="text-lg text-gray-700">
              <strong>Adaptive Edge Engine</strong> - An infrastructure program for adaptive edge computing.
            </li>
          </ul>
        </div>
      </section>

      {/* Personal Life Section */}
      <section className="bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900">Personal Life</h2>
          <p className="mt-4 text-lg text-gray-700">
            I live in Colorado with my family, including two wonderful kids who are currently in school. In my free time, I enjoy exploring the outdoors and spending quality time with my loved ones.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;