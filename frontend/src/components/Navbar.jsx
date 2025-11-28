// frontend/src/components/Navbar.jsx
import React from 'react';
import { ReactComponent as UserIcon } from '../assets/icons/user.svg';
import { ReactComponent as NotificationIcon } from '../assets/icons/notification.svg';
import { ReactComponent as LogoutIcon } from '../assets/icons/logout.svg';

const Navbar = ({ onLogout }) => {
  return (
    <nav className="flex items-center justify-between bg-indigo-600 px-6 py-3 text-white shadow-md">
      {/* Logo */}
      <div className="text-lg font-bold">RexalctaBotz</div>

      {/* Right section */}
      <div className="flex items-center gap-4">
        <button className="relative">
          <NotificationIcon className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-xs rounded-full px-1">3</span>
        </button>
        <UserIcon className="w-6 h-6 cursor-pointer" />
        <button onClick={onLogout}>
          <LogoutIcon className="w-6 h-6 cursor-pointer" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;