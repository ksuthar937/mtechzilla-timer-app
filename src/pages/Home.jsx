import React from "react";
import Navbar from "../components/Navbar";
import Timer from "../components/Timer";

const Home = () => {
  const userProfile = JSON.parse(localStorage.getItem("userData"));

  return (
    <>
      <Navbar avatar={userProfile.photoURL} />
      <Timer />
    </>
  );
};

export default Home;
