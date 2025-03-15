import React, { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-blue-600 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4">
          <h2 className="text-lg font-bold">My Sidebar</h2>
        </div>
        <nav className="p-4 space-y-2">
          <a href="#" className="block py-2 px-4 rounded hover:bg-blue-700">
            Home
          </a>
          <a href="#" className="block py-2 px-4 rounded hover:bg-blue-700">
            About
          </a>
          <a href="#" className="block py-2 px-4 rounded hover:bg-blue-700">
            Services
          </a>
          <a href="#" className="block py-2 px-4 rounded hover:bg-blue-700">
            Contact
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-0 lg:ml-64 transition-margin duration-300 ease-in-out">
        <header className="p-4 bg-white shadow flex justify-between items-center">
          <button className="text-blue-600 lg:hidden" onClick={toggleSidebar}>
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
          <h1 className="text-lg font-bold">Responsive Sidebar</h1>
        </header>
        <main className="p-4">
          <p>Welcome to the main content area!</p>
        </main>
      </div>
    </div>
  );
};

export default Sidebar;
