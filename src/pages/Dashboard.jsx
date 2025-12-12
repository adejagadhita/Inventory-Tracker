import React,{useEffect, useState} from 'react';
import { ShoppingCart, Package, AlertCircle, ShoppingBag } from 'lucide-react';
import { getDashboardData } from '../services/dashboardService';




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

  const [stats, setStats] = useState({
    newOrders: 0,
    stockInStorage: 0,
    lowOnStock: 0,
    totalSold: 0
  })

  useEffect(() => {
   const load = async () => {
    const data = await getDashboardData();
    setStats(data);

   };
   
   load();
  },[]);


  return (
    <div className="px-5">
      <h1 className="text-2xl font-semibold text-white-300 mb-8">Dashboard Overview</h1>

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard title="New Orders" value={stats.newOrders} icon={ShoppingCart} />
        <StatCard title="Stock In Storage" value={stats.stockInStorage} icon={Package} />
        <StatCard title="Low on Stock" value={stats.lowOnStock} icon={AlertCircle} />
        <StatCard title="Total Sold" value={stats.totalSold} icon={ShoppingBag} />
      </div>
    </div>
  );
};

export default Dashboard;