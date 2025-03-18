import React, { useState } from "react";

const SettingPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSaveChanges = () => {
    // Add logic to save changes
    console.log("Changes saved:", { username, email });
  };

  const handleUpdatePassword = () => {
    // Add logic to update password
    console.log("Password updated:", password);
  };

  return (
    <div className="p-4 pb-20 min-h-screen bg-gray-100 text-gray-900">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>

      {/* Account Settings Section */}
      <div className="bg-white shadow rounded p-4 mb-6">
        <h2 className="text-lg font-semibold mb-4">Account Settings</h2>
        <div className="mb-4">
          <label className="block font-medium mb-1">Username</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-1">Email</label>
          <input
            type="email"
            className="w-full p-2 border rounded"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={handleSaveChanges}
        >
          Save Changes
        </button>
      </div>

      {/* Preferences Section */}
      <div className="bg-white shadow rounded p-4 mb-6">
        <h2 className="text-lg font-semibold mb-4">Preferences</h2>
        <div className="mb-4">
          <label className="block font-medium mb-1">Language</label>
          <select className="w-full p-2 border rounded">
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
          </select>
        </div>
      </div>

      {/* Security Section */}
      <div className="bg-white shadow rounded p-4 mb-6">
        <h2 className="text-lg font-semibold mb-4">Security</h2>
        <div className="mb-4">
          <label className="block font-medium mb-1">Change Password</label>
          <input
            type="password"
            className="w-full p-2 border rounded"
            placeholder="Enter new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          onClick={handleUpdatePassword}
        >
          Update Password
        </button>
      </div>
    </div>
  );
};

export default SettingPage;
