import React from "react";
import Box from "../components/Box";
import LineChart from "../components/LineChart";

const Dashboard = () => {
  return (
    <div className="h-screen w-full py-4 ">
      <div className="space-y-4 h-full w-full">
        <h1 className="text-3xl text-center font-bold">Statistics Dashboard</h1>
        <div className="flex space-x-2 w-full justify-center">
          <Box title={"Today Tasks"} value={78} />
          <Box title={"Tasks Done"} value={58} />
          <Box title={"Total Tasks Done"} value={623} />
        </div>
        <div className="w-full h-[75%]">
          <LineChart />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Dashboard;
