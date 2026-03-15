// get data from localstorage

import toast, { Toaster } from "react-hot-toast";

<Toaster></Toaster>;
const getBookings = () => {
  const getBookingIds = localStorage.getItem("Bookings");

  if (getBookingIds) {
    const convertedIds = JSON.parse(getBookingIds);
    return convertedIds;
  } else {
    return [];
  }
};

// store data in localstorage

const addBookings = (id) => {
  const newBookings = getBookings("Bookings");

  if (newBookings.includes(id)) {
    toast.error("This Appointment is already taken!");
    return;
  } else {
    newBookings.push(id);
    const storeBookings = JSON.stringify(newBookings);
    localStorage.setItem("Bookings", storeBookings);
  }
};

// delete data from localstorage

const deleteAppointment = (id) => {
  const allAppointment = getBookings("Bookings");
  const updatedAppointment = allAppointment.filter(
    (appointment) => Number(appointment) !== Number(id),
  );
  localStorage.setItem("Bookings", JSON.stringify(updatedAppointment));
};

export { addBookings, getBookings, deleteAppointment };
