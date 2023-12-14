import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const location = useLocation();
  const data = location.state;
  const navigate = useNavigate();

  const [brand, setBrand] = useState(data.brand);
  const [price, setPrice] = useState(data.price);
  const [rating, setRating] = useState(data.rating);
  const [stock, setStock] = useState(data.stock);
  const [discount, setDiscount] = useState(data.discountPercentage);
  const [category, setCatogory] = useState(data.catogory);
  const [headerName, setHeaderName] = useState("Update - Products ");
  const words = headerName.split(" ");

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestData = {
      brand: brand,
      price: price,
      rating: rating,
      stock: stock,
      discount: discount,
      category: category,
      description: "",
      images: "",
      thumbnail: "",
      title: "",
    };
    fetch(`https://dummyjson.com/products/${JSON.stringify(data.id)}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.message !== "Product with id 'undefined' not found") {
          navigate("/home");
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Updated Successful",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div
      style={{ margin: "10px" }}
      className="block w-auto rounded-lg bg-gray-200 text-left shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
    >
      <div className="p-6">
        <p style={{ fontWeight: "bolder", fontSize: "20px", marginTop: "2px" }}>
          <span>{words.slice(0, 2).join(" ")}</span>{" "}
          <span style={{ color: "orange", fontWeight: "600" }}>{words[2]}</span>{" "}
          <span>{words.slice(3).join(" ")}</span>
        </p>
      </div>

      <div className="grid place-items-center">
        <form onSubmit={handleSubmit}>
          <div className="grid gap-6 mb-6 md:grid-cols-2 mt-10">
            <div>
              <label
                for="first_name"
                className="block mb-2 text-lg font-semibold text-gray-900 dark:text-white"
              >
                Brand
              </label>
              <input
                type="text"
                name="brand"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Title"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              />
            </div>
            <div>
              <label
                for="last_name"
                className="block mb-2 text-lg font-semibold text-gray-900 dark:text-white"
              >
                Price
              </label>
              <input
                type="number"
                name="price"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Title"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div>
              <label
                for="dueDate"
                className="block mb-2 text-lg font-semibold text-gray-900 dark:text-white"
              >
                Rating
              </label>
              <input
                type="number"
                name="rating"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Discription"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              />
            </div>
            <div>
              <label
                for="dueDate"
                className="block mb-2 text-lg font-semibold text-gray-900 dark:text-white"
              >
                Stock
              </label>
              <input
                type="number"
                name="remark"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Discription"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
              />
            </div>
            <div>
              <label
                for="dueDate"
                className="block mb-2 text-lg font-semibold text-gray-900 dark:text-white"
              >
                Discount %
              </label>
              <input
                type="number"
                name="discountPercentage"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Discription"
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
              />
            </div>
            <div>
              <label
                for="phone"
                className="block mb-2 text-lg font-semibold text-gray-900 dark:text-white"
              >
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCatogory(e.target.value)}
                name="catogory"
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              >
                <option value="laptops">laptops</option>
                <option value="smartphones">smartphones</option>
                <option value="fragrances">fragrances</option>
                <option value="skincare">skincare</option>
                <option value="groceries">groceries</option>
                <option value="home-decoration">home-decoration</option>
              </select>
            </div>
          </div>
          <div className="mb-10">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
