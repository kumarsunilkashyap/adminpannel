import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-gray-800 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4">
          <h2 className="text-lg font-bold text-white">Admin Panel</h2>
        </div>
        <nav className="p-4 space-y-2">
          <NavLink
            to="dashboard"
            className="block py-2 px-4 rounded hover:bg-gray-700"
          >
            📊 Dashboard
          </NavLink>
          <NavLink
            to="users"
            className="block py-2 px-4 rounded hover:bg-gray-700"
          >
            👥 Users
          </NavLink>
          <NavLink
            to="analytics"
            className="block py-2 px-4 rounded hover:bg-gray-700"
          >
            📈 Analytics
          </NavLink>
          <NavLink
            to="settings"
            className="block py-2 px-4 rounded hover:bg-gray-700"
          >
            ⚙️ Settings
          </NavLink>
          <NavLink
            to="logout"
            className="block py-2 px-4 rounded hover:bg-gray-700 text-red-500"
          >
            🚪 Logout
          </NavLink>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col ml-0 lg:ml-64 transition-margin duration-300 ease-in-out">
        <header className="p-4 bg-white shadow flex justify-between items-center sticky top-0 z-10">
          <button className="text-gray-800 lg:hidden" onClick={toggleSidebar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <h1 className="text-xl font-bold">Admin Panel</h1>
        </header>
        <main className="flex-1 p-4 bg-gray-100">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
export default AdminSidebar;
