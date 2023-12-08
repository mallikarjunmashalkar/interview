import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../pages/store";

const Update = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const existingUser = users.filter((f) => f.id == id);
  const { title, description, dueDate, status, remark } = existingUser[0];
  const [utitle, setTitle] = useState(title);
  const [udiscription, setDiscription] = useState(description);
  const [udueDate, setDueDate] = useState(dueDate);
  const [ustatus, setStatus] = useState(status);
  const [uremark, setRemark] = useState(remark);
  const [headerName, setHeaderName] = useState("Update The Task");
  const words = headerName.split(" ");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateUser({
        id: id,
        title: utitle,
        description: udiscription,
        dueDate: udueDate,
        status: ustatus,
        remark: uremark,
      })
    );
    navigate("/");
  };
  return (
    <div
      style={{ margin: "10px" }}
      class="block w-auto rounded-lg bg-gray-200 text-left shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
    >
      <div className="p-6">
        <p style={{ fontWeight: "bolder", fontSize: "20px", marginTop: "2px" }}>
          <span>{words.slice(0, 2).join(" ")}</span>{" "}
          <span style={{ color: "orange", fontWeight: "600" }}>{words[2]}</span>{" "}
          <span>{words.slice(3).join(" ")}</span>
        </p>
      </div>

      <div class="grid place-items-center">
        <form onSubmit={handleSubmit}>
          <div class="grid gap-6 mb-6 md:grid-cols-2 mt-10">
            <div>
              <label
                for="first_name"
                class="block mb-2 text-lg font-semibold text-gray-900 dark:text-white"
              >
                Tatile
              </label>
              <input
                type="text"
                value={utitle}
                onChange={(e) => setTitle(e.target.value)}
                name="title"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Title"
              />
            </div>
            <div>
              <label
                for="last_name"
                class="block mb-2 text-lg font-semibold text-gray-900 dark:text-white"
              >
                description
              </label>
              <input
                type="text"
                value={udiscription}
                onChange={(e) => setDiscription(e.target.value)}
                name="discription"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Discription"
              />
            </div>
            <div>
              <label
                for="dueDate"
                class="block mb-2 text-lg font-semibold text-gray-900 dark:text-white"
              >
                Due_Date
              </label>
              <input
                type="date"
                value={udueDate}
                onChange={(e) => setDueDate(e.target.value)}
                name="discription"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Discription"
              />
            </div>
            <div>
              <label
                for="countries"
                class="block mb-2 text-lg font-semibold text-gray-900 dark:text-white"
              >
                Select an Status
              </label>
              <select
                value={ustatus}
                onChange={(e) => setStatus(e.target.value)}
                id="countries"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Choose a country</option>
                <option value="Pending">Pending</option>
                <option value="Approved">Approved</option>
                <option value="Cancel">Cancel</option>
              </select>
            </div>
            <div>
              <label
                for="dueDate"
                class="block mb-2 text-lg font-semibold text-gray-900 dark:text-white"
              >
                Remark
              </label>
              <input
                type="text"
                value={uremark}
                onChange={(e) => setRemark(e.target.value)}
                name="remark"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Discription"
              />
            </div>
          </div>
          <div className="mb-10">
            <button
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
