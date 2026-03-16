import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-8/12 mx-auto mt-5">
        <img
          src="https://static.vecteezy.com/system/resources/previews/010/886/263/non_2x/404-error-page-free-download-free-vector.jpg"
          alt="error"
        />

        <Link to={"/"} className="flex justify-center">
          <button className="btn md:px-7 md:py-4 rounded-4xl bg-[#0EA106] text-white text-lg font-bold my-5 ">
            Go Back Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
