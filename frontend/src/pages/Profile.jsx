// frontend/src/pages/Profile.jsx
import React from 'react';
import Sidebar from '../components/Sidebar.jsx';
import Navbar from '../components/Navbar.jsx';
import useAuth from '../hooks/useAuth.js';
import { ReactComponent as UserIcon } from '../assets/icons/user.svg';

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-6">
          <h1 className="text-2xl font-bold mb-4">Profile</h1>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center gap-4">
            <UserIcon className="w-12 h-12 text-indigo-600" />
            <div>
              <p className="text-lg font-semibold">{user?.email || 'Guest User'}</p>
              <p className="text-gray-600">Role: {user?.role || 'Member'}</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profile;