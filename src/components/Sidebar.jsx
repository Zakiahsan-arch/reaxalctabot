// frontend/src/components/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as DashboardIcon } from '../assets/icons/dashboard.svg';
import { ReactComponent as BotIcon } from '../assets/icons/bot.svg';
import { ReactComponent as SettingsIcon } from '../assets/icons/settings.svg';
import { ReactComponent as PremiumIcon } from '../assets/icons/premium.svg';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-gray-100 h-screen flex flex-col shadow-lg">
      <div className="p-4 text-xl font-bold border-b border-gray-700">Menu</div>
      <nav className="flex-1 p-4 space-y-2">
        <NavLink to="/dashboard" className="flex items-center gap-2 p-2 rounded hover:bg-gray-700">
          <DashboardIcon className="w-5 h-5" /> Dashboard
        </NavLink>
        <NavLink to="/bot" className="flex items-center gap-2 p-2 rounded hover:bg-gray-700">
          <BotIcon className="w-5 h-5" /> Bot Manager
        </NavLink>
        <NavLink to="/settings" className="flex items-center gap-2 p-2 rounded hover:bg-gray-700">
          <SettingsIcon className="w-5 h-5" /> Settings
        </NavLink>
        <NavLink to="/pricing" className="flex items-center gap-2 p-2 rounded hover:bg-gray-700">
          <PremiumIcon className="w-5 h-5" /> Premium
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;