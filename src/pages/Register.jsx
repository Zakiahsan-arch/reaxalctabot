import React, { useState } from 'react';
import { ReactComponent as UserIcon } from '../assets/icons/user.svg';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Register:', { name, email, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-96">
        <div className="flex items-center gap-2 mb-6">
          <UserIcon className="w-6 h-6 text-indigo-600" />
          <h2 className="text-xl font-bold text-gray-800">Register</h2>
        </div>
        <input type="text" placeholder="Nama Lengkap" className="w-full p-2 mb-4 border rounded-md"
          value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Email" className="w-full p-2 mb-4 border rounded-md"
          value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" className="w-full p-2 mb-4 border rounded-md"
          value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700">
          Register
        </button>
        <p className="text-sm text-gray-500 mt-4 text-center">
          Sudah punya akun? <a href="/login" className="text-indigo-600">Login</a>
        </p>
      </form>
    </div>
  );
};

export default Register;