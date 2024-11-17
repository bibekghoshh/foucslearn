import React from "react";
import logo from "../assests/logo.png";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-12 sticky top-0 bg-white h-20">
      <div>
        <img src={logo} className="w-36" alt="Foucs Learn" />
      </div>
      <div className="flex items-center gap-10">
        <div>About Us</div>
        <div>My Learning</div>
        <Link to="/login">
          {" "}
          <button className="bg-blue-700 text-white px-4 py-[6px] rounded-lg font-medium">
            Login
          </button>{" "}
        </Link>

        <a
          className=" text-black text-3xl"
          href="https://github.com/bibekghoshh"
          target="black"
        >
          <BsGithub />
        </a>
      </div>
    </div>
  );
};

export default Header;
