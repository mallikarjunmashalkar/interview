import React, { useState } from "react";
import { addUser } from "../pages/store";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
  const [data, setData] = useState({
    title: "",
    discription: "",
    dueDate: "",
    status: "",
    remark: "",
  });
  const [headerName, setHeaderName] = useState("Creation Of Task  ");
  const words = headerName.split(" ");
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addUser({
        id: users[users.length - 1].id + 1,
        title: data.title,
        description: data.discription,
        dueDate: data.dueDate,
        status: data.status,
        remark: data.remark,
      })
    );
    navigate("/");
  };
  return (
    <>
      <div
        style={{ margin: "10px" }}
        class="block w-auto rounded-lg bg-gray-200 text-left shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
      >
        <div className="p-6">
          <p
            style={{ fontWeight: "bolder", fontSize: "20px", marginTop: "2px" }}
          >
            <span>{words.slice(0, 2).join(" ")}</span>{" "}
            <span style={{ color: "orange", fontWeight: "600" }}>
              {words[2]}
            </span>{" "}
            <span>{words.slice(3).join(" ")}</span>
          </p>
        </div>
        <div class="grid place-items-center ">
          <form onSubmit={handleSubmit}>
            <div class="grid gap-6 mb-6 md:grid-cols-2 mt-10 ">
              <div>
                <label
                  for="first_name"
                  class="block mb-2 text-lg font-semibold text-gray-900 dark:text-white"
                >
                  Title
                </label>
                <input
                  type="text"
                  value={data.title}
                  onChange={handleInput}
                  name="title"
                  id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter title"
                  required
                />
              </div>
              <div>
                <label
                  for="last_name"
                  class="block mb-2 text-lg font-semibold text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <input
                  type="text"
                  value={data.discription}
                  onChange={handleInput}
                  name="discription"
                  id="last_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter description"
                  required
                />
              </div>
              <div>
                <label
                  for="company"
                  class="block mb-2 text-lg font-semibold text-gray-900 dark:text-white"
                >
                  Due_Date
                </label>
                <input
                  type="date"
                  value={data.dueDate}
                  onChange={handleInput}
                  name="dueDate"
                  id="company"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Due_date"
                  required
                />
              </div>
              <div>
                <label
                  for="phone"
                  class="block mb-2 text-lg font-semibold text-gray-900 dark:text-white"
                >
                  Statue
                </label>
                <select
                  value={data.status}
                  onChange={handleInput}
                  name="status"
                  id="countries"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                >
                  <option selected>Choose a Status</option>
                  <option value="Pending">Pending</option>
                  <option value="Approved">Approved</option>
                  <option value="Cancel">Cancel</option>
                </select>
              </div>
              <div>
                <label
                  for="website"
                  class="block mb-2 text-lg font-semibold text-gray-900 dark:text-white"
                >
                  Remark
                </label>
                <input
                  type="text"
                  value={data.remark}
                  onChange={handleInput}
                  name="remark"
                  id="website"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter remark"
                  required
                />
              </div>
            </div>
            <div className="mb-10">
              <button
                type="submit"
                class="text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-4"
              >
                Submit
              </button>
              <Link to="/">
                <button class="text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4">
                  Cancel
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Create;
