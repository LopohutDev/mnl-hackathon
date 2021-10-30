import React from "react";
import Logo from "../../assets/Logo.png";

const Navbar = () => {
  return (
    <div className="max-w-screen-2xl mx-auto h-32 flex justify-between items-center">
      <div>
        <img src={Logo} alt="Logo" />
      </div>
      <div className="flex font-semibold gap-5 items-center">
        <div>Home</div>
        <div>About Us</div>
        <div>Account</div>
      </div>
    </div>
  );
};

export default Navbar;
