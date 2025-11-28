import React from 'react';
import { ReactComponent as HeroIllustration } from '../assets/illustrations/landing-hero.svg';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <HeroIllustration className="w-96 h-48 mb-6" />
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Selamat Datang di RexalctaBot
      </h1>
      <p className="text-gray-600 text-center max-w-md mb-6">
        Platform manajemen WhatsApp Bot yang aman, interaktif, dan mudah digunakan.
      </p>
      <div className="flex gap-4">
        <a href="/login" className="px-6 py-2 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700">
          Login
        </a>
        <a href="/register" className="px-6 py-2 bg-gray-200 text-gray-800 rounded-md shadow hover:bg-gray-300">
          Register
        </a>
      </div>
    </div>
  );
};

export default Home;