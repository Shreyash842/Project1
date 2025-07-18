import { useState } from "react";
import {signIn} from"next-auth/react";
import axios from './axiosInstance'; 
import { toast } from "react-toastify";

export default function Login({onLoginSuccess }) {

  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await signIn("credentials",{
       redirect:false,
        email :credentials.email,
        password:credentials.password,
        
      });
      if(result.ok){
        toast.success("Welcome back! Login Successful");
        setTimeout(()=>{
          onLoginSuccess();
        },2000)
      }
      else{
        toast.error("Invalid email or password");
      }
    } catch (error) {
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl p-8 md:flex-row md:space-y-0">
      
        <div className="flex flex-col justify-center p-8 md:p-14">
          <span className="mb-3 text-4xl font-bold">Welcome</span>
          <span className="font-light text-gray-400 mb-8">
            Please enter your credentials to login
          </span>

           <form onSubmit={handleLogin}>
          <div className="py-4">
            <span className="mb-2 text-md">Email</span>
            <input
              type="text"
              name="email"
              id="email"
              value={credentials.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              placeholder="Enter your email" required
            />
          </div>
          <div className="py-4">
            <span className="mb-2 text-md">Password</span>
            <input
              type="password"
              name="password"
              id="password"
              value={credentials.password}
               onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center py-4">
            <input type="checkbox" name="remember" id="remember" className="mr-2" />
            <label htmlFor="remember" className="text-md">
              Remember Me
            </label>
          </div>
          <button className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300">
            Sign in
          </button>
          </form>
          <div className="text-center text-gray-400">
            Don’t have an account?{" "}
            <span className="font-bold text-black cursor-pointer">Sign Up</span>
          </div>
        </div>

     
        <div className="relative hidden md:block">
          <img
            src="/cfg.png"
            alt="Login Illustration"
            className="w-[400px] h-full rounded-r-2xl object-cover"
          />
          <div className="absolute bottom-10 right-6 p-6 bg-blue-950 bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg">
            <span className="text-white text-xl bg-blue-950">Coforge</span>
          </div>
        </div>
      </div>
    </div>
  );
}
