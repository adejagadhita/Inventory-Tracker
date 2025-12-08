import React from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
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

  return (
    <div className="flex min-h-screen bg-brand-dark text-brand-text font-sans">
      
      {/* Sidebar tetap dirender jika bukan halaman public */}
      {!isPublicPage && <Sidebar />}
      <main 
        className={`
          flex-1 transition-all duration-300 
          ${!isPublicPage ? 'md:ml-64' : 'w-full'}
        `}
      >
        {children}
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
          {/* 1. Public Routes (Tanpa Sidebar) */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* 2. App Routes (Dengan Sidebar) */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/users" element={<Users />} />

          {/* 3. Fallback Route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;