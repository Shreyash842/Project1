"use client";
import { useState } from "react";

export default function Login() {
  const [credentials, setCredentials] = useState({
    User_id: "",
    password: ""
  });


  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };



   return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 overflow-hidden p-4">
      <div className="relative flex bg-white shadow-2xl rounded-2xl overflow-hidden w-full md:max-w-2xl h-[32rem]">
        
        <div className="hidden md:flex items-center justify-center overflow-hidden">
          <img
            src="/cfg.png"
            alt="Login Illustration"
            className="w-auto h-[32rem] object-contain"
          />
        </div>

    
        <div className="flex flex-col justify-center px-8 py-8 w-fit">
          
      
          <div className="text-center mb-12">
            <div className="mb-2">
              <span className="text-3xl font-bold">
                <span className="text-orange-500">Co</span>
                <span className="text-gray-800">forge Limited</span>
              </span>
            </div>
            <div>
              <span className="text-2xl font-semibold">
                <span className="text-red-500">HSBC</span>
                <span className="text-gray-800 pl-[5px]">Account</span>
              </span>

            </div>
          </div>

        
          <div className="space-y-5">
            
            
            <div className="flex items-center gap-3">
              <label className="text-sm font-semibold w-24  whitespace-nowrap">USER ID :</label>
              <input
                type="text"
                name="User_id"
                onChange={handleChange}
                className="w-48 px-3 py-2 text-sm border-2 border-orange-400 rounded-md focus:outline-none focus:border-orange-500"
                placeholder=""
              />
            </div>

         
           <div className="flex items-center gap-3">
              <label className="text-sm font-semibold w-24 whitespace-nowrap">PASSWORD :</label>
              <input
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                className="w-48 px-3 py-2 text-sm border-2 border-orange-400 rounded-md focus:outline-none focus:border-orange-500"
                placeholder=""
              />
            </div>
        
            <button 
             
              className="w-full bg-black cursor-pointer text-white py-2.5 text-sm rounded-md font-medium hover:bg-white hover:text-black focus:border-black border-2  transition mt-8"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}