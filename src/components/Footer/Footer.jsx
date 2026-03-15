import React from "react";
import logo from "../../assets/footer-logo.png";
import { Link } from "react-router";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { IoLogoLinkedin } from "react-icons/io";

const Footer = () => {
  const Links = (
    <>
      <Link to={"/"}>
        <li className="mr-4 text-white font-medium">Home</li>
      </Link>

      <Link to={"/my-bookings"}>
        <li className="mr-4 text-white font-medium">My-Bookings</li>
      </Link>

      <Link to={"/blogs"}>
        <li className="mr-4 text-white font-medium">Blogs</li>
      </Link>

      <Link to={"/contact"}>
        <li className="mr-4 text-white font-medium">Contact Us</li>
      </Link>
    </>
  );
  return (
    <div>
      <footer className="footer footer-horizontal footer-center bg-black text-primary-content p-10">
        <aside>
          <div className="flex justify-center items-center gap-2">
            <img className="w-8 h-8" src={logo} alt="logo" />
            <h2 className="text-2xl font-bold">Law.BD</h2>
          </div>
        </aside>

        <nav className="grid grid-flow-col gap-4">
          <ul className="grid grid-flow-col gap-4 list-none">{Links}</ul>
        </nav>

        <nav>
          <div className="grid grid-flow-col gap-4">
            <a>
              <FaFacebook className="text-[#1877F2] text-2xl" />
            </a>
            <a>
              <RiTwitterXFill className="text-[#ffffff] text-2xl" />
            </a>
            <a>
              <IoLogoLinkedin className="text-[#2489BE] text-2xl" />
            </a>
            <a>
              <FaYoutube className="text-[#B71C1C] text-2xl" />
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
