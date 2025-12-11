import React, { useState, useEffect } from 'react';
import { UserCheck, Plus } from 'lucide-react';
import { db } from '../firebase';
import { collection, getDocs, addDoc, Timestamp } from 'firebase/firestore';
import bcrypt from 'bcryptjs';

const Users = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "Admin",
  });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        const users = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setUserData(users);
      } catch (error) {
        console.error("Gagal mengambil data users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.password) { alert("Password wajib diisi"); return; }
    if (!formData.name) { alert("Nama wajib diisi"); return; }
    if (!formData.email) { alert("Email wajib diisi"); return; }
    if (!formData.role) { alert("Role wajib diisi"); return; }

    try {
      const salt = bcrypt.genSaltSync(10);
      const passwordHash = bcrypt.hashSync(formData.password, salt);

      await addDoc(collection(db, "users"), {
        name: formData.name,
        email: formData.email,
        passwordHash,
        role: formData.role,
        createdAt: Timestamp.now()
      });

      const querySnapshot = await getDocs(collection(db, "users"));
      const users = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setUserData(users);

      setFormData({
        name: "",
        email: "",
        password: "",
        role: "Admin",
      });

      setIsOpen(false);

    } catch (error) {
      console.error("Gagal menambahkan user:", error);
    }
  };

  return (
    <div className="p-6 sm:px-5 min-h-screen relative">

      {/* Header */}
      <div className="flex items-center gap-3 mb-6 sm:mb-8">
        <UserCheck size={28} className="text-white-400" />
        <h1 className="text-xl sm:text-2xl font-bold text-white">Users Data</h1>
      </div>

      {/* Responsive content */}
      <div className="space-y-4">

        {/* Desktop / Tablet: table (visible md and up) */}
        <div className="hidden md:block">
          <div className="w-full border border-gray-800 rounded-sm shadow-lg bg-brand-panel overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse table-fixed min-w-[720px]">
                <thead className="bg-[#0a2d2a] border-b border-gray-700">
                  <tr>
                    <th className="px-4 py-4 text-center w-12">No</th>
                    <th className="px-4 py-4">Name</th>
                    <th className="px-4 py-4">Email</th>
                    <th className="px-4 py-4">Access Rights</th>
                    <th className="px-4 py-4 text-center"></th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-800 text-gray-300">
                  {loading ? (
                    <tr>
                      <td colSpan="5" className="px-4 py-6 text-center text-gray-400">Loading...</td>
                    </tr>
                  ) : userData.length === 0 ? (
                    <tr>
                      <td colSpan="5" className="px-4 py-6 text-center text-gray-400">No users found</td>
                    </tr>
                  ) : (
                    userData.map((user, index) => (
                      <tr key={user.id} className="hover:bg-white/5 transition-colors ">
                        <td className="px-4 py-4 text-center text-gray-500">{index + 1}</td>
                        <td className="px-4 py-4 font-medium text-white ">{user.name}</td>
                        <td className="px-4 py-4 text-gray-400 underline decoration-gray-600 underline-offset-4 ">{user.email}</td>
                        <td className="px-4 py-4">{user.role}</td>
                        <td className="px-4 py-4 text-center"></td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Mobile: card list (visible below md) */}
        <div className="md:hidden">
          <div className="grid gap-3">
            {loading ? (
              <div className="text-gray-400 text-center py-6">Loading...</div>
            ) : userData.length === 0 ? (
              <div className="text-gray-400 text-center py-6">No users found</div>
            ) : (
              userData.map((user, index) => (
                <div key={user.id} className="flex items-start gap-3 bg-[#072826] border border-gray-800 rounded-md p-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white">
                    {user.name ? user.name.charAt(0).toUpperCase() : "U"}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white font-medium">{user.name}</p>
                        <p className="text-gray-400 text-sm">{user.email}</p>
                      </div>
                      <div className="text-sm text-gray-300">{user.role}</div>
                    </div>
                    <div className="mt-2 text-xs text-gray-500">#{index + 1}</div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

      </div>

      {/* Floating Add Button (responsive position) */}
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Add user"
        className="fixed right-5 bottom-5 md:left- md:bottom-10 md:right-auto w-14 h-14 flex items-center justify-center
                   rounded-full border-4 border-white text-white hover:bg-white/10 transition cursor-pointer z-50"
      >
        <Plus size={28} />
      </button>

      {/* Popup Form */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-[999]"
          role="dialog"
          aria-modal="true"
          aria-label="Add new user"
        >
          <div className="bg-[#0a2d2a] w-11/12 sm:w-1/2 md:w-[450px] rounded-lg p-6 sm:p-10 border border-gray-700">
            <h2 className="text-xl font-bold text-white mb-6 sm:mb-8 text-center">
              Add New User
            </h2>

            <form className="space-y-4" onSubmit={handleSubmit}>
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

              <div>
                <label className="text-gray-300 text-sm">ROLE</label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-gray-500 text-white px-3 py-2 mt-1
                             focus:outline-none"
                >
                  <option className="text-black">admin</option>
                  <option className="text-black">staff</option>
                  <option className="text-black">viewer</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-white text-black font-semibold py-2 mt-4
                           hover:bg-gray-200 transition"
              >
                Add User
              </button>
            </form>

            <button
              onClick={() => setIsOpen(false)}
              className="mt-4 w-full bg-red-700 hover:bg-red-600 text-white py-2 rounded-md"
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
