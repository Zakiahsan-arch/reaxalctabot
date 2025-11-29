// frontend/src/components/Toast.jsx
import React, { useEffect } from 'react';

const Toast = ({ message, type = 'info', onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); // auto close setelah 3 detik
    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor =
    type === 'success'
      ? 'bg-green-500'
      : type === 'error'
      ? 'bg-red-500'
      : 'bg-indigo-500';

  return (
    <div
      className={`${bgColor} text-white px-4 py-2 rounded-md shadow-md fixed bottom-4 right-4 animate-bounce`}
    >
      {message}
    </div>
  );
};

export default Toast;