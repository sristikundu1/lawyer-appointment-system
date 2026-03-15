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
  const newBookings = getBookings();

  if (newBookings.includes(id)) {
    toast.error("This Appointment is already taken!");
    return;
  } else {
    newBookings.push(id);
    const storeBookings = JSON.stringify(newBookings);
    localStorage.setItem("Bookings", storeBookings);
  }
};

export { addBookings, getBookings };
