import React, { useState } from "react";
import DropDown from "../components/DropDown";
import sendData from "../services/WebSockets";

const Tasks = () => {
  const [bot, setBot] = useState(null);
  const [battery, setBattery] = useState(null);
  let data = "";
  const bots = ["A1", "A2", "A3", "A4"];
  const batteries = [
    "B1",
    "B2",
    "B3",
    "B4",
    "B5",
    "B6",
    "B7",
    "B8",
    "B9",
    "B10",
  ];

  const handleAssign = () => {
    if (bot && battery) {
      data = bot + " " + battery + " D2";
      sendData(data);
      // console.log(data);
    }
    setBot(null);
    setBattery(null);
  };
  // console.log(bot, battery)
  return (
    <div className="bg-orange-100 h-screen flex justify-center space-y-4 pt-[10%]">
      <div className="w-[80%] h-fit bg-gray-300 rounded-md pt-[2%]">
        <h1 className="font-bold text-3xl py-4 ml-[2%] text-center">
          Task Assignment
        </h1>
        <div className="flex space-x-4 justify-center">
          <DropDown
            data={bots}
            title={"AGENT"}
            selectedValue={bot}
            onChange={setBot}
          />
          <DropDown
            data={batteries}
            title={"BATTERY"}
            selectedValue={battery}
            onChange={setBattery}
          />
          <span className="bg-white px-4 py-3 font-semibold rounded-md">
            Dock : D2
          </span>
        </div>
        <div className="text-end m-[4%]">
          <button
            className="bg-green-400 px-6 py-2 rounded-md font-bold"
            onClick={handleAssign}
          >
            Assign
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
