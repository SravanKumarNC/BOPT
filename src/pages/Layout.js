import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex h-screen w-screen">
      <div className="w-1/5">
        <Navbar />
      </div>

      <div className="w-4/5 flex-1">{<Outlet />}</div>
    </div>
  );
};

export default Layout;
