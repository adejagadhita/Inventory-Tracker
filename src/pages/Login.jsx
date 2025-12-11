import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import bcrypt from 'bcryptjs';
import { Eye, EyeOff } from 'lucide-react'; // 🔥 ICON MATA

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false); // 👁️ state toggle

  const guestUser = {
    id: 'guest',
    name: 'Guest',
    email: '',
    role: 'guest'
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const q = query(collection(db, 'users'), where('email', '==', email));
      const snapshot = await getDocs(q);

      if (snapshot.empty) {
        setError("Email not found");
        return;
      }

      const userDoc = snapshot.docs[0];
      const userData = userDoc.data();

      const isPasswordValid = bcrypt.compareSync(password, userData.passwordHash);
      if (!isPasswordValid) {
        setError("Incorrect password");
        return;
      }

      localStorage.setItem('user', JSON.stringify({
        id: userDoc.id,
        name: userData.name,
        email: userData.email,
        role: userData.role
      }));

      navigate('/dashboard');

    } catch (err) {
      console.error(err);
      setError("Login failed. Try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-dark p-4">
      <div className="bg-[#0f282a] p-10 rounded-sm shadow-2xl w-full max-w-md border border-gray-800">

        <h2 className="text-3xl font-bold text-center mb-8">
          <span className="text-white">Log in</span>
        </h2>

        <form onSubmit={handleLogin} className="space-y-6">
          {error && <p className='text-red-500'>{error}</p>}

          {/* EMAIL */}
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

          {/* PASSWORD + EYE ICON */}
          <div className="relative">
            <label className="block text-xs font-medium text-gray-400 mb-2 uppercase tracking-wide">
              Password
            </label>

            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#163033] border border-gray-700 rounded p-3 pr-12 text-white focus:outline-none focus:border-brand-accent transition"
              placeholder="Enter your password"
              required
            />

            {/* ICON MATA */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-[43px] text-gray-400 hover:text-white"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>

            {/* GUEST */}
            <label
              type="button"
              onClick={() => {
                localStorage.setItem('user', JSON.stringify(guestUser));
                navigate('/dashboard');
              }}
              className="text-m font-light text-blue-400 cursor-pointer hover:underline block mt-2"
            >
              Continue as Guest
            </label>
          </div>

          {/* BUTTON LOGIN */}
          <button 
            type="submit"
            className="w-full bg-gray-300 hover:bg-white text-black font-bold py-3 rounded-sm transition-colors mt-4 cursor-pointer"
          >
            Log in
          </button>
        </form>

        <p className="text-center text-gray-500 text-sm mt-6">
          Don't have an account? 
          <a href="/register" className="text-white hover:underline"> Sign up</a>
        </p>

      </div>
    </div>
  );
};

export default Login;
