import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../../assets/fi_8146906.png";

const Navbar = () => {
  const Links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `mr-4 font-medium text-[rgba(15,15,15,0.7)] ${isActive ? "border-b-2 border-blue-500" : ""}`
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/my-bookings"
        className={({ isActive }) =>
          `mr-4 font-medium text-[rgba(15,15,15,0.7)] ${isActive ? "border-b-2 border-blue-500" : ""}`
        }
      >
        My-Bookings
      </NavLink>

      <NavLink
        to="/blogs"
        className={({ isActive }) =>
          `mr-4 font-medium text-[rgba(15,15,15,0.7)] ${isActive ? "border-b-2 border-blue-500" : ""}`
        }
      >
        Blogs
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `mr-4 font-medium text-[rgba(15,15,15,0.7)] ${isActive ? "border-b-2 border-blue-500" : ""}`
        }
      >
        Contact Us
      </NavLink>
    </>
  );
  return (
    <div className="md:max-w-10/12 mx-auto">
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {Links}
            </ul>
          </div>
          <div className="flex justify-center items-center gap-2">
            <img className="w-8 h-8" src={logo} alt="logo" />
            <h2 className="text-2xl font-bold">Law.BD</h2>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{Links}</ul>
        </div>
        <div className="navbar-end">
          <Link to={"/contact"}>
            <button className="btn md:px-7 md:py-4 rounded-4xl bg-[#0EA106] text-white text-lg font-bold">
              Contact Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
