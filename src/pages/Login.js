import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleLogin = () => {
    if (
      (data.username == "admin@gmail.com" && data.password == "123") ||
      (data.username == "user@gmail.com" && data.password == "123")
    ) {
      navigate("/dashboard");
    } else {
      Swal.fire({
        position: "top",
        height: "20px;",
        text: "check username/password!",
      });
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-blue-900">
        <div className="w-96 p-6 shadow-1  bg-white rounded-md">
          <h1 className="text-3xl block font-semibold ml-2">
            {" "}
            <i className="fa-solid fa-user mr-2"></i>Login
          </h1>
          <hr className="w-48 h-1 mx-auto my-4 bg-gray-200 border-0 rounded md:my-10 dark:bg-gray-700" />
          <div className="mt-3">
            <label className="block text-base mb-2 flex justify-start items-start font-semibold ">
              Username
            </label>
            <input
              type="text"
              id="username "
              className="border w-full text-base px-2 py-1 focus:outline-none focus:right-0 focus:border-gray-600"
              placeholder="username"
              value={data.username}
              onChange={handleInput}
              name="username"
            />
          </div>
          <div className="mt-3">
            <label className="block text-base mb-2 flex justify-start items-start font-semibold">
              Password
            </label>
            <input
              type="password"
              id="password "
              className="border w-full text-base px-2 py-1 focus:outline-none focus:right-0 focus:border-gray-600"
              placeholder="password"
              value={data.password}
              onChange={handleInput}
              name="password"
            />
          </div>
          <div className="mt-3 flex justify-between items-center">
            <div>
              <input type="checkbox" className="mr-2" />
              <label htmlFor="">Remember me?</label>
            </div>
            <div>
              <a href="#" className="text-indigo-800 font-semibold">
                Forget Password
              </a>
            </div>
          </div>
          <div className="mt-5">
            <button
              onClick={handleLogin}
              className="border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
