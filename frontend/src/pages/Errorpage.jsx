import React from 'react';
import { Link } from 'react-router-dom';

const Errorpage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4">
      <h1 className="text-6xl font-extrabold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Oops! Page Not Found</h2>
      <p className="text-center text-lg text-white/80 max-w-md mb-6">
        The page you are looking for doesn't exist or has been moved. Let's get you back on track!
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg no-underline shadow hover:bg-gray-100 transition duration-300"
      >
        Go to Homepage
      </Link>
    </div>
  );
};

export default Errorpage;
