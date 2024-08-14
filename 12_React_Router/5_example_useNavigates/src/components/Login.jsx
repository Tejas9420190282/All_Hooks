import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  
  const [showPass, setShowPass] = useState("false");

  const nevigate = useNavigate();

  const handleForgetPass = () => {
    nevigate("/forget-password");
  }

  const handleCreateAcc = () => {
    nevigate("/create-acc");
  }

  return (
    <>
      <div className="h-72 w-80 bg-white mt-10 border-2 border-black ">
        <p className="text-black text-xl font-semibold mt-5">Login page</p>

        <div className="h-10 w-64 bg-white mx-auto mt-5 border-2 border-black rounded-md flex justify-center items-center">
          <input
            type="input"
            className="h-8 w-56 bg-white outline-none text-black "
            placeholder="Enter Username or Email"
          />
        </div>
        <div className="h-10 w-64 bg-white mx-auto mt-2 border-2 border-black rounded-md flex justify-center items-center">
          <input
            type={showPass ? "text" : "password"}
            className="h-8 w-48 bg-white outline-none text-black "
            placeholder="Enter Password"
          />
          <p
            className="text-blue-500 ml-3 font-semibold"
            onClick={() => setShowPass(!showPass)}
          >
            {showPass ? "Hide" : "Show"}
          </p>
        </div>

        <div className="h-10 w-64 bg-blue-500 mt-5 mx-auto rounded-md font-bold flex justify-center items-center hover:border-2 cursor-pointer hover:bg-white hover:text-blue-500 hover:border-blue-500 "><p className="">Log in</p></div>

        <ul className="flex mt-2 text-black gap-5 font-semibold ">
            <li className=" text-left ml-7  hover:text-blue-500 cursor-pointer" onClick={handleForgetPass}>Forget password</li>
            <li className="text-right hover:text-blue-500 cursor-pointer" onClick={handleCreateAcc}>Create Account</li>
        </ul>
        
      </div>
    </>
  );
}

export default Login;
