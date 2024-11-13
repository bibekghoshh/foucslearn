import React from "react";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { SiLeetcode, SiGmail } from "react-icons/si";
import { SlCallOut } from "react-icons/sl";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 h-80 bg-slate-200 dark:bg-slate-900 dark:text-white">
      <p className="text-4xl font-medium text-newblue dark:text-violet-500">Get in touch</p>
      <div className="w-[80%] h-[3px] bg-bgcolor dark:bg-violet-500"></div>
      <div className="flex flex-col gap-2 lg:gap-12 lg:flex-row">
        <a className="flex items-center gap-2" href="tel:+917478828907">
          <SlCallOut className="text-2xl" />
          <p className="font-medium text-slate-600 dark:text-white">+917478828907</p>
        </a>
        <a
          className="flex items-center gap-2"
          href="mailto:bibek7478@gmail.com"
        >
          <SiGmail className="text-2xl" />
          <p className="font-medium text-slate-600 dark:text-white">bibek7478@gmail.com</p>
        </a>
      </div>
      <div className="flex flex-wrap gap-6 mt-2 text-4xl">
        <a
          className="transition duration-300 hover:scale-110 hover:text-sky-900"
          href="https://github.com/bibekghoshh"
          target="black"
        >
          <BsGithub />
        </a>
        <a
          className="transition duration-300 hover:text-blue-600 hover:scale-110"
          href="https://www.linkedin.com/in/bibekghoshh/"
          target="black"
        >
          <BsLinkedin />
        </a>
        <a
          className="transition duration-300 hover:text-sky-500 hover:scale-110"
          href="https://twitter.com/bibekghoshh"
          target="black"
        >
          <BsTwitter />
        </a>
        <a
          className="transition duration-300 hover:text-gray-500 hover:scale-110"
          href="https://leetcode.com/bibekghosh/"
          target="black"
        >
          <SiLeetcode />
        </a>
        <a
          className="transition duration-300 hover:text-red-500 hover:scale-110"
          href="https://www.instagram.com/bibekghoshh/"
          target="black"
        >
          <BsInstagram />
        </a>
      </div>
    </div>
  );
};

export default Footer;
