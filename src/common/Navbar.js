import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const setIsDropdownVisible = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const handleMenuItemClick = () => {
    navigate("/");
    setDropdownVisible(false);
  };

  return (
    <>
      <div>
        <nav className="bg-[#ac3efa] w-full">
          <div className="w-full flex items-center justify-between mx-auto p-4">
            <div className="flex justify-between">
              <a
                href="#"
                className="flex items-start space-x-3 rtl:space-x-reverse"
              >
                <img
                  src="https://flowbite.com/docs/images/logo.svg"
                  className="h-8"
                  alt="Flowbite Logo"
                />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  CRM
                </span>
              </a>
              <div className="flex space-x-4 lg:mr-12 ml-12 ">
                <Link
                  to="/dashboard"
                  className="self-center text-lg font-medium whitespace-nowrap dark:text-white"
                >
                  Dashboard
                </Link>
                <Link
                  to="/home"
                  className="self-center text-lg font-medium whitespace-nowrap dark:text-white"
                >
                  Home
                </Link>
              </div>
            </div>

            <div className="relative flex items-center">
              <div
                className="h-8 w-8 text-black cursor-pointer"
                onClick={() => setIsDropdownVisible(!isDropdownVisible)}
              >
                {/* Your SVG path here */}
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-full w-full"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              {isDropdownVisible && (
                <div className="absolute top-0 right-0 mt-8 bg-white border rounded shadow-md">
                  {/* Dropdown content */}
                  <div className="p-4 cursor-pointer hover:bg-gray-100">
                    Admin
                  </div>
                  <div
                    className="p-2 cursor-pointer hover:bg-gray-100"
                    onClick={handleMenuItemClick}
                  >
                    Logout
                  </div>
                  {/* Add more menu items as needed */}
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
