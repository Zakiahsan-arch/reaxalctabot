// frontend/src/pages/Pricing.jsx
import React from 'react';
import Sidebar from '../components/Sidebar.jsx';
import Navbar from '../components/Navbar.jsx';
import { ReactComponent as PricingIllustration } from '../assets/illustrations/pricing.svg';

const Pricing = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-6">
          <h1 className="text-2xl font-bold mb-4">Pricing</h1>
          <div className="flex flex-col items-center">
            <PricingIllustration className="w-96 h-64 mb-6" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h2 className="text-lg font-semibold mb-2">Free</h2>
                <p className="text-gray-600 mb-2">Basic Features</p>
                <p className="text-indigo-600 font-bold">Rp 0</p>
              </div>
              <div className="bg-indigo-600 text-white p-6 rounded-lg shadow-md text-center">
                <h2 className="text-lg font-semibold mb-2">Pro</h2>
                <p className="mb-2">Advanced Features</p>
                <p className="font-bold">Rp 50.000</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h2 className="text-lg font-semibold mb-2">Ultimate</h2>
                <p className="text-gray-600 mb-2">All Features</p>
                <p className="text-indigo-600 font-bold">Rp 100.000</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Pricing;