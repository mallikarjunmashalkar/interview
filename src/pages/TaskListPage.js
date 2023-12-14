import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { userActions } from "./store";
import { fetchUserList, deleteUserList } from "./index";

const Home = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.userList);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUserList(dispatch);
  }, []);

  const handleUpdate = (id) => {
    navigate(`/edit/${id}`, { state: id });
  };

  const handleView = (id) => {
    navigate(`/view/${id}`, { state: id });
  };

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
        deleteUserList(id);
        fetchUserList(dispatch);
        Swal.fire({
          title: "Deleted!",
          text: `User with ID ${id} deleted successfully`,
          icon: "success",
        });
      }
    });
  };

  return (
    <>
      <div
        style={{ margin: "10px" }}
        className="block w-auto rounded-lg bg-gray-200 text-left shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
      >
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-2">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
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
                    List Of Products
                  </label>
                  <Link to="/create">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded ml-6 mt-4 mb-4">
                      Create +
                    </button>
                  </Link>
                </div>

                <table className="min-w-full text-left text-lg font-light">
                  <thead className="border-b font-bold dark:border-neutral-500 bg-gray-700 text-white">
                    <tr>
                      <th scope="col" className="px-6 py-4">
                        ID
                      </th>
                      <th scope="col" className="px-10 py-4">
                        Brand
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Price
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Discount%
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Rating
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Stock
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Category
                      </th>
                      <th scope="col" className="px-10 py-4">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {users?.products &&
                      users?.products?.map((user, index) => {
                        return (
                          <tr
                            key={index}
                            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
                          >
                            <td className="whitespace-nowrap px-6 py-4">
                              {user.id}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              {user.brand}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              {user.price}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              {user.discountPercentage}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              {user.rating}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              {user.stock}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              {user.category}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              <button
                                onClick={() => handleView(user)}
                                className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-1 px-2 rounded mr-2"
                              >
                                {" "}
                                View
                              </button>

                              <button
                                className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-1 px-2 rounded mr-2"
                                onClick={() => handleUpdate(user)}
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => handleDelete(user.id)}
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
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
