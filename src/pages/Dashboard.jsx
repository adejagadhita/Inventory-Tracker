import React from 'react';
import { ShoppingCart, Package, AlertCircle, ShoppingBag } from 'lucide-react';

const StatCard = ({ title, value, icon: Icon, color = "bg-brand-card" }) => (
  <div className={`${color} p-6 rounded-sm text-white relative overflow-hidden min-h-[150px] flex flex-col justify-between hover:translate-y-[-2px] transition-transform shadow-lg`}>
    <div className="flex justify-between items-start z-10">
      <div>
        <h3 className="text-4xl font-bold mb-1">{value}</h3>
        <p className="text-sm font-light opacity-80">{title}</p>
      </div>
      {Icon && <Icon size={28} className="opacity-70" />}
    </div>
  </div>
);

const Dashboard = () => {

  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="px-5">
      <h1 className="text-2xl font-semibold text-white-300 mb-8">Dashboard Overview</h1>

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard title="New Orders" value="190" icon={ShoppingCart} />
        <StatCard title="Stock In Storage" value="76" icon={Package} />
        <StatCard title="Low on Stock" value="12" icon={AlertCircle} />
        <StatCard title="Total Sold" value="Sold" icon={ShoppingBag} />
      </div>
    </div>
  );
};

export default Dashboard;