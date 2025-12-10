import { useState, useEffect } from "react";
import {
  getInventory,
  addInventoryItem
} from "../services/inventoryService";

const Inventory = () => {

  // =====================
  // STATE
  // =====================
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    product: "",
    stock: "",
   
  });

  // =====================
  // LOAD INVENTORY
  // =====================
  useEffect(() => {
    loadInventory();
  }, []);

  async function loadInventory() {
   try {
    const data = await getInventory();
    setProducts(Array.isArray(data) ? data : []);
   }catch (error) {
    console.error("Gagal memuat inventory", error);
    setProducts([]);
   }
  }

  // =====================
  // FORM HANDLERS
  // =====================
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // const handleFile = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     setFormData({
  //       ...formData,
  //       img: file
  //     });
  //   }
  // };

  const handleAddProduct = async (e) => {
    e.preventDefault();


    try {
      if (!formData.product || !formData.stock) {
        alert("please fill all fields");
        return;
      }

      await addInventoryItem({
        name: formData.product,
        stock: Number(formData.stock),
      });

      setFormData({
        product: "",
        stock: "",

      });

      await loadInventory();
      alert("Product added successfully!");
  } catch (error) {
    console.error("Gagal menambahkan produk:", error);
    alert("faild to add product");
  }
  };

  // =====================
  // UI
  // =====================
  return (
    <div className="p-10">
      <h1 className="text-2xl font-semibold text-gray-300 mb-8">
        Inventory
      </h1>

      {/* TABLE */}
      <div className="bg-brand-panel border border-gray-800 rounded-sm overflow-hidden shadow-xl">
        <table className="w-full text-left border-collapse">
          <thead className="bg-[#0e2a25] text-gray-300 text-xs uppercase tracking-wider border-b border-gray-700">
            <tr>
              {/* <th className="px-6 py-5 text-center w-24">Image</th> */}
              <th className="px-6 py-5">Product Name</th>
              <th className="px-6 py-5 text-center">Stock</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-800 text-gray-300">

           {products.length === 0 ? (
            <tr>
              <td colSpan="2" className="text-center py-4">
                 Belum ada data
              </td>
           </tr>
        ) : (
           products.map(item => (
               <tr key={item.id}>
                 <td className="px-6 py-4 text-lg">{item.name}</td>
                 <td className="px-6 py-4 text-center font-bold">{item.stock}</td>
              </tr>
            ))
          )}
          </tbody>
        </table>
      </div>

      {/* ADD PRODUCT */}
      <div className="mt-8">
        <h2 className="text-xl font-bold text-white mb-4">
          Add New Product
        </h2>

        <form onSubmit={handleAddProduct} className="flex gap-4 items-center">

          {/* <input
            type="file"
            accept="image/*"
            onChange={handleFile}
          /> */}

          {/* {formData.img && (
            <img
              src={URL.createObjectURL(formData.img)}
              alt="Preview"
              className="w-20 h-20 object-cover rounded"
            />
          )} */}

          <input
            type="text"
            name="product"
            value={formData.product}
            onChange={handleChange}
            placeholder="Product Name"
            className="text-white rounded-full px-6 py-2 border-2 border-white bg-transparent"
          />

          <input
            type="number"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            placeholder="Stock"
            className="text-white rounded-full px-6 py-2 border-2 border-white bg-transparent"
          />

          <button 
          type="submit"
          className="text-white cursor-pointer rounded-full px-6 py-2 border-2 border-white bg-transparent">
            Add
          </button>

        </form>
      </div>
    </div>
  );
};

export default Inventory;
