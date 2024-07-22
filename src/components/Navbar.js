import React from "react";
// import logo from "../utils/logo.png";
import logo from "../utils/controlonelogo.png";
import { Link, useNavigate } from "react-router-dom";
import { GrDatabase } from "react-icons/gr";
import { BiLogOut, BiTask } from "react-icons/bi";
// import { VscDebugConsole } from "react-icons/vsc";
import { MdOutlineDashboard } from "react-icons/md";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
  };
  return (
    <div className="relative min-h-[100%] flex"> 
      <video
        src="https://www.skscleantech.in/wp-content/uploads/2020/12/videoplayback.mp4"
        autoPlay={true}
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover opacity-90"
      ></video>
      <div
        className={`relative z-10  flex flex-col text-slate-900 dark:text-white min-h-full transition duration-1000 top-0 left-0 `}
      >
        <div className="flex-1">
          <div className="p-2 border-b-2">
            <div className="px-4 hover:text-slate-400 flex items-center justify-center">
              <img src={logo} alt="Logo" className={"w-[100%] h-22"} />
            </div>
          </div>

          <div className="p-1 my-6 mr-3 font-semibold">
            <Link to={"/dashboard"}>
              <div className="xl:flex items-center p-1 hover:cursor-pointer hover:border-2 hover border-blue-400 rounded-md">
                <MdOutlineDashboard className="h-7 w-7 m-3" />
                <span className="uppercase">Dashboard</span>
              </div>
            </Link>

            <Link to={"/task"}>
              <div className="xl:flex  items-center p-1  hover:cursor-pointer hover:border-2 hover border-blue-400 rounded-md">
                <BiTask className="h-7 w-7 m-3" />
                <h1 className="uppercase">Task Input</h1>
              </div>
            </Link>
            <Link to={"/records"}>
              <div className="xl:flex  items-center p-1 hover:cursor-pointer  hover:border-2 hover border-blue-400 rounded-md">
                <GrDatabase className="h-7 w-7 m-3 font-bold" />
                <h1 className="uppercase">History</h1>
              </div>
            </Link>
          </div>
        </div>
        <div className="mb-3 space-x-2 flex items-center px-4  justify-between">
          <div>
            <img
              src="https://www.skscleantech.in/wp-content/uploads/2020/12/cropped-WhatsApp_Image_2020-12-21_at_4.39.34_PM-removebg-preview-1-1-405x259.png"
              alt="Logo"
              className={"w-[100%] h-20"}
            />
          </div>

          <button
            className={`hover:bg-gray-700 rounded-md `}
            onClick={handleLogout}
          >
            <BiLogOut className="h-7 w-7 m-3"/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
