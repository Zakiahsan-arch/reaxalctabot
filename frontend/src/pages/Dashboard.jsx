// frontend/src/pages/Dashboard.jsx
import React from 'react';
import Sidebar from '../components/Sidebar.jsx';
import Navbar from '../components/Navbar.jsx';
import QrBox from '../components/QrBox.jsx';
import useBotStatus from '../hooks/useBotStatus.js';
import LoadingSpinner from '../components/LoadingSpinner.jsx';

const Dashboard = () => {
  const { botStatus, qrCode, messages } = useBotStatus();

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-6 overflow-y-auto">
          <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

          {/* Status Bot */}
          <div className="mb-6">
            <p className="text-lg">
              Status Bot:{" "}
              <span
                className={`font-semibold ${
                  botStatus === 'online' ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {botStatus}
              </span>
            </p>
          </div>

          {/* QR Box */}
          <QrBox qrCode={qrCode} />

          {/* Log Pesan */}
          <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2">Log Pesan</h2>
            {messages.length === 0 ? (
              <p className="text-gray-500">Belum ada pesan...</p>
            ) : (
              <ul className="space-y-2">
                {messages.map((msg, idx) => (
                  <li key={idx} className="text-sm text-gray-700">
                    {msg}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;