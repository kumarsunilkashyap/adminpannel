import React from "react";
import { NavLink } from "react-router-dom";
const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="text-2xl text-gray-600 mt-4">Page Not Found</p>
        <p className="text-gray-500 mt-2">
          Sorry, the page you are looking for does not exist.
        </p>
        <NavLink
          to="/dashboard"
          className="mt-6 inline-block px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          Go to Homepage
        </NavLink>
      </div>
    </div>
  );
};

export default PageNotFound;
