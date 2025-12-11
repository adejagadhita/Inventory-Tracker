import React from "react";

const Topbar = ({ user, openProfile, setOpenProfile }) => {
  return (
    <div className="w-full flex justify-end px-6 py-4 bg-brand-dark fixed top-0 right-0 left-0 z-40">

      {/* ICON PROFIL */}
      <div
        className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer shadow"
        onClick={() => setOpenProfile(!openProfile)}
      >
        <svg
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-black"
        >
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M4.5 20.25a8.25 8.25 0 1115 0A17.933 17.933 0 0012 21.75c-2.676 0-5.216-.584-7.5-1.5z" />
        </svg>
      </div>

      {/* POPUP */}
      {openProfile && (
        <div className="absolute right-6 top-16 bg-white text-black p-5 rounded-xl shadow-xl w-72 border border-gray-300">

          <div className="w-full flex justify-center mb-4">
            <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
              <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-10 h-10 text-gray-500"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M4.5 20.25a8.25 8.25 0 1115 0A17.933 17.933 0 0012 21.75c-2.676 0-5.216-.584-7.5-1.5z" />
              </svg>
            </div>
          </div>

          <p className="text-xl font-semibold text-center mb-1">{user.name}</p>
          <p className="text-sm text-center text-gray-600">{user.email}</p>

          <p className="text-center mt-3 bg-gray-100 p-2 rounded-lg text-sm">
            {user.role}
          </p>
        </div>
      )}

    </div>
  );
};

export default Topbar;