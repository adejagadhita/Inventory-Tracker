import { useState, useEffect } from "react";
import { Search, Trash2 } from "lucide-react";
import {
  getInventory,
  addInventoryItem
} from "../Services/inventoryService.Js";
import SearchBar from "../components/SearchBar";

const Inventory = () => {

  // =====================
  // STATE
  // =====================
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
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
  // FILTERED PRODUCTS
  // =====================
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // =====================
  // DELETE PRODUCT
  // =====================
  const handleDeleteProduct = (id) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus produk ini?')) {
      setProducts(products.filter(item => item.id !== id));
      alert('Produk berhasil dihapus!');
    }
  };

  // =====================
  // FORM HANDLERS
  // =====================
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  
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
    <div className="p-4 sm:p-6  min-h-screen md:ml- transition-all duration-300">
      <h1 className="text-xl sm:text-2xl font-semibold text-brand-text mb-6 sm:mb-8">
        Inventory
      </h1>

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />


      {/* TABLE */}
      <div className="bg-brand-panel border border-gray-800 rounded-sm overflow-hidden shadow-xl overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-full">
          <thead className="bg-[#0e2a25] text-brand-text text-xs uppercase tracking-wider border-b border-gray-700">
            <tr>
              <th className="px-4 sm:px-6 py-4 sm:py-5 min-w-[150px] sm:min-w-[200px]">Product Name</th>
              <th className="px-4 sm:px-6 py-4 sm:py-5 text-center min-w-20 sm:min-w-[100px]">Stock</th>
              <th className="px-4 sm:px-6 py-4 sm:py-5 text-center min-w-20 sm:min-w-[100px]">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-800 text-brand-text">
           {filteredProducts.length === 0 ? (
            <tr>
              <td colSpan="3" className="text-center py-6 text-brand-muted">
                 Tidak ada produk
              </td>
           </tr>
        ) : (
           filteredProducts.map(item => (
               <tr key={item.id} className="hover:bg-white/5 transition-colors">
                 <td className="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium">{item.name}</td>
                 <td className="px-4 sm:px-6 py-3 sm:py-4 text-center font-bold text-white-accent text-sm sm:text-base">{item.stock}</td>
                 <td className="px-4 sm:px-6 py-3 sm:py-4 text-center">
                   <button
                     onClick={() => handleDeleteProduct(item.id)}
                     className="text-red-400 hover:text-red-300 hover:bg-red-900/20 p-2 rounded transition-colors inline-flex items-center justify-center"
                     title="Delete product"
                   >
                     <Trash2 size={16} className="sm:size-[18px]" />
                   </button>
                 </td>
              </tr>
            ))
          )}
          </tbody>
        </table>
      </div>

      {/* ADD PRODUCT */}
      <div className="mt-8">
        <h2 className="text-lg sm:text-xl font-bold text-brand-text mb-4">
          Add New Product
        </h2>

        <form onSubmit={handleAddProduct} className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center flex-wrap">

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
            className="w-full sm:flex-1 text-brand-text placeholder:text-white rounded-full px-4 sm:px-6 py-2 border-2 border-white-accent bg-brand-panel text-sm sm:text-base"
          />

          <input
            type="number"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            placeholder="Stock"
            className="w-full sm:w-auto text-white-text placeholder:text-white rounded-full px-4 sm:px-6 py-2 border-2 border-white-accent bg-brand-panel text-sm sm:text-base"
          />

          <button type="submit" className="w-full sm:w-auto text-white bg-brand-panel hover:bg-brand-accent/80 rounded-full px-6 py-2 border-2 border-white-accent font-semibold transition-colors text-sm sm:text-base">
            Add
          </button>

        </form>
      </div>
    </div>
  );
};

export default Inventory;
