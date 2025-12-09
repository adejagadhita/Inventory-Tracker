import React from 'react';
import { useNavigate } from 'react-router-dom';

const ViewerDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-700 text-white">
      <h1 className="text-4xl font-bold mb-6">Hello Viewer!</h1>
      <p>You can view inventory data here (read-only).</p>

      <button
        onClick={handleLogout}
        className="mt-6 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default ViewerDashboard;
