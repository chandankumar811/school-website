import React from "react";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-2 lg:gap-y-4 md:gap-y-3">
      <div className="bg-gradient-to-r from-blue-800 to-blue-900 text-white lg:py-16 md:py-8 py-4 rounded-lg">
        <div className="container mx-auto lg:px-4 text-center">
          <h1 className="lg:text-4xl text-xl font-bold mb-4 lg:w-2/3 md:w-full mx-auto lg:px-3 px-2">
            Welcome to Shree Narayani Gandaki Shadharan Tatha Sanskrit Secondary
            School
          </h1>
          <p className="lg:text-xl text-lg mb-6">
            Preparing Students for the Future
          </p>
          <button className="bg-white text-blue-900 px-6 py-2 rounded-full font-bold hover:bg-blue-100 transition">
            Learn More
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-6 gap-2 px-1">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4 text-blue-900">
            Academic Excellence
          </h2>
          <p>
            Our school consistently maintains high academic standards with
            exceptional results in board examinations.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4 text-blue-900">
            Extracurricular Activities
          </h2>
          <p>
            We offer a wide range of sports, arts, and cultural activities to
            ensure holistic development.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4 text-blue-900">
            Modern Facilities
          </h2>
          <p>
            Our campus features well-equipped labs, a comprehensive library, and
            state-of-the-art classrooms.
          </p>
        </div>
      </div>

      <div className="px-1 w-full">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4 text-blue-900">
            Latest Announcements
          </h2>
          <div className="border-l-4 border-blue-900 pl-4 mb-4">
            <h3 className="font-bold">Annual Sports Day - April 15, 2025</h3>
            <p className="text-gray-600">
              Prepare for the upcoming annual sports competition
            </p>
          </div>
          <div className="border-l-4 border-blue-900 pl-4">
            <h3 className="font-bold">
              Parent-Teacher Meeting - April 20, 2025
            </h3>
            <p className="text-gray-600">
              Important meeting to discuss student progress
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
