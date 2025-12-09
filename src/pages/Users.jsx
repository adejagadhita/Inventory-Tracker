import React, { useState } from 'react';
import { UserCheck, Plus } from 'lucide-react';

const Users = () => {
  const [isOpen, setIsOpen] = useState(false);

  // DATA USERS PAKAI STATE
  const [usersData, setUsersData] = useState([
    { id: 1, name: 'Admin', username: 'Admin@gmail.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Ade', username: 'Ade Jagaditho', role: 'Staff', status: 'Active' },
    { id: 3, name: 'Budi', username: 'Budi Santoso', role: 'Staff', status: 'Inactive' },
  ]);

  // FORM STATE
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "Admin",
  });

  // HANDLE INPUT BERUBAH
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // HANDLE SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      id: usersData.length + 1,
      name: formData.name,
      username: formData.email,
      role: formData.role,
      status: "Active",
    };

    // TAMBAH KE TABEL
    setUsersData([...usersData, newUser]);

    // RESET FORM
    setFormData({
      name: "",
      email: "",
      password: "",
      role: "Admin",
    });

    // TUTUP POPUP
    setIsOpen(false);
  };

  return (
    <div className="p-6 sm:p-10 min-h-screen relative">

      {/* Header */}
      <div className="flex items-center gap-3 mb-6 sm:mb-8">
        <UserCheck size={28} className="text-gray-400" />
        <h1 className="text-xl sm:text-2xl font-bold text-white">Users Data</h1>
      </div>

      {/* Desktop Table */}
      <div className="hidden sm:block bg-brand-panel border border-gray-800 rounded-sm overflow-hidden shadow-lg">
        <table className="w-full text-left border-collapse">
          <thead className="bg-[#0e2a25] text-gray-200 text-xs uppercase tracking-wider border-b border-gray-700">
            <tr>
              <th className="px-6 py-5 text-center w-16">No</th>
              <th className="px-6 py-5">Name</th>
              <th className="px-6 py-5">Username</th>
              <th className="px-6 py-5">Access Rights</th>
              <th className="px-6 py-5 text-center">Status</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-800 text-gray-300">
            {usersData.map((user, index) => (
              <tr key={user.id} className="hover:bg-white/5 transition-colors">
                <td className="px-6 py-5 text-center text-gray-500">{index + 1}</td>
                <td className="px-6 py-5 font-medium text-white">{user.name}</td>
                <td className="px-6 py-5 text-gray-400 underline decoration-gray-600 underline-offset-4">
                  {user.username}
                </td>
                <td className="px-6 py-5">{user.role}</td>
                <td className="px-6 py-5 text-center">
                  <span className="px-3 py-1 rounded-full text-xs font-bold border bg-green-900/30 text-green-400 border-green-800">
                    Active
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Floating Add Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="absolute bottom-27 left-12 w-16 h-16 flex items-center justify-center
                   rounded-full border-4 border-white text-white hover:bg-white/10 transition cursor-pointer z-10"
      >
        <Plus size={36} />
      </button>

      {/* Popup Form */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[999]">
          <div className="bg-[#0a2d2a] w-11/12 sm:w-1/2 md:w-[450px] rounded-lg p-10 border border-gray-700">

            <h2 className="text-xl font-bold text-white mb-8 text-center">
              Add New User
            </h2>

            {/* FORM */}
            <form className="space-y-4" onSubmit={handleSubmit}>

              {/* NAME */}
              <div>
                <label className="text-gray-300 text-sm">NAME</label>
                <input
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full bg-transparent border border-gray-500 text-white px-3 py-2 mt-1
                             focus:outline-none focus:border-gray-300"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="text-gray-300 text-sm">EMAIL</label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full bg-transparent border border-gray-500 text-white px-3 py-2 mt-1
                             focus:outline-none focus:border-gray-300"
                />
              </div>

              {/* PASSWORD */}
              <div>
                <label className="text-gray-300 text-sm">PASSWORD</label>
                <input
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full bg-transparent border border-gray-500 text-white px-3 py-2 mt-1
                             focus:outline-none focus:border-gray-300"
                />
              </div>

              {/* ROLE */}
              <div>
                <label className="text-gray-300 text-sm">ROLE</label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-gray-500 text-white px-3 py-2 mt-1
                             focus:outline-none"
                >
                  <option className="text-black">Admin</option>
                  <option className="text-black">Staff</option>
                  <option className="text-black">Viewer</option>
                  
                </select>
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className="w-full bg-white text-black font-semibold py-2 mt-6
                           hover:bg-gray-200 transition"
              >
                Add User
              </button>
            </form>

            <button
              onClick={() => setIsOpen(false)}
              className="mt-6 w-full bg-red-700 hover:bg-red-600 text-white py-2 rounded-md"
            >
              Close
            </button>

          </div>
        </div>
      )}

    </div>
  );
};

export default Users;
