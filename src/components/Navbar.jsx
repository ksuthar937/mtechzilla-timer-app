import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../config";
import toast from "react-hot-toast";

const Navbar = ({ avatar }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("tokenId");
      localStorage.removeItem("userData");
      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.error("Oops! Something Wrong...");
    }
  };

  return (
    <div className="flex bg-gray-200 justify-between p-2">
      <h1 className="uppercase font-mono text-4xl">Pomodro Timer</h1>
      <div className="flex gap-3">
        <div className="shrink-0">
          <img
            className="h-12 w-12 object-cover rounded-full"
            src={avatar}
            alt="profile"
          />
        </div>
        <button
          onClick={handleLogout}
          className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-full px-5 py-3 text-white flex gap-2 align-middle font-semibold"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
