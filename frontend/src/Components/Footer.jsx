import React from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";

function Footer() {
  return (
    <div className="mt-20  bg-zinc-800">
      <div className="lg:flex md:flex hidden p-12 justify-between lg:px-20 md:px-12">
        <div className="w-80 flex flex-col gap-y-5">
          <h1 className="text-white font-bold pl-4 border-l-8 md:text-xl border-[#1e3a8a] lg:text-2xl">ABOUT US</h1>
          <p className="text-white  lg:text-base md:text-xs">
            At logistics, we are dedicated to providing reliable and efficient
            logistics solutions. From freight transportation to supply chain
            management, our mission is to streamline global operations and
            deliver excellence in every mile.
          </p>
          <div className="flex text-white gap-2">
          <FaFacebookF />
          <FaTwitter />
          <IoLogoWhatsapp />
          </div>
        </div>
        <div>
          <h1 className="text-white font-bold pl-4 border-l-8 md:text-xl border-[#1e3a8a] lg:pb-3 text-2xl">QUICK LINKS</h1>
          <ul className="flex lg:text-base md:text-xs flex-col gap-y-3">
            <li>
              <NavLink className="flex gap-2 items-center text-white" to="/"><MdKeyboardArrowRight className="text-[#1e3a8a]" />HOME</NavLink>
            </li>
            <li>
              <NavLink className="flex gap-2 items-center text-white" to="/about"><MdKeyboardArrowRight className="text-[#1e3a8a]" />ABOUT</NavLink>
            </li>
            <li>
              <NavLink className="flex gap-2 items-center text-white" to="/services"><MdKeyboardArrowRight className="text-[#1e3a8a]" />WHAT WE DO?</NavLink>
            </li>
            <li>
              <NavLink className="flex gap-2 items-center text-white" to="/contact"><MdKeyboardArrowRight className="text-[#1e3a8a]" />GET IN TOUCH WITH US</NavLink>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-y-4 text-white">
          <h1 className="text-white font-bold pl-4 border-l-8 md:text-xl border-[#1e3a8a] lg:text-2xl">CONTACT US</h1>
          <p className=" lg:text-base md:text-xs">Adress: 17 Muritala way, Lagos Nigeria</p>
          <p className=" lg:text-base md:text-xs">Phone No: +2348134383290</p>
          <p className=" lg:text-base md:text-xs">Email: peters@gmail.com</p>
        </div>
      </div>
      <div className="lg:pl-20 pl-12 text-white p-5 bg-black">
        <p className="lg:text-base md:text-base text-[10px]">Copyrights@2024|Logistic Company| Developed by Peter James</p>
      </div>
    </div>
  );
}

export default Footer;
