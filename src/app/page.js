'use client';
import { useState } from "react";
import Navbar from "./components/Navbar";
import { ToastContainer, Slide } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./globals.css";
import EmpList from "./components/EmpList";
import Login from "./components/login";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        className="custom-toast"
        closeOnClick
        closeButton={true}
        pauseOnHover={false}
        draggable={true}
        transition={Slide}
        newestOnTop={true}
      />

      {!isLoggedIn ? (
        <Login onLoginSuccess={() => setIsLoggedIn(true)} />
      ) : (
        <>
          <Navbar />
          <EmpList />
        </>
      )}
    </div>
  );
}
