import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import { db } from './firebase';
import { collection, query, where, getDocs } from "firebase/firestore";

import PrivateRoute from './components/PrivateRoute';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Inventory from './pages/Inventory';
import Sales from './pages/Sales';
import Users from './pages/Users';
import Topbar from './components/TopBar';

const Layout = ({ children }) => {
  const location = useLocation();
  const publicRoutes = ['/', '/login', '/register'];
  const isPublicPage = publicRoutes.includes(location.pathname);

  const [openProfile, setOpenProfile] = React.useState(false);
  const [userData, setUserData] = React.useState(null);

  const [authUser, setAuthUser] = React.useState(
  JSON.parse(localStorage.getItem("user"))
);



  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser?.email) return;

    const fetchUser = async () => {
    const q = query(
      collection(db, "users"),
      where("email", "==", storedUser.email)
    );

    const snapshot = await getDocs(q);

    if (!snapshot.empty) {
      setUserData(snapshot.docs[0].data());
    }
  };

  fetchUser();
}, [authUser?.email]);
  return (
    <div className="flex min-h-screen bg-brand-dark text-brand-text font-sans relative">

      {!isPublicPage && <Sidebar />}

      {!isPublicPage && userData && (
        <Topbar
          user={userData}
          openProfile={openProfile}
          setOpenProfile={setOpenProfile}
        />
      )}

     <main
  className={`flex-1 transition-all duration-300 ${
    !isPublicPage ? 'md:ml-64 pt-20' : 'w-full'
  }`}
>
  <div className="p-4">{children}</div>
</main>


    </div>
  );
};

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
          <Route
          path="/users"
          element={
            <PrivateRoute allowedRoles={['admin']}>
              <Users />
            </PrivateRoute>
          }
        />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;