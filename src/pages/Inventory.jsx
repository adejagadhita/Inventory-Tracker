import React, { useState } from 'react';
import Adidas_Gazelle_Bold from './../assets/Adidas_Gazelle_Bold.svg';
import Adidas_Samba_XLG from './../assets/Adidas_Samba_XLG.svg';
import Adidas_Street_Talk from './../assets/Adidas_Street_Talk.svg';
import Adidas_Wensley_SPZL from './../assets/Adidas_Wensley_SPZL.svg';

const Inventory = () => {

  // STATE: product list
  const [products, setProducts] = useState([
    { id: 1, name: 'Adidas Wensley SPZL', stock: 8, img: Adidas_Wensley_SPZL },
    { id: 2, name: 'Adidas Gazelle Bold', stock: 15, img: Adidas_Gazelle_Bold },
    { id: 3, name: 'Adidas Samba XLG', stock: 5, img: Adidas_Samba_XLG },
    { id: 4, name: 'Adidas Street Talk', stock: 12, img: Adidas_Street_Talk },
  ]);

  // STATE: form
  const [formData, setFormData] = useState({
    product: "",
    stock: "",
    img: null, // simpan URL blob
  });

  // Handle input text & number
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle input FILE
  const handleFile = (e) => {
    const file = e.target.files[0];

    if (file) {
      const imgURL = URL.createObjectURL(file);
      setFormData({
        ...formData,
        img: imgURL
      });
    }
  };

  // ADD PRODUCT
  const handleAddProduct = (e) => {
    e.preventDefault();

    if (!formData.product || !formData.stock || !formData.img) {
      alert("Please fill all fields including image.");
      return;
    }

    setProducts([
      ...products,
      {
        id: products.length + 1,
        name: formData.product,
        stock: Number(formData.stock),
        img: formData.img
      }
    ]);

    // Reset form
    setFormData({
      product: "",
      stock: "",
      img: null,
    });
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-semibold text-gray-300 mb-8">Inventory</h1>

      {/* TABLE */}
      <div className="bg-brand-panel border border-gray-800 rounded-sm overflow-hidden shadow-xl">
        <table className="w-full text-left border-collapse">
          <thead className="bg-[#0e2a25] text-gray-300 text-xs uppercase tracking-wider border-b border-gray-700">
            <tr>
              <th className="px-6 py-5 font-medium text-center w-24">Image</th>
              <th className="px-6 py-5 font-medium">Product Name</th>
              <th className="px-6 py-5 font-medium text-center">Stock On-Hand</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-800 text-gray-300">
            {products.map((item) => (
              <tr key={item.id} className="hover:bg-white/5 transition-colors">
                <td className="px-6 py-4">
                  <div className="w-12 h-12 bg-white rounded-md mx-auto overflow-hidden flex items-center justify-center">
                    <img src={item.img} alt={item.name} className="object-cover" />
                  </div>
                </td>
                <td className="px-6 py-4 font-medium text-lg">{item.name}</td>
                <td className="px-6 py-4 text-center text-lg font-bold text-white">{item.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ADD PRODUCT FORM */}
      <div className="mt-8">
        <h2 className="text-xl font-bold text-white mb-4">Add New Product</h2>

        <form
          onSubmit={handleAddProduct}
          className="flex flex-col md:flex-row gap-4 items-end md:items-center"
        >

          <div className="flex gap-4 items-center">
            {/* Input File */}
            <input
              type="file"
              accept="image/*"
              onChange={handleFile}
              className="w-full md:w-56 bg-white text-black font-semibold rounded-full px-4 py-2"
            />

            {/* Preview Image */}
            {formData.img && (
              <img
                src={formData.img}
                alt="Preview"
                className="w-20 h-20 object-cover rounded-md border-2 border-white shadow-lg"
              />
            )}
          </div>

          {/* Product Name */}
          <input
            type="text"
            name="product"
            value={formData.product}
            onChange={handleChange}
            placeholder="Product Name"
            className="w-full bg-white text-black font-semibold rounded-full px-6 py-2 placeholder:font-bold"
          />

          {/* Stock */}
          <input
            type="number"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            placeholder="Stock"
            className="w-full md:w-40 bg-white text-black font-semibold rounded-full px-6 py-2 text-center placeholder:font-bold"
          />

          {/* Button */}
          <button
            type="submit"
            className="w-full md:w-auto bg-white hover:bg-gray-200 text-black font-bold px-10 py-2 rounded-full"
          >
            Add
          </button>

        </form>
      </div>
    </div>
  );
};

export default Inventory;
