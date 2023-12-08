import React from "react";
import { Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div>
        <nav class="bg-[#ac3efa]">
          <div class="w-auto flex items-center justify-between mx-auto p-4 ">
            <a href="#" class="flex items-start space-x-3 rtl:space-x-reverse ">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                class="h-8"
                alt="Flowbite Logo"
              />
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                TailWind_CSS
              </span>
            </a>
          </div>
        </nav>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
