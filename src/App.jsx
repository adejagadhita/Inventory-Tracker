import React from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Inventory from './pages/Inventory';
import Sales from './pages/Sales';
import Users from './pages/Users';

// --- Layout Wrapper ---
const Layout = ({ children }) => {
  const location = useLocation();
  const publicRoutes = ['/', '/login', '/register'];
  const isPublicPage = publicRoutes.includes(location.pathname);

  const [openProfile, setOpenProfile] = React.useState(false);

  const user = {
    name: "Adenyobak",
    email: "user@gmail.com",
    role: "Admin"
  };

  return (
    <div className="flex min-h-screen bg-brand-dark text-brand-text font-sans">

      {!isPublicPage && <Sidebar />}

      <main
        className={`
          flex-1 transition-all duration-300 
          ${!isPublicPage ? 'md:ml-64' : 'w-full'}
        `}
      >

        {/* TOP BAR ICON PROFIL */}
        {!isPublicPage && (
          <div className="relative w-full flex justify-end p-4 bg-brand-dark">

            {/* ICON PROFIL */}
            <div
              className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer"
              onClick={() => setOpenProfile(!openProfile)}
            >
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-black"
              >
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M4.5 20.25a8.25 8.25 0 1115 0A17.933 17.933 0 0012 21.75c-2.676 0-5.216-.584-7.5-1.5z" />
              </svg>
            </div>

            {/* POPUP PROFIL */}
            {openProfile && (
              <div className="absolute z-50 top-16 right-4 bg-black -900 text-white p-5 rounded-xl shadow-xl w-72 border border-gray-700">

                {/* Foto (ikon user besar) */}
                <div className="w-full flex justify-center mb-4">
                  <div className="w-20 h-20 bg-white -700 rounded-full flex items-center justify-center">
                    <svg
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-10 h-10 text-gray-300"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                        d="M4.5 20.25a8.25 8.25 0 1115 0A17.933 17.933 0 0012 21.75c-2.676 0-5.216-.584-7.5-1.5z" />
                    </svg>
                  </div>
                </div>

                {/* Nama */}
                <p className="text-xl font-semibold text-center mb-1">{user.name}</p>

                {/* Email */}
                <p className="text-sm text-center text-gray-300">{user.email}</p>

                {/* Role */}
                <p className="text-center mt-3 bg-gray-700 p-2 rounded-lg text-sm inline-block w-full">
                  {user.role}
                </p>
              </div>
            )}

          </div>
        )}

        {/* PAGE CONTENT */}
        <div className="p-4">
          {children}
        </div>

      </main>
    </div>
  );
};


// --- Main App Component ---
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/users" element={<Users />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
