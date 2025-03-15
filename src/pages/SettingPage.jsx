import React, { useState } from "react";

const SettingPage = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`p-4 min-h-screen ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <h1 className="text-2xl font-bold mb-6">Settings</h1>

      {/* Account Settings Section */}
      <div className="bg-white dark:bg-gray-800 shadow rounded p-4 mb-6">
        <h2 className="text-lg font-semibold mb-4">Account Settings</h2>
        <div className="mb-4">
          <label className="block font-medium mb-1">Username</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Enter your username"
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-1">Email</label>
          <input
            type="email"
            className="w-full p-2 border rounded"
            placeholder="Enter your email"
          />
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Save Changes
        </button>
      </div>

      {/* Preferences Section */}
      <div className="bg-white dark:bg-gray-800 shadow rounded p-4 mb-6">
        <h2 className="text-lg font-semibold mb-4">Preferences</h2>
        <div className="flex items-center justify-between">
          <span>Dark Mode</span>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={toggleDarkMode}
              className="toggle-checkbox hidden"
            />
            <div className="toggle-slot w-14 h-8 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer">
              <div
                className={`toggle-circle w-6 h-6 rounded-full bg-white shadow-md transform ${
                  darkMode ? "translate-x-6" : "translate-x-0"
                } transition-transform duration-300 ease-in-out`}
              />
            </div>
          </label>
        </div>
      </div>

      {/* Security Section */}
      <div className="bg-white dark:bg-gray-800 shadow rounded p-4 mb-6">
        <h2 className="text-lg font-semibold mb-4">Security</h2>
        <div className="mb-4">
          <label className="block font-medium mb-1">Change Password</label>
          <input
            type="password"
            className="w-full p-2 border rounded"
            placeholder="Enter new password"
          />
        </div>
        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
          Update Password
        </button>
      </div>
    </div>
  );
};

export default SettingPage;
