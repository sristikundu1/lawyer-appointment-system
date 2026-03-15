import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { deleteAppointment, getBookings } from "../../utils/localstorage";
import toast, { Toaster } from "react-hot-toast";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const getPath = (x, y, width, height) =>
  `M${x},${y + height}
   C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
   C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
   Z`;

const colors = [
  "#0088fd",
  "#ffbb28",
  "#0088fd",
  "#00c49f",
  "#f9b92e",
  "#ff8042",
];

export function TriangleBar(props) {
  const { x, y, width, height, index } = props;

  if (x == null || y == null || width == null || height == null) {
    return null;
  }

  const fill = colors[index % colors.length];

  return (
    <path
      d={getPath(Number(x), Number(y), Number(width), Number(height))}
      stroke="none"
      fill={fill}
    />
  );
}
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

  const handleDelete = (id) => {
    deleteAppointment(id);

    toast("This Appointment has been canceled!", {
      icon: "👏",
    });

    const cancelAppointment = appointments.filter(
      (appointment) => appointment.id !== id,
    );
    setAppointments(cancelAppointment);
  };

  return (
    <div className="max-w-10/12 mx-auto mt-6">
      <Toaster></Toaster>
      {appointments.length === 0 ? (
        <>
          <div className="flex flex-col justify-center items-center gap-4 my-5">
            <h1 className="text-3xl font-extrabold text-center mb-4">
              You have not Booked any Appointment yet
            </h1>
            <p className="text-[rgba(20,20,20,0.7)] text-sm leading-6 text-center">
              Our platform connects you with verified, experienced Lawyers
              across various specialties — all at your convenience.
            </p>

            <Link to={"/"}>
              <button className="btn px-7 py-4 rounded-4xl bg-[#0088fd] text-white text-lg font-bold">
                Book An Appointment
              </button>
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="w-full h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={appointments}>
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="fee" shape={<TriangleBar />} />
              </BarChart>
            </ResponsiveContainer>
          </div>
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

                <button
                  onClick={() => handleDelete(appointment.id)}
                  className="btn px-7 py-4 rounded-4xl bg-white border-[rgba(255,0,0,1)] text-[rgba(255,0,0,1)] hover:bg-[rgba(255,0,0,1)] hover:text-white text-sm font-bold mt-5 w-full"
                >
                  Cancel Appointment
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MyBookings;
