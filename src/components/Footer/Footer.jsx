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
        <a className="text-[rgba(255,255,255,0.7)]">Home</a>
      </Link>
      <a className="text-[rgba(255,255,255,0.7)]">My-Bookings</a>
      <a className="text-[rgba(255,255,255,0.7)]">Blogs</a>
      <a className="text-[rgba(255,255,255,0.7)]">Contact Us</a>
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

        <nav className="grid grid-flow-col gap-4">{Links}</nav>

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
