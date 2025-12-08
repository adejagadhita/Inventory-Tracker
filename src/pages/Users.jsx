import React from 'react';
import { UserCheck } from 'lucide-react';

const Users = () => {
  const usersData = [
    { id: 1, name: 'Admin', username: 'Admin@gmail.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Ade', username: 'Ade Jagaditho', role: 'Staff', status: 'Active' },
    { id: 3, name: 'Budi', username: 'Budi Santoso', role: 'Staff', status: 'Inactive' },
  ];

  return (
    <div className="p-6 sm:p-10 min-h-screen relative">
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
              <th className="px-6 py-5">Email</th>
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
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold border ${
                      user.status === 'Active'
                        ? 'bg-green-900/30 text-green-400 border-green-800'
                        : 'bg-red-900/30 text-red-400 border-red-800'
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
              </tr>
            ))}

            {/* rows pelengkap */}
            {[...Array(3)].map((_, i) => (
              <tr key={`empty-${i}`} className="h-16 border-b border-gray-800/50">
                <td colSpan="5"></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile List Cards */}
      <div className="sm:hidden space-y-4">
        {usersData.map((user, index) => (
          <div
            key={user.id}
            className="bg-brand-panel border border-gray-800 rounded-lg p-4 shadow-md"
          >
            <div className="text-gray-500 text-xs mb-2">#{index + 1}</div>

            <div className="flex justify-between">
              <span className="text-gray-400">Name</span>
              <span className="text-white font-medium">{user.name}</span>
            </div>

            <div className="flex justify-between mt-2">
              <span className="text-gray-400">Username</span>
              <span className="text-gray-300 underline underline-offset-4 decoration-gray-600">
                {user.username}
              </span>
            </div>

            <div className="flex justify-between mt-2">
              <span className="text-gray-400">Role</span>
              <span className="text-gray-300">{user.role}</span>
            </div>

            <div className="flex justify-between mt-2">
              <span className="text-gray-400">Status</span>
              <span
                className={`px-3 py-1 rounded-full text-xs font-bold border ${
                  user.status === 'Active'
                    ? 'bg-green-900/30 text-green-400 border-green-800'
                    : 'bg-red-900/30 text-red-400 border-red-800'
                }`}
              >
                {user.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;