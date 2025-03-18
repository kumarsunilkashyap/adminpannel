import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    // Add your logout logic here, like clearing user session or token
    console.log("User logged out");
  };

  const handleCancel = () => {
    // Logic to redirect back to dashboard or previous page
    console.log("Logout canceled");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-900">
      <div className="bg-white p-6 rounded shadow-md text-center">
        <h1 className="text-xl font-bold mb-4">
          Are you sure you want to log out?
        </h1>
        <p className="mb-6 text-gray-600">
          You will be logged out of your account and redirected to the login
          page.
        </p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => {
              navigate("login");
            }}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Yes, Log Out
          </button>
          <button
            onClick={handleCancel}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logout;
