import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-300 w-full shadow-md">
      <div className="max-w-screen-xl mx-auto">
        
        <div className="flex justify-between items-center p-4">
          <div className="text-gray-500 font-bold text-xl">
            Web Name
          </div>

          <div className="relative">
              <input
                type="search"
                placeholder="Search..."
                className="w-96 px-4 py-2 rounded-full border focus:outline-none focus:ring focus:ring-gray-300"
              />
              <span className="absolute right-3 top-2 text-gray-600 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </span>

          </div>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;
