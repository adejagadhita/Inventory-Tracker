// src/pages/Sales.jsx
import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const Sales = () => {
  // 1. Ubah Data Statis menjadi State agar bisa ditambah
  const [salesData, setSalesData] = useState([
    { id: 1, date: '27 Agst 2025', product: 'Adidas Samba XLG', sold: 4 },
    { id: 2, date: '28 Agst 2025', product: 'Adidas Gazelle Bold', sold: 2 },
    { id: 3, date: '28 Agst 2025', product: 'Adidas Spezials', sold: 1 },
    { id: 4, date: '29 Agst 2025', product: 'Nike Air Force 1', sold: 5 },
    { id: 5, date: '30 Agst 2025', product: 'New Balance 550', sold: 3 },
  ]);

  // 2. State untuk Form Input
  const [formData, setFormData] = useState({
    date: '',
    product: '',
    sold: ''
  });

  // Handle perubahan input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle Submit Form
  const handleAddSale = (e) => {
    e.preventDefault();
    if (!formData.date || !formData.product || !formData.sold) return;

    // Format tanggal sederhana jika input date (YYYY-MM-DD) -> Format Tampilan
    // Disini kita pakai raw string dulu biar simpel
    const newItem = {
      id: salesData.length + 1,
      date: formData.date, // Bisa diformat ulang misal jadi '31 Agst 2025'
      product: formData.product,
      sold: parseInt(formData.sold)
    };

    setSalesData([...salesData, newItem]);
    setFormData({ date: '', product: '', sold: '' }); // Reset form
  };

  return (
    <div className="p-10 min-h-screen relative">
      <h1 className="text-2xl font-semibold text-gray-400 mb-8">Sales History</h1>

      {/* --- TABEL DATA --- */}
      <div className="bg-brand-panel border border-gray-800 rounded-sm overflow-hidden shadow-lg mb-10">
        <table className="w-full text-left border-collapse">
          <thead className="bg-[#0e2a25] text-gray-200 text-sm font-medium border-b border-gray-700">
            <tr>
              <th className="px-8 py-5 w-1/4">Date</th>
              <th className="px-8 py-5 w-1/2">Product</th>
              <th className="px-8 py-5 text-center">Sold</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-800 text-gray-300">
            {salesData.map((item) => (
              <tr key={item.id} className="hover:bg-white/5 transition-colors group">
                <td className="px-8 py-5 text-gray-400 group-hover:text-white transition-colors">
                  {item.date}
                </td>
                <td className="px-8 py-5 font-medium text-white">
                  {item.product}
                </td>
                <td className="px-8 py-5 text-center font-bold text-brand-accent text-lg">
                  {item.sold}
                </td>
              </tr>
            ))}
            
            {/* Baris kosong pelengkap visual */}
            {salesData.length < 5 && [...Array(5 - salesData.length)].map((_, i) => (
              <tr key={`empty-${i}`} className="h-16">
                 <td colSpan="3"></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* --- FORM ADD NEW SALES (Sesuai Gambar) --- */}
      <div className="mt-8">
        <h2 className="text-xl font-bold text-white mb-4">Add New Sales</h2>
        
        <form onSubmit={handleAddSale} className="flex flex-col md:flex-row gap-4 items-end md:items-center">
          
          {/* Input Date */}
          <div className="relative w-full md:w-auto">
             <input 
               type="text" // Bisa diganti 'date' jika ingin datepicker browser
               name="date"
               value={formData.date}
               onChange={handleChange}
               placeholder="Date input"
               className="w-full md:w-48 bg-white text-black font-semibold placeholder:text-gray-500 placeholder:font-bold rounded-full px-6 py-2 focus:outline-none focus:ring-2 focus:ring-brand-accent"
             />
          </div>

          {/* Input Product Name */}
          <div className="w-full md:w-auto flex-1">
             <input 
               type="text"
               name="product"
               value={formData.product}
               onChange={handleChange}
               placeholder="Product Name"
               className="w-full bg-white text-black font-semibold placeholder:text-gray-500 placeholder:font-bold rounded-full px-6 py-2 focus:outline-none focus:ring-2 focus:ring-brand-accent"
             />
          </div>

          {/* Input Quantity */}
          <div className="w-full md:w-auto">
             <input 
               type="number"
               name="sold"
               value={formData.sold}
               onChange={handleChange}
               placeholder="Quantity"
               className="w-full md:w-40 bg-white text-black font-semibold placeholder:text-gray-500 placeholder:font-bold rounded-full px-6 py-2 focus:outline-none focus:ring-2 focus:ring-brand-accent text-center"
             />
          </div>

          {/* Button Add */}
          <button 
            type="submit"
            className="w-full md:w-auto bg-white hover:bg-gray-200 text-black font-bold px-10 py-2 rounded-full transition-colors shadow-lg flex items-center justify-center gap-2"
          >
            Add
          </button>

        </form>
      </div>
      
    </div>
  );
};

export default Sales;