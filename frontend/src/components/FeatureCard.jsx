// frontend/src/components/FeatureCard.jsx
import React from 'react';

const FeatureCard = ({ icon: Icon, title, description, enabled, onToggle }) => {
  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition">
      {/* Icon */}
      {Icon && <Icon className="w-8 h-8 text-indigo-600" />}
      
      {/* Text */}
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>

      {/* Toggle */}
      <button
        onClick={onToggle}
        className={`px-3 py-1 rounded-md text-sm font-medium ${
          enabled ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-700'
        }`}
      >
        {enabled ? 'Aktif' : 'Nonaktif'}
      </button>
    </div>
  );
};

export default FeatureCard;