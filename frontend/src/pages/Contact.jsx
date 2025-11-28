// frontend/src/pages/Contact.jsx
import React from 'react';
import Sidebar from '../components/Sidebar.jsx';
import Navbar from '../components/Navbar.jsx';
import { ReactComponent as ContactIllustration } from '../assets/illustrations/contact-me.svg';

const Contact = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-6">
          <h1 className="text-2xl font-bold mb-4">Contact Me</h1>
          <div className="flex flex-col items-center">
            <ContactIllustration className="w-96 h-64 mb-6" />
            <div className="space-y-2 text-center">
              <p className="text-gray-700">Email: <span className="font-semibold">muhammadzakiahsan@gmail.com</span></p>
              <p className="text-gray-700">WhatsApp: <span className="font-semibold">085729769183</span></p>
              <p className="text-gray-700">Instagram: <span className="font-semibold">@zzakiahsan</span></p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Contact;