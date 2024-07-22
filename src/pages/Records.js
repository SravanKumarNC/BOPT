import React from "react";
import Table from "../components/Table";
import { taskData } from "../utils/DummyData";

const Records = () => {
  const TaskHeadings = ["S.NO", "Task ID", "Status", "Time Stamps"];
  return (
    <div className="bg-gray-200 h-screen">
      <h1 className="font-bold text-3xl py-4 ml-[2%] text-center">History of Data</h1>
      <div className="flex justify-center w-full ">
        <Table headings={TaskHeadings} data={taskData} />
      </div>
    </div>
  );
};

export default Records;