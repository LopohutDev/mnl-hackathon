import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../commons/Navbar";
import Professor from "../../assets/Professor.jpg";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <div
        className="relative h-96  flex items-center justify-end bg-center bg-cover"
        style={{ backgroundImage: `url(${Professor})` }}
      >
        <h1 className=" text-lightgreen-500 text-8xl mr-32">TeachGURU</h1>
        <div className="absolute bg-gray-50 shadow-2xl -bottom-32 text-white text-center left-28 p-10 gap-10 rounded-xl text-5xl flex flex-col">
          <Link to="/login" className="bg-lightgreen-500 rounded-xl py-3 px-14">
            LOG IN
          </Link>
          <Link to="/register" className="bg-gray-400 rounded-xl py-3 px-14">
            SIGN UP
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
