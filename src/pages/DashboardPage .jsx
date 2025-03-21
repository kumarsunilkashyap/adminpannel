import React from "react";
import { Line } from "react-chartjs-2";

const DashboardPage = () => {
  return (
    <div className="p-4 bg-gray-100 min-h-screen pb-20">
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
      {/* Performance Overview Section */}
      <div className="bg-white p-4 shadow rounded mb-6">
        <h2 className="text-lg font-semibold mb-4">Performance Overview</h2>
        <div className="h-64 bg-gray-200 flex items-center justify-center">
          <Line
            data={{
              labels: ["January", "February", "March", "April", "May"],
              datasets: [
                {
                  label: "Performance",
                  data: [65, 59, 80, 81, 56],
                  borderColor: "rgba(75,192,192,1)",
                  backgroundColor: "rgba(75,192,192,0.2)",
                },
              ],
            }}
            options={{ maintainAspectRatio: false }}
          />
        </div>
      </div>
      {/* New Chart Section: Sales Trends */}{" "}
      <div className="bg-white p-4 shadow rounded mb-6">
        <h2 className="text-lg font-semibold mb-4">Sales Trends</h2>
        <div className="h-64">
          <Line
            data={{
              labels: ["January", "February", "March", "April", "May"],
              datasets: [
                {
                  label: "Sales",
                  data: [120, 150, 180, 200, 220],
                  borderColor: "rgba(255,99,132,1)",
                  backgroundColor: "rgba(255,99,132,0.2)",
                },
              ],
            }}
            options={{ maintainAspectRatio: false }}
          />
        </div>
      </div>
      {/* New Chart Section: User Growth */}
      <div className="bg-white p-4 shadow rounded mb-6">
        <h2 className="text-lg font-semibold mb-4">User Growth</h2>
        <div className="h-64">
          <Line
            data={{
              labels: ["January", "February", "March", "April", "May"],
              datasets: [
                {
                  label: "User Growth",
                  data: [50, 100, 150, 200, 300],
                  borderColor: "rgba(54,162,235,1)",
                  backgroundColor: "rgba(54,162,235,0.2)",
                },
              ],
            }}
            options={{ maintainAspectRatio: false }}
          />
        </div>
      </div>
      <div className="bg-white p-4 shadow rounded mb-6">
        <h2 className="text-lg font-semibold mb-4">Tasks Overview</h2>
        <ul>
          <li className="border-b py-2">
            <span className="font-bold">Task 1:</span> Complete the monthly
            report.
            <span className="text-gray-500 text-sm ml-2">Due: Tomorrow</span>
          </li>
          <li className="border-b py-2">
            <span className="font-bold">Task 2:</span> Update user permissions.
            <span className="text-gray-500 text-sm ml-2">Due: 3 days</span>
          </li>
          <li className="border-b py-2">
            <span className="font-bold">Task 3:</span> Review support tickets.
            <span className="text-gray-500 text-sm ml-2">Due: End of week</span>
          </li>
        </ul>
      </div>
      {/* Notifications Section */}
      <div className="bg-white p-4 shadow rounded">
        <h2 className="text-lg font-semibold mb-4">Notifications</h2>
        <ul>
          <li className="border-b py-2">
            <span className="font-bold text-blue-500">System:</span> Server
            maintenance scheduled for tonight.
            <span className="text-gray-500 text-sm ml-2">1 hour ago</span>
          </li>
          <li className="border-b py-2">
            <span className="font-bold text-blue-500">Admin:</span> New policy
            updates available.
            <span className="text-gray-500 text-sm ml-2">3 hours ago</span>
          </li>
          <li className="border-b py-2">
            <span className="font-bold text-blue-500">Support:</span> Ticket
            #123 has been resolved.
            <span className="text-gray-500 text-sm ml-2">Yesterday</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardPage;
