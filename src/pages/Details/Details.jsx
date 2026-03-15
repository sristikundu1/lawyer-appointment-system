import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { AiOutlineTrademark } from "react-icons/ai";
import { PiWarningCircle } from "react-icons/pi";
import { useLoaderData, useParams } from "react-router";
import { addBookings } from "../../utils/localstorage";

const Details = () => {
  const { id } = useParams();
  const lawyerId = parseInt(id);

  const allLawyers = useLoaderData();

  //   find the individual lawyer
  const singleLawyer = allLawyers.find((lawyer) => lawyer.id === lawyerId);

  const {
    name,
    image,
    licenseNo,
    availability,
    yearsOfExperience,
    expertise,
    details,
    fee,
    phone,
    email,
  } = singleLawyer;

  const handleBook = (id) => {
    toast.success("Your Booking is confirmed!");
    addBookings(id);
  };

  return (
    <div className="max-w-10/12 mx-auto mt-6">
      <Toaster></Toaster>
      <div className="bg-[rgba(15,15,15,0.05)] rounded-xl p-8 md:p-20 border border-[rgba(15,15,15,0.15)] mb-5">
        <h2 className="text-3xl font-extrabold text-center mb-4">
          Lawyer’s Profile Details
        </h2>
        <p className="text-[rgba(20,20,20,0.7)] text-sm leading-6 text-center">
          {details}
        </p>
      </div>
      {/* details show  */}
      <div>
        <div className="card card-side border border-[rgba(15,15,15,0.15)] rounded-[16px] bg-white p-6 mb-5">
          <figure>
            <img className="w-72 h-72 rounded-2xl" src={image} alt="Lawyer" />
          </figure>
          <div className="card-body">
            <button className="text-[rgba(23,106,229,1)] text-[12px] font-medium rounded-full bg-[rgba(23,106,229,0.1)] px-3 py-1 w-fit">
              {yearsOfExperience} Years Experience
            </button>

            <h2 className="card-title text-xl font-extrabold text-left">
              {name}
            </h2>

            <div className="flex items-center gap-6 my-2">
              <div>
                <p className="text-[rgba(15,15,15,0.6)] text-sm font-medium text-left">
                  {expertise} Expert
                </p>
              </div>

              <div>
                <p className="text-[rgba(15,15,15,0.6)] text-sm font-medium text-left flex items-center">
                  <AiOutlineTrademark className="text-lg mr-1" /> License No:
                  {licenseNo}
                </p>
              </div>
            </div>

            <div>
              <p className="text-[rgba(20,20,20,0.7)] text-sm font-bold text-left flex items-center">
                Availability:
                {availability.map((available, index) => (
                  <button
                    className="text-[rgba(255,160,0,1)] mx-3 text-[12px] font-medium rounded-full bg-[rgba(255,160,0,0.1)] px-3 py-1"
                    key={index}
                  >
                    {available}
                  </button>
                ))}
              </p>
            </div>

            <p className="text-[rgba(15,15,15,0.6)] text-sm font-bold text-left mt-2">
              Consultation Fee:
              <span className="text-[rgba(14,161,6,1)] ml-2">$ {fee}</span>
            </p>

            <p className="text-[rgba(15,15,15,0.6)] text-sm font-bold text-left mt-2">
              Phone
              <a
                href={`tel:${phone}`}
                className="text-[rgba(14,161,6,1)] ml-2 hover:underline"
              >
                {phone}
              </a>
            </p>

            <p className="text-[rgba(15,15,15,0.6)] text-sm font-bold text-left mt-2">
              Email:
              <a
                href={`mailto:${email}`}
                className="text-[rgba(14,161,6,1)] ml-2 hover:underline"
              >
                {email}
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* appointment button  */}
      <div>
        <div className=" border border-[rgba(15,15,15,0.15)] rounded-[16px] bg-white p-6 mb-5">
          <h2 className="text-xl font-extrabold text-center mb-4">
            Book an Appointment
          </h2>

          <div className="border-t border-dashed my-6 border-[rgba(20,20,20,0.1)]"></div>

          <div className="flex justify-between items-center">
            <p className="text-sm font-bold">Availability: </p>{" "}
            <button className="text-[rgba(9,152,47,1)] text-[12px] font-medium rounded-full bg-[rgba(9,152,47,0.1)] px-3 py-1">
              {availability && availability.length > 0
                ? "Lawyer Available Today"
                : "Lawyer Not Available Today"}
            </button>
          </div>
          <div className="border-t my-6 border-[rgba(20,20,20,0.1)]"></div>

          <div
            role="alert"
            className="alert rounded-4xl bg-[rgba(255,160,0,0.1)] md:w-4/5"
          >
            <PiWarningCircle className="text-xl text-[#FFA000]" />
            <span className="text-[#FFA000]">
              Due to high patient volume, we are currently accepting
              appointments for today only. We appreciate your understanding and
              cooperation.
            </span>
          </div>

          <button
            onClick={() => handleBook(id)}
            className="btn px-7 py-4 rounded-4xl bg-[#0EA106] text-white text-lg font-bold mt-5 w-full"
          >
            Book Appointment Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
