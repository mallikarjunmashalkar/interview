import React from "react";
import DashboardStateGrid from "./DashboardStateGrid";
import TransactionChart from "./TransactionChart";
import BuyesChart from "./BuyesChart";
import RecentOrder from "./RecentOrder";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-4 min-h-full bg-gray-100">
      <DashboardStateGrid />
      <div className="flex flex-row gap-4 w-full ">
        <TransactionChart />
        <BuyesChart />
      </div>
      <div className="flex flex-row gap-4 w-full ">
        <RecentOrder />
      </div>
    </div>
  );
};

export default Dashboard;
