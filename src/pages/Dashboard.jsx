import React, { useState } from "react";
import { FaUsers, FaChartLine, FaDollarSign, FaArrowUp, FaArrowDown, FaUserPlus, FaUserCheck, FaBell, FaSyncAlt } from "react-icons/fa";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

// Simulated notifications
const notifications = [
  { id: 1, message: "New user registered: John Doe", time: "2 min ago" },
  { id: 2, message: "Strategy 'Classic' reached 200 copiers!", time: "10 min ago" },
  { id: 3, message: "Monthly return updated for June", time: "1 hour ago" },
];

const stats = [
  {
    label: "Total Users",
    value: 1240,
    icon: <FaUsers className="text-3xl text-[#a7ec4f]" />,
    change: "+5.2%",
    positive: true,
  },
  {
    label: "Total Investments",
    value: "$320,000",
    icon: <FaDollarSign className="text-3xl text-[#a7ec4f]" />,
    change: "+2.8%",
    positive: true,
  },
  {
    label: "Active Copiers",
    value: 410,
    icon: <FaChartLine className="text-3xl text-[#a7ec4f]" />,
    change: "-1.1%",
    positive: false,
  },
];

const userGrowthData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "New Users",
      data: [50, 80, 60, 120, 90, 110, 130],
      borderColor: "#013024",
      backgroundColor: "rgba(1,48,36,0.1)",
      tension: 0.4,
      fill: true,
      pointRadius: 5,
      pointBackgroundColor: "#a7ec4f",
    },
  ],
};

const lineData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "Monthly Returns (%)",
      data: [2.1, 3.5, 1.8, 4.2, 3.9, 2.7, 4.5],
      borderColor: "#a7ec4f",
      backgroundColor: "rgba(167,236,79,0.2)",
      tension: 0.4,
      fill: true,
      pointRadius: 5,
      pointBackgroundColor: "#013024",
    },
  ],
};

const barData = {
  labels: ["Classic", "High Risk", "Balanced"],
  datasets: [
    {
      label: "Strategy Copiers",
      data: [210, 120, 80],
      backgroundColor: ["#a7ec4f", "#013024", "#eaffc7"],
      borderRadius: 8,
    },
  ],
};

const doughnutData = {
  labels: ["Profit Share", "Management Fee", "Other"],
  datasets: [
    {
      data: [70, 20, 10],
      backgroundColor: ["#a7ec4f", "#013024", "#eaffc7"],
      borderWidth: 2,
    },
  ],
};

// Simulated recent users
const recentUsers = [
  { name: "Alice", joined: "2025-06-16", status: "Active" },
  { name: "Bob", joined: "2025-06-15", status: "Active" },
  { name: "Charlie", joined: "2025-06-14", status: "Pending" },
  { name: "Diana", joined: "2025-06-13", status: "Active" },
];

