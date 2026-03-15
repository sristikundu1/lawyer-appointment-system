import React from "react";
import { AiOutlineTrademark } from "react-icons/ai";
import { Link } from "react-router";

const Lawyer = ({ lawyer }) => {
  const {
    id,
    name,
    image,
    licenseNo,
    availability,
    yearsOfExperience,
    expertise,
  } = lawyer;
  return (
    <div>
      <div className="card card-side border border-[rgba(15,15,15,0.15)] rounded-[16px] bg-white p-6">
        <figure>
          <img className="w-40 h-40 rounded-2xl" src={image} alt="Lawyer" />
        </figure>
        <div className="card-body">
          <div className="flex items-center gap-2">
            <button className="text-[rgba(9,152,47,1)] text-[12px] font-medium rounded-full bg-[rgba(9,152,47,0.1)] px-3 py-1">
              {availability && availability.length > 0
                ? "Available"
                : "Not Available"}
            </button>
            <button className="text-[rgba(23,106,229,1)] text-[12px] font-medium rounded-full bg-[rgba(23,106,229,0.1)] px-3 py-1">
              {yearsOfExperience} Years Experience
            </button>
          </div>
          <h2 className="card-title text-xl font-extrabold text-left">
            {name}
          </h2>
          <p className="text-[rgba(15,15,15,0.6)] text-sm font-medium text-left">
            {expertise} Expert
          </p>
          <p className="text-[rgba(15,15,15,0.6)] text-sm font-medium text-left flex items-center">
            <AiOutlineTrademark className="text-lg mr-1" /> License No:
            {licenseNo}
          </p>
          <div className="card-actions justify-baseline">
            <Link to={`/lawyerDetails/${id}`} className="w-full block">
              <button className="btn  w-full text-[rgba(23,106,229,1)] text-sm font-bold border border-[rgba(23,106,229,0.2)] rounded-full px-3 py-2 hover:text-white hover:bg-[rgba(23,106,229,1)]">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lawyer;
