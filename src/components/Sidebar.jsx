import React, { useState } from 'react';
import { LayoutDashboard, ClipboardList, ShoppingBag, Users, LogOut, Menu, X } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from '../assets/Screenshot_2025-12-02_143819-removebg-preview copy.png'

const Sidebar = () => {
  const navigate = useNavigate();
  // State untuk mengontrol visibilitas sidebar di mobile
  const [isOpen, setIsOpen] = useState(false);

  // Fungsi untuk toggle sidebar
  const toggleSidebar = () => setIsOpen(!isOpen);

  // Fungsi untuk menutup sidebar saat menu diklik (khusus mobile)
  const closeSidebar = () => setIsOpen(false);

  const menuItems = [
    { path: '/dashboard', icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
    { path: '/inventory', icon: <ClipboardList size={20} />, label: 'Inventory' },
    { path: '/sales', icon: <ShoppingBag size={20} />, label: 'Sales' },
    { path: '/users', icon: <Users size={20} />, label: 'Users' },
  ];

  return (
    <>
      {/* --- MOBILE TOGGLE BUTTON --- */}
      {/* Hanya muncul di layar kecil (md:hidden) */}
      <button 
        onClick={toggleSidebar}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-brand-panel text-white rounded-md shadow-lg hover:bg-brand-card transition-colors"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* --- OVERLAY (MOBILE ONLY) --- */}
      {/* Background gelap saat sidebar terbuka, klik untuk tutup */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm"
          onClick={closeSidebar}
        />
      )}

      {/* --- SIDEBAR --- */}
      <aside 
        className={`
          w-64 min-h-screen bg-brand-panel border-r border-gray-800/30 
          fixed left-0 top-0 flex flex-col z-50
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0
        `}
      >
        {/* Logo Area */}
        <div onClick={() => navigate("/")} className="p-8 pb-10 flex justify-center md:justify-start">
          <img src={Logo} alt="logo" className="h-10 w-auto" />
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 space-y-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={closeSidebar} // Tutup sidebar saat link diklik (mobile UX)
              className={({ isActive }) => `
                flex items-center gap-4 px-4 py-3 rounded-md transition-all duration-200 text-sm font-medium
                ${isActive 
                  ? 'bg-brand-card text-white shadow-lg border-l-4 border-white' 
                  : 'text-gray-400 hover:text-white hover:bg-brand-card/30'}
              `}
            >
              {item.icon}
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        {/* Logout Button */}
        <div className="p-4 mt-auto border-t border-gray-800">
           <NavLink 
             to="/login" 
             onClick={closeSidebar}
             className="flex items-center gap-4 px-4 py-3 text-red-400 hover:bg-red-900/20 rounded-md transition text-sm"
           >
              <LogOut size={20} />
              <span>Logout</span>
           </NavLink>
        </div>

        <div className=''>

        </div>

      </aside>
    </>
  );
};

export default Sidebar;