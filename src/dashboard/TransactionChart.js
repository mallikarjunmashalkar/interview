import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const TransactionChart = () => {
  const data = [
    {
      name: "Page A",
      Expense: 4000,
      Income: 2400,
    },
    {
      name: "Page B",
      Expense: 3000,
      Income: 1398,
    },
    {
      name: "Page C",
      Expense: 2000,
      Income: 9800,
    },
    {
      name: "Page D",
      Expense: 2780,
      Income: 3908,
    },
    {
      name: "Page E",
      Expense: 1890,
      Income: 4800,
    },
    {
      name: "Page F",
      Expense: 2390,
      Income: 3800,
    },
    {
      name: "Page G",
      Expense: 3490,
      Income: 4300,
    },
  ];
  return (
    <div className="h-[24rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1 ml-4 ">
      <strong className="text-gray-700 font-medium">Transaction</strong>
      <div className="w-full mt-3 flex-1 text-sm">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 10,
              left: -10,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3 0 0 " vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Income" fill="#0ea5e9" />
            <Bar dataKey="Expense" fill="#ea580c" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TransactionChart;
