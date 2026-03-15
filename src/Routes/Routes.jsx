import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Details from "../pages/Details/Details";
import MyBookings from "../components/MyBookings/MyBookings";
import Blogs from "../components/Blogs/Blogs";
import Contact from "../components/Contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch("LawyerData.json"),
        Component: Home,
      },
      {
        path: "/lawyerDetails/:id",
        loader: () => fetch("/LawyerData.json"),
        Component: Details,
      },
      {
        path: "/my-bookings",
        loader: () => fetch("/LawyerData.json"),
        Component: MyBookings,
      },
      {
        path: "/blogs",
        loader: () => fetch("/Blogs.json"),
        Component: Blogs,
      },
      {
        path: "/contact",
        Component: Contact,
      },
    ],
  },
]);
