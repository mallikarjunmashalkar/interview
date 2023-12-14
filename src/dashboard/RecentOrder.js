import React from "react";

const RecentOrder = () => {
  const userList = [
    {
      Product_ID: "6453",
      cust_ID: "876345",
      cust_name: "Mallikarjun",
      phone: "0239873553",
      status: "Cancel",
      id: 1,
    },
    {
      Product_ID: "2354",
      cust_ID: "748633",
      cust_name: "Anil",
      phone: "0239873553",
      status: "Pending",
      id: 2,
    },
    {
      Product_ID: "0987",
      cust_ID: "098735",
      cust_name: "Sagar",
      phone: "0239873553",
      status: "Approved",
      id: 3,
    },
    {
      Product_ID: "1732",
      cust_ID: "253764",
      cust_name: "Jhon",
      phone: "0985948836",
      status: "Cancel",
      id: 4,
    },
    {
      Product_ID: "2538",
      cust_ID: "937651",
      cust_name: "Keshav",
      phone: "0239873553",
      status: "Pending",
      id: 5,
    },
    {
      Product_ID: "0956",
      cust_ID: "756640",
      cust_name: "Tivari",
      phone: "0239873553",
      status: "Pending",
      id: 6,
    },
    {
      Product_ID: "2434",
      cust_ID: "099373",
      cust_name: "Mony",
      phone: "0239873553",
      status: "Approved",
      id: 7,
    },
    {
      Product_ID: "1153",
      cust_ID: "645538",
      cust_name: "Shamas",
      phone: "0239873553",
      status: "Pending",
      id: 8,
    },
  ];

  return (
    <div className="bg-white px-4 pb-4 rounded-sm border border-gray-200 flex-1 ml-4 mr-4">
      <div className="mt-4">
        <strong>RecentOrder</strong>
      </div>
      <div className="mt-3 ">
        <table className="w-full text-gray-700 mt-3">
          <thead>
            <tr>
              <th>ID</th>
              <th>Product ID</th>
              <th>Customer ID</th>
              <th>Customer Name</th>
              <th>Customer Phone</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.Product_ID}</td>
                <td>{order.cust_ID}</td>
                <td>{order.cust_name}</td>
                <td>{order.phone}</td>
                <td>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrder;
