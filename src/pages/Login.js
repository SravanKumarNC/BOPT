import React, { useState, useRef } from "react";
import logo from "../utils/controlonelogo.png";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  // const navigate = useNavigate()
  const handleSubmit = () => {};
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    // <div className="bg-gray-200 w-screen h-screen flex items-center justify-center absolute">
    <div className="relative w-screen h-screen ">
      <video
        src="https://www.skscleantech.in/wp-content/uploads/2020/12/videoplayback.mp4"
        autoPlay={true}
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover "
      ></video>

      <div className="flex items-center justify-center w-full h-full">
        <div className="max-w-[400px] shadow-2xl m-24 p-16 rounded-2xl bg-white relative z-10 bg-opacity-15">
          <form onSubmit={handleSubmit}>
            <div className="flex justify-center p-4">
              <img src={logo} alt="logo" className="w-[80%]"></img>{" "}
            </div>
            <div className="input-group mb-5">
              <label
                htmlFor="Email"
                className="block mb-2 font-semibold text-white"
              >
                Email
              </label>
              <input
                ref={email}
                type="email"
                className="w-[100%] p-2 rounded-md border-2 text-lg bg-gray-200"
                placeholder="username@gmail.com"
                name=""
                id="email"
              />
            </div>
            <div className="input-group mb-5">
              <label
                htmlFor="passowrd"
                className="block mb-2 font-semibold text-white"
              >
                Password
              </label>
              <input
                ref={password}
                type={showPassword ? "password" : "text"}
                className="w-[100%] p-2 rounded-md border-2 text-lg bg-gray-200"
                placeholder="Password"
                name=""
                id="password"
              ></input>
            </div>
            <div className="mb-2 space-x-2 flex items-center">
              <input type="checkbox" onClick={handleShowPassword} />
              <label className="text-white">show Password</label>
            </div>
            {/* <p className="text-center text-red-500 text-sm">msg</p> */}
            <Link to={"/dashboard"}>
            <button
              type="submit"
              className="w-[100%] p-2 border-none rounded-md bg-green-500 text-black font-bold cursor-pointer hover:opacity-75"
              
            >
              Login
            </button>
            </Link>
            {/* <p className="register-link text-center p-2">
            Not registered?Register here
          </p> */}
          </form>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Login;
