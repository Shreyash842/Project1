"use client";
import Login from "../components/login"; 
import { useSearchParams } from "next/navigation";
import { toast } from "react-toastify";
import { useEffect } from "react";
 
export default function LoginPage() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
 
  useEffect(() => {
    if (error === "CredentialsSignin") {
      toast.error("Invalid email or password");
    } else if (error) {
      toast.error("Login error: " + error);
    }
  }, [error]);
 
  return <Login onLoginSuccess={() => console.log("Logged in")} />;
}