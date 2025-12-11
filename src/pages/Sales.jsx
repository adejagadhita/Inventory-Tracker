import React, { useEffect, useState } from 'react';
import { createSale, getSales } from '../services/salesService';
import { getInventory } from "../services/inventoryService";

const Sales = () => {

  const user = JSON.parse(localStorage.getItem("user"));
  const [salesData, setSalesData] = useState([]);
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    productId: '',
    sold: '',
    date: ''
  });

  const loadSales = async () => {
    const data = await getSales();
    setSalesData(data);
  };

  const loadProducts = async () => {
    const data = await getInventory();
    setProducts(data);
  };

  useEffect(() => {
    loadSales();
    loadProducts();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddSale = async (e) => {
    e.preventDefault();

      if (user.role === "viewer" || user.role === "guest") {
    alert("Viewer does not have permission to modify data.");
    return;
  }

    //  basic validation
    if (!formData.productId || !formData.sold || !formData.date) {
      alert("Lengkapi data");
      return;
    }

    const selectedProduct = products.find(
      p => p.id === formData.productId
    );

    if (!selectedProduct) {
      alert("Produk tidak ditemukan");
      return;
    }

    const soldQty = Number(formData.sold);

    if (soldQty <= 0) {
      alert("Jumlah harus lebih dari 0");
      return;
    }

    if (soldQty > selectedProduct.stock) {
      alert("Stok tidak mencukupi");
      return;
    }

    try {
      await createSale(
        formData.productId,
        soldQty,
        formData.date
      );

      await loadSales();
      await loadProducts();

      setFormData({
        productId: '',
        sold: '',
        date: ''
      });
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="px-5 min-h-screen">
      <h1 className="text-2xl font-semibold text-white-400 mb-8">
        Sales History
      </h1>

      <div className="bg-brand-panel border border-gray-800 rounded-sm overflow-hidden mb-10">
        <table className="w-full">
          <thead className="bg-[#0e2a25] text-gray-200 text-sm">
            <tr>
              <th className="px-8 py-5">Date</th>
              <th className="px-8 py-5">Product</th>
              <th className="px-8 py-5 text-center">Sold</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800 text-gray-300">
            {salesData.map(item => (
              <tr key={item.id}>
                <td className="px-8 py-5 text-white-400">
                  {item.date?.seconds
                    ? new Date(item.date.seconds * 1000).toLocaleDateString()
                    : '-'}
                </td>
                <td className="px-8 py-5 text-white">
                  {item.productName}
                </td>
                <td className="px-8 py-5 text-center font-bold text-white-accent">
                  {item.sold}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold text-white mb-4">
          Add New Sales
        </h2>

        <form
          onSubmit={handleAddSale}
          className="flex flex-col md:flex-row gap-4 items-end md:items-center"
        >
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="text-white white rounded-full px-6 py-2 border-2 border-white bg-transparent"
          />

          <select
            name="productId"
            value={formData.productId}
            onChange={handleChange}
            className="bg-transparent text-white rounded-full px-6 py-2 border-2 border-white"
          >
            <option value="">Pilih Produk</option>
            {products.map(p => (
              <option key={p.id} value={p.id} className="text-black">
                {p.name} (stok: {p.stock})
              </option>
            ))}
          </select>

          <input
            type="number"
            name="sold"
            value={formData.sold}
            onChange={handleChange}
            placeholder="Quantity"
            className="text-white rounded-full px-6 py-2 border-2 border-white bg-transparent"
          />

          <button
            type="submit"
            className="cursor-pointer text-white rounded-full px-6 py-2 border-2 border-white"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default Sales;
