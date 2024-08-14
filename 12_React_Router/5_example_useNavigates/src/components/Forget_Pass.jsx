import React, { useState } from 'react'

function Forget_Pass() {

    const [showPasswd1, setShowPasswd1] = useState()
    const [showPasswd2, setShowPasswd2] = useState() 

    return (
        <>
            <div className="h-72 w-80 bg-white border-black border-2">
        <p className="text-xl font-semibold pt-5">Forget Password Page</p>

        <div className="h-10 w-64 bg-white mx-auto mt-5 border-2 border-black rounded-md flex justify-center items-center">
          <input
            type="input"
            className="h-8 w-56 bg-white outline-none text-black "
            placeholder="Enter Username or Email"
          />
        </div>
        <div className="h-10 w-64 bg-white mx-auto mt-2 border-2 border-black rounded-md flex justify-center items-center">
          <input
            type= {showPasswd1 ? "input" : "password"} 
            className="h-8 w-44 bg-white outline-none text-black "
            placeholder="Enter Password"
          />
          <p className="text-blue-500 ml-3 font-semibold" onClick={() => setShowPasswd1(!showPasswd1)}>
            {showPasswd1 ? "Hide" : "Show"}
          </p>
        </div>
        <div className="h-10 w-64 bg-white mx-auto mt-2 border-2 border-black rounded-md flex justify-center items-center">
          <input
            type={showPasswd2 ? "input" : "password"}
            className="h-8 w-44 bg-white outline-none text-black "
            placeholder="Conform Password"
          />
          <p className="text-blue-500 ml-3 font-semibold" onClick={() => setShowPasswd2(!showPasswd2)}>
            {showPasswd2 ? "Hide" : "Show"}
          </p>
        </div>

        <div className="h-10 w-64 bg-blue-500 mt-5 mx-auto flex justify-center items-center text-white rounded-md hover:border-2 hover:border-blue-500 hover:text-blue-500 hover:bg-white">
            <p className="font-semibold">Log in</p>
        </div>
      </div>


        </>
    )
}

export default Forget_Pass
