import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/dashboard'); // Redirect ke dashboard setelah login
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-dark p-4">
      <div className="bg-[#0f282a] p-10 rounded-sm shadow-2xl w-full max-w-md border border-gray-800">
        <h2 className="text-3xl font-bold text-center mb-8 text-black bg-transparent">
          <span className="text-white">Log in</span>
        </h2>
        
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-xs font-medium text-gray-400 mb-2 uppercase tracking-wide">Email</label>
            <input 
              type="email" 
              className="w-full bg-[#163033] border border-gray-700 rounded p-3 text-white focus:outline-none focus:border-brand-accent transition"
              placeholder="Enter your email"
            />
          </div>
          
          <div>
            <label className="block text-xs font-medium text-gray-400 mb-2 uppercase tracking-wide">Password</label>
            <input 
              type="password" 
              className="w-full bg-[#163033] border border-gray-700 rounded p-3 text-white focus:outline-none focus:border-brand-accent transition"
              placeholder="Enter your password"
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-gray-300 hover:bg-white text-black font-bold py-3 rounded-sm transition-colors mt-4"
          >
            Log in
          </button>
        </form>

        <p className="text-center text-gray-500 text-sm mt-6">
          Don't have an account? <a href="/register" className="text-white hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;