import React from "react";
import logo from "../assests/logo.png";

const Header = () => {
  return (
    <div className="flex justify-between items-center mx-12">
      <div >
        <img src={logo} className="w-32" alt="Foucs Learn" />
      </div>
      <div className="flex items-center gap-10">
        <div>About Us</div>
        <div>My Learning</div>
        <button className="bg-blue-700 text-white px-4 py-[6px] rounded-lg font-medium">Login</button>
      </div>
    </div>
  );
};

export default Header;
