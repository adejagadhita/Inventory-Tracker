import React, {useState}from 'react';
import {db} from '../firebase';
import { collection, addDoc, Timestamp, query, where, getDocs }  from 'firebase/firestore';
import { Link, useNavigate } from 'react-router-dom';
import bcrypt from 'bcryptjs';

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const q = query(collection(db, 'users'), where('email', '==', email));
      const snapshot = await getDocs(q);
      if (!snapshot.empty) {
        setError("Email already registered");
        return;
      }

      const salt = bcrypt.genSaltSync(10);
      const passwordHash = bcrypt.hashSync(password, salt);

      await addDoc(collection(db, 'users'), {
        name,
        email,
        passwordHash,
        role: 'viewer',
        createdAt: Timestamp.now()
      });

      alert("Register successful! You can login now.")
      navigate('/login');

    }catch (err) {
      console.error(err);
      setError("Failed to register. Try again.");
    }
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
          {error && <p className='text-red-500'>{error}</p>}
          
          {/* Full Name */}
          <div>
            <label className="block text-xs font-medium text-gray-400 mb-2 uppercase tracking-wide">
              Full Name
            </label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-[#163033] border border-gray-700 rounded p-3 text-white focus:outline-none focus:border-brand-accent transition"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-medium text-gray-400 mb-2 uppercase tracking-wide">
              Email
            </label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#163033] border border-gray-700 rounded p-3 text-white focus:outline-none focus:border-brand-accent transition"
              placeholder="Enter your email"
              required
            />
          </div>
          
          {/* Password */}
          <div>
            <label className="block text-xs font-medium text-gray-400 mb-2 uppercase tracking-wide">
              Password
            </label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#163033] border border-gray-700 rounded p-3 text-white focus:outline-none focus:border-brand-accent transition"
              placeholder="Create a password"
              required
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-xs font-medium text-gray-400 mb-2 uppercase tracking-wide">
              Confirm Password
            </label>
            <input 
              type="password" 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full bg-[#163033] border border-gray-700 rounded p-3 text-white focus:outline-none focus:border-brand-accent transition"
              placeholder="Retype your password"
              required
            />

         
          </div>

          


          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-full bg-gray-300 hover:bg-white text-black font-bold py-3 rounded-sm transition-colors mt-6 cursor-pointer"
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