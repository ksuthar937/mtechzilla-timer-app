import React from "react";
import googleLogo from "../assets/google.svg";

import { signInWithPopup } from "firebase/auth";

import { auth, googleAuthProvider } from "../config";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const loginData = await signInWithPopup(auth, googleAuthProvider);
      // console.log(loginData);
      localStorage.setItem("tokenId", loginData.user.accessToken);
      localStorage.setItem("userData", JSON.stringify(loginData.user));
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Oops! Something Wrong...");
    }
  };

  return (
    <>
      <div className="text-center my-10">
        <h1 className="font-mono text-lg">
          Login Instantly with Google: Click Below to Access Now!
        </h1>
      </div>
      <div className="flex justify-center align-middle mt-10">
        <button
          onClick={handleLogin}
          className="bg-sky-500 hover:bg-sky-600 active:bg-sky-700 focus:outline-none focus:ring focus:ring-sky-300 rounded-full px-5 py-3 text-white flex gap-2 align-middle font-semibold"
        >
          <span>
            <img src={googleLogo} alt="google" className="w-8" />
          </span>
          Login with Google
        </button>
      </div>
    </>
  );
};

export default Login;