const Dashboard = () => {
  const location = useLocation();
  const [refreshing, setRefreshing] = useState(false);

  // Simulate refresh
  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1000);
  };

  return (
    <div className="bg-[#f7fff6] min-h-screen">
      {/* Hero/Banner Section - EXACT same style as Contact page */}
      <section className="bg-[#013024] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Dashboard <span className="text-[#a7ec4f]">EarningSync</span>
            </h1>
            <p className="text-xl mb-4 text-green-100">
              View your website performance and analytics at a glance.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto py-12 px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#013024] text-center md:text-left">
            Website Performance Dashboard
          </h1>
          <button
            onClick={handleRefresh}
            className="inline-flex items-center gap-2 px-5 py-2 bg-[#a7ec4f] text-[#013024] font-bold rounded-full shadow hover:bg-[#bfff5c] transition-all text-base"
            disabled={refreshing}
          >
            <FaSyncAlt className={refreshing ? "animate-spin" : ""} />
            {refreshing ? "Refreshing..." : "Refresh Data"}
          </button>
        </div>

        {/* Notifications */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <FaBell className="text-[#a7ec4f]" />
            <span className="font-bold text-[#013024]">Notifications</span>
          </div>
          <ul className="bg-white rounded-xl shadow p-4 border border-[#a7ec4f]/20 space-y-2">
            {notifications.map((n) => (
              <li key={n.id} className="flex items-center gap-2 text-gray-700">
                <span className="w-2 h-2 bg-[#a7ec4f] rounded-full inline-block" />
                <span>{n.message}</span>
                <span className="ml-auto text-xs text-gray-400">{n.time}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border border-[#a7ec4f]/30"
            >
              <div className="mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold text-[#013024] mb-1">{stat.value}</div>
              <div className="text-gray-700 font-medium mb-2">{stat.label}</div>
              <div className={`flex items-center gap-1 text-sm font-semibold ${stat.positive ? "text-green-600" : "text-red-500"}`}>
                {stat.positive ? <FaArrowUp /> : <FaArrowDown />}
                {stat.change} this month
              </div>
            </div>
          ))}
        </div>

        {/* Graphs */}
        <div className="grid md:grid-cols-2 gap-10 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-[#a7ec4f]/20">
            <h2 className="text-lg font-bold mb-4 text-[#013024]">Monthly Returns</h2>
            <Line data={lineData} options={{
              responsive: true,
              plugins: { legend: { display: false } },
              scales: {
                y: { beginAtZero: true, ticks: { color: "#013024" } },
                x: { ticks: { color: "#013024" } }
              }
            }} />
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-[#a7ec4f]/20">
            <h2 className="text-lg font-bold mb-4 text-[#013024]">Copiers by Strategy</h2>
            <Bar data={barData} options={{
              responsive: true,
              plugins: { legend: { display: false } },
              scales: {
                y: { beginAtZero: true, ticks: { color: "#013024" } },
                x: { ticks: { color: "#013024" } }
              }
            }} />
          </div>
        </div>

        {/* More Graphs */}
        <div className="grid md:grid-cols-2 gap-10 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-[#a7ec4f]/20">
            <h2 className="text-lg font-bold mb-4 text-[#013024]">User Growth</h2>
            <Line data={userGrowthData} options={{
              responsive: true,
              plugins: { legend: { display: false } },
              scales: {
                y: { beginAtZero: true, ticks: { color: "#013024" } },
                x: { ticks: { color: "#013024" } }
              }
            }} />
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-[#a7ec4f]/20 flex flex-col justify-center">
            <h2 className="text-lg font-bold mb-4 text-[#013024] text-center">Revenue Breakdown</h2>
            <Doughnut data={doughnutData} options={{
              plugins: {
                legend: {
                  display: true,
                  position: "bottom",
                  labels: { color: "#013024", font: { size: 14 } }
                }
              }
            }} />
          </div>
        </div>

        {/* Recent Users Table */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-[#a7ec4f]/20 mb-12">
          <h2 className="text-lg font-bold mb-4 text-[#013024]">Recent Users</h2>
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="pb-2 text-[#013024]">Name</th>
                <th className="pb-2 text-[#013024]">Joined</th>
                <th className="pb-2 text-[#013024]">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentUsers.map((user, idx) => (
                <tr key={idx} className="border-t border-[#a7ec4f]/10">
                  <td className="py-2 flex items-center gap-2">
                    {user.status === "Active" ? (
                      <FaUserCheck className="text-green-500" />
                    ) : (
                      <FaUserPlus className="text-yellow-500" />
                    )}
                    {user.name}
                  </td>
                  <td className="py-2">{user.joined}</td>
                  <td className="py-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold
                      ${user.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"}
                    `}>
                      {user.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Note */}
        <div className="text-center text-gray-500 mt-8">
          <span className="text-[#a7ec4f] font-bold">EarningSync</span> Dashboard &mdash; All data shown is for demonstration purposes.
        </div>
        {/* Navbar Link Example */}
        <div className="mt-8 text-center">
          <Link
            to="/dashboard"
            className={`px-4 py-2 rounded-full font-semibold transition hover:bg-[#a7ec4f]/20 ${
              location.pathname === "/dashboard"
                ? "text-[#a7ec4f] underline"
                : "text-[#013024]"
            }`}
          >
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;