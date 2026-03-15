import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getBookings } from "../../utils/localstorage";

const MyBookings = () => {
  const [appointments, setAppointments] = useState([]);
  const allLawyers = useLoaderData();

  useEffect(() => {
    const AppointmentIds = getBookings("Bookings").map((id) => Number(id));

    const lawyerAppointments = allLawyers.filter((lawyer) =>
      AppointmentIds.includes(lawyer.id),
    );
    setAppointments(lawyerAppointments);
  }, [allLawyers]);

  //   const {
  //     name,
  //     image,
  //     licenseNo,
  //     availability,
  //     yearsOfExperience,
  //     expertise,
  //     details,
  //     fee,
  //     phone,
  //     email,
  //   } = appointments;

  return (
    <div className="max-w-10/12 mx-auto mt-6">
      <h2 className="text-3xl font-extrabold text-center mb-4">
        My Today Appointments
      </h2>
      <p className="text-[rgba(20,20,20,0.7)] text-sm leading-6 text-center">
        Our platform connects you with verified, experienced Lawyers across
        various specialties — all at your convenience.
      </p>

      <div className="my-6">
        {appointments.map((appointment) => (
          <div
            className=" border border-[rgba(15,15,15,0.15)] rounded-[16px] bg-white p-6 mb-5"
            key={appointment.id}
          >
            <div className="flex justify-between items-center">
              <div>
                <h2 className="card-title text-lg font-extrabold text-left mb-2">
                  {appointment.name}
                </h2>
                <p className="text-[rgba(15,15,15,0.6)] text-sm font-medium text-left">
                  {appointment.expertise} Expert
                </p>
              </div>

              <div>
                <p className="text-[rgba(15,15,15,0.6)] text-sm font-medium text-left">
                  Appointment Fee :
                  <span className="text-[rgba(14,161,6,1)] ml-2">
                    $ {appointment.fee}
                  </span>
                </p>
              </div>
            </div>

            <button className="btn px-7 py-4 rounded-4xl bg-white border-[rgba(255,0,0,1)] text-[rgba(255,0,0,1)] hover:bg-[rgba(255,0,0,1)] hover:text-white text-sm font-bold mt-5 w-full">
              Cancel Appointment
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
