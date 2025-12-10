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

import PrivateRoute from './components/PrivateRoute';

/* --- Layout Wrapper --- */
const Layout = ({ children }) => {
  const location = useLocation();
  const publicRoutes = ['/', '/login', '/register'];
  const isPublicPage = publicRoutes.includes(location.pathname);

  return (
    <div className="flex min-h-screen bg-brand-dark text-brand-text font-sans">
      {!isPublicPage && <Sidebar />}

      <main className={`flex-1 ${!isPublicPage ? 'md:ml-64' : 'w-full'}`}>
        {children}
      </main>
    </div>
  );
};

/* --- Main App --- */
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>

          {/* PUBLIC */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* DASHBOARD (ALL ROLES) */}
          <Route
            path="/dashboard"
            element={
              <PrivateRoute allowedRoles={['admin', 'staff', 'viewer']}>
                <Dashboard />
              </PrivateRoute>
            }
          />

          {/* INVENTORY (VIEWER READ-ONLY) */}
          <Route
            path="/inventory"
            element={
              <PrivateRoute allowedRoles={['admin', 'staff', 'viewer']}>
                <Inventory />
              </PrivateRoute>
            }
          />

          {/* SALES (VIEWER READ-ONLY) */}
          <Route
            path="/sales"
            element={
              <PrivateRoute allowedRoles={['admin', 'staff', 'viewer']}>
                <Sales />
              </PrivateRoute>
            }
          />

          {/* USERS (ADMIN ONLY) */}
          <Route
            path="/users"
            element={
              <PrivateRoute allowedRoles={['admin']}>
                <Users />
              </PrivateRoute>
            }
          />

          {/* FALLBACK */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
