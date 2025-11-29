// frontend/src/components/QrBox.jsx
import React from 'react';

const QrBox = ({ qrCode }) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md">
      {/* Judul */}
      <h2 className="text-xl font-bold text-gray-800 mb-4 font-sans tracking-wide">
        Scan QR untuk Login WhatsApp
      </h2>

      {/* QR Code */}
      {qrCode ? (
        <img
          src={qrCode}
          alt="QR Code"
          className="w-64 h-64 border border-gray-300 p-2 rounded-md shadow-sm"
        />
      ) : (
        <p className="text-gray-500 italic">Menunggu QR code...</p>
      )}
    </div>
  );
};

export default QrBox;