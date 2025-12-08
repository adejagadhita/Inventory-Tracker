import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // Logika register di sini (misal: kirim ke API)
    console.log("Register Submitted");
    navigate('/login'); // Redirect ke login setelah sukses daftar
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-dark p-4">
      {/* Container Box */}
      <div className="bg-[#0f282a] p-10 rounded-sm shadow-2xl w-full max-w-md border border-gray-800">
        
        {/* Header */}
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          Register Account
        </h2>
        
        {/* Form */}
        <form onSubmit={handleRegister} className="space-y-5">
          
          {/* Full Name */}
          <div>
            <label className="block text-xs font-medium text-gray-400 mb-2 uppercase tracking-wide">
              Full Name
            </label>
            <input 
              type="text" 
              className="w-full bg-[#163033] border border-gray-700 rounded p-3 text-white focus:outline-none focus:border-brand-accent transition"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-medium text-gray-400 mb-2 uppercase tracking-wide">
              Email
            </label>
            <input 
              type="email" 
              className="w-full bg-[#163033] border border-gray-700 rounded p-3 text-white focus:outline-none focus:border-brand-accent transition"
              placeholder="Enter your email"
            />
          </div>
          
          {/* Password */}
          <div>
            <label className="block text-xs font-medium text-gray-400 mb-2 uppercase tracking-wide">
              Password
            </label>
            <input 
              type="password" 
              className="w-full bg-[#163033] border border-gray-700 rounded p-3 text-white focus:outline-none focus:border-brand-accent transition"
              placeholder="Create a password"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-xs font-medium text-gray-400 mb-2 uppercase tracking-wide">
              Confirm Password
            </label>
            <input 
              type="password" 
              className="w-full bg-[#163033] border border-gray-700 rounded p-3 text-white focus:outline-none focus:border-brand-accent transition"
              placeholder="Retype your password"
            />
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-full bg-gray-300 hover:bg-white text-black font-bold py-3 rounded-sm transition-colors mt-6"
          >
            Sign Up
          </button>
        </form>

        {/* Link to Login */}
        <p className="text-center text-gray-500 text-sm mt-6">
          Already have an account? <Link to="/login" className="text-white hover:underline">Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;