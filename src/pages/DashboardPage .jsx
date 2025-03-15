import React from "react";

const DashboardPage = () => {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 shadow rounded text-center">
          <h2 className="text-lg font-semibold">Total Users</h2>
          <p className="text-3xl font-bold text-blue-600">1,250</p>
        </div>
        <div className="bg-white p-4 shadow rounded text-center">
          <h2 className="text-lg font-semibold">Monthly Revenue</h2>
          <p className="text-3xl font-bold text-green-600">$18,750</p>
        </div>
        <div className="bg-white p-4 shadow rounded text-center">
          <h2 className="text-lg font-semibold">Open Tickets</h2>
          <p className="text-3xl font-bold text-red-600">24</p>
        </div>
      </div>

      {/* Recent Activities Section */}
      <div className="bg-white p-4 shadow rounded mb-6">
        <h2 className="text-lg font-semibold mb-4">Recent Activities</h2>
        <ul>
          <li className="border-b py-2">
            <span className="font-bold text-blue-500">John Doe</span> added a
            new user.
            <span className="text-gray-500 text-sm ml-2">5 mins ago</span>
          </li>
          <li className="border-b py-2">
            <span className="font-bold text-blue-500">Jane Smith</span> resolved
            a ticket.
            <span className="text-gray-500 text-sm ml-2">2 hours ago</span>
          </li>
          <li className="border-b py-2">
            <span className="font-bold text-blue-500">Alice Brown</span> updated
            her profile.
            <span className="text-gray-500 text-sm ml-2">1 day ago</span>
          </li>
        </ul>
      </div>

      {/* Graph or Chart Section */}
      <div className="bg-white p-4 shadow rounded">
        <h2 className="text-lg font-semibold mb-4">Performance Overview</h2>
        <div className="h-64 bg-gray-200 flex items-center justify-center">
          {/* Placeholder for a chart */}
          <p className="text-gray-500">
            Chart goes here (e.g., Line or Bar Chart)
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
