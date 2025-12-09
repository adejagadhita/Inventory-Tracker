import React from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import Register from './pages/Register';
import AdminDashboard from './pages/AdminDashboard';
import StaffDashboard from './pages/StaffDashboard';
import ViewerDashboard from './pages/ViewerDashboard';
import Inventory from './pages/Inventory';
import Sales from './pages/Sales';
import Users from './pages/Users';
import PrivateRoute from './components/PrivateRoute';

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
          <Route path="/admin/dashboard" element={
            <PrivateRoute allowedRoles={['admin']}>
              <AdminDashboard />
              </PrivateRoute>
          } />

            <Route path="/staff/dashboard" element={
            <PrivateRoute allowedRoles={['staff']}>
              <StaffDashboard />
              </PrivateRoute>
          } />

            <Route path="/viewer/dashboard" element={
            <PrivateRoute allowedRoles={['viewer']}>
              <ViewerDashboard />
              </PrivateRoute>
          } />

            <Route path="inventory" element={
            <PrivateRoute allowedRoles={['admin', 'staff']}>
              <Inventory />
              </PrivateRoute>
          } />
           
          <Route path="sales" element={
            <PrivateRoute allowedRoles={['admin', 'staff']}>
              <Sales />
              </PrivateRoute>
          } />
           
            <Route path="users" element={
            <PrivateRoute allowedRoles={['admin']}>
              <Users />
              </PrivateRoute>
          } />
           



          {/* <Route path="/inventory" element={<Inventory />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/users" element={<Users />} /> */}

          {/* 3. Fallback Route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;