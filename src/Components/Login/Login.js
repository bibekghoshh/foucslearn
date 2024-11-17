import React, { useState } from "react";

const Login = () => {
  const [userLoginPage, setLoginPage] = useState(true); 
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");


  const handleSubmit = (event) => {
    event.preventDefault();

  };
  return (
    <div className={`flex items-center justify-center h-screen gap-6 transition-all duration-1000 bg-blue-50`}>
        <div className={`flex flex-col gap-16 transition-all duration-500 ${userLoginPage?"":"translate-x-96"}`}>
            <h1 className="text-blue-400 text-4xl font-medium bg-gradient-to-r from-green-600 to-blue-700 bg-clip-text text-transparent">Welcome to FocusLearn</h1>
            <div className="w-96">Watch YouTube playlist videos without distractions. It offers a clean user interface, featuring a distraction-free viewing experience and the ability to track progress</div>
            <div>Upgrade your Youtube Learning with FocusLearn</div>
        </div>
      <form
        onSubmit={handleSubmit}
        className={`border-green-700 px-6 py-6 shadow-xl flex flex-col gap-6 transition-all duration-500 ${userLoginPage?"":"-translate-x-96"}`}
      >
        <h2 className="text-3xl font-semibold text-center text-blue-600 transition duration-500">{userLoginPage?"Login In":"Sign Up"}</h2>
         {userLoginPage?"":<input
            type="text"
            name="Name"
            id="name"
            required
            value={name}    
            onChange={(e)=>{setName(e.target.value)}}
            className=" border-2 px-3 py-3 w-72 outline-none focus:border-blue-400 transition duration-500"
            placeholder="Name"
          />}
        <div>
          <input
            type="email"
            name="email"
            id="email"
            required
            value={email}
            onChange={(event)=>{setEmail(event.target.value)}}
            className="border-2  px-3 py-3 w-72 focus:border-blue-400 transition duration-500 outline-none"
            placeholder="Email"
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            id="password"
            required
            value={password}
            onClick={(event)=>{setPassword(event.target.value)}}
            className="border-2  px-3 py-3 w-72 outline-none focus:border-blue-400 transition duration-500"
            placeholder="Password"
          />
        </div>

        <button
          type="submit"
          className="bg-cyan-800 text-white py-2 rounded-md transition duration-500"
        >
          {userLoginPage?"Login":"Sign Up"}
        </button>

        <div className=" flex justify-center transition duration-500">
          {userLoginPage ? (
            <div className="flex">
              Don't have a account?{" "}
              <div className="text-blue-500 cursor-pointer " onClick={()=>setLoginPage(false)}>Sign Up</div>
            </div>
          ) : (
            <div className="flex">
               Alreay Have an Account ?{" "}
              <div className="text-blue-500 cursor-pointer" onClick={()=>setLoginPage(true)}> Login</div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
