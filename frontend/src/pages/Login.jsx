import React, { useState } from 'react';
import useAuth from '../hooks/useAuth.js';
import { ReactComponent as LoginIcon } from '../assets/icons/login.svg';

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const fakeUser = { email };
    const fakeToken = 'jwt-token';
    login(fakeUser, fakeToken);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-96">
        <div className="flex items-center gap-2 mb-6">
          <LoginIcon className="w-6 h-6 text-indigo-600" />
          <h2 className="text-xl font-bold text-gray-800">Login</h2>
        </div>
        <input type="email" placeholder="Email" className="w-full p-2 mb-4 border rounded-md"
          value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" className="w-full p-2 mb-4 border rounded-md"
          value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700">
          Login
        </button>
        <p className="text-sm text-gray-500 mt-4 text-center">
          Belum punya akun? <a href="/register" className="text-indigo-600">Register</a>
        </p>
      </form>
    </div>
  );
};

export default Login;