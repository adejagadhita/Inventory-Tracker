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

      {/* SIDEBAR */}
      {!isPublicPage && <Sidebar />}

      {/* MAIN CONTENT AREA */}
      <main
        className={`
          flex-1 transition-all duration-300 relative
          ${!isPublicPage ? 'md:ml-64' : 'w-full'}
        `}
      >

        {/* FLOATING PROFILE ICON */}
        {!isPublicPage && (
          <div className="fixed top-4 right-6 z-50">

            {/* ICON PROFIL */}
            <div
              className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer shadow"
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

            {/* POPUP PROFILE */}
            {openProfile && (
              <div className="absolute right-0 mt-3 bg-white text-black p-5 rounded-xl shadow-xl w-72 border border-gray-300">

                <div className="w-full flex justify-center mb-4">
                  <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
                    <svg
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-10 h-10 text-gray-500"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                        d="M4.5 20.25a8.25 8.25 0 1115 0A17.933 17.933 0 0012 21.75c-2.676 0-5.216-.584-7.5-1.5z" />
                    </svg>
                  </div>
                </div>

                <p className="text-xl font-semibold text-center mb-1">{user.name}</p>
                <p className="text-sm text-center text-gray-600">{user.email}</p>

                <p className="text-center mt-3 bg-gray-100 p-2 rounded-lg text-sm">
                  {user.role}
                </p>
              </div>
            )}

          </div>
        )}

        {/* PAGE CONTENT — TANPA mt-16 AGAR TIDAK TURUN */}
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
