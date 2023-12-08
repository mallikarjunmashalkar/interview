import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteUser } from "../pages/store";
import Swal from "sweetalert2";

const Home = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "you want to be delete!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteUser({ id: id }));
        Swal.fire({
          title: "Deleted!",
          text: "Your data has been deleted.",
          icon: "success",
        });
      }
    });
  };
  return (
    <>
      <div
        style={{ margin: "10px" }}
        class="block w-auto rounded-lg bg-gray-200 text-left shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
      >
        <div class="flex flex-col">
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-2">
            <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div class="overflow-hidden">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "0px 20px 0px 20px",
                  }}
                >
                  <label
                    htmlFor="first_name"
                    className="block mt-4 text-2xl font-semibold text-gray-900 dark:text-white"
                  >
                    List Of Tasks
                  </label>
                  <Link to="/create">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded ml-6 mt-4 mb-4">
                      Create +
                    </button>
                  </Link>
                </div>

                <table class="min-w-full text-left text-lg font-light">
                  <thead class="border-b font-bold dark:border-neutral-500 bg-gray-700 text-white">
                    <tr>
                      <th scope="col" class="px-6 py-4">
                        ID
                      </th>
                      <th scope="col" class="px-10 py-4">
                        Title
                      </th>
                      <th scope="col" class="px-6 py-4">
                        Description
                      </th>
                      <th scope="col" class="px-6 py-4">
                        Due_Date
                      </th>
                      <th scope="col" class="px-10 py-4">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user, index) => {
                      return (
                        <tr
                          key={index}
                          class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
                        >
                          <td class="whitespace-nowrap px-6 py-4">{user.id}</td>
                          <td class="whitespace-nowrap px-6 py-4">
                            {user.title}
                          </td>
                          <td class="whitespace-nowrap px-6 py-4">
                            {user.description}
                          </td>
                          <td class="whitespace-nowrap px-6 py-4">
                            {user.dueDate}
                          </td>
                          <td class="whitespace-nowrap px-6 py-4">
                            <Link to={`/view/${user.id}`}>
                              <button class="bg-blue-400 hover:bg-blue-500 text-white font-bold py-1 px-2 rounded mr-2">
                                {" "}
                                Details
                              </button>
                            </Link>
                            <Link to={`/edit/${user.id}`}>
                              <button class="bg-blue-600 hover:bg-blue-800 text-white font-bold py-1 px-2 rounded mr-2">
                                Edit
                              </button>
                            </Link>
                            <button
                              onClick={() => handleDelete(user.id)}
                              class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                            >
                              {" "}
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
