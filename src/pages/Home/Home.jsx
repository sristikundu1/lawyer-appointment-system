import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import Lawyers from "../../components/Lawyers/Lawyers";
import { useLoaderData } from "react-router";

const Home = () => {
  // load all data
  const allLawyers = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <Lawyers allLawyers={allLawyers}></Lawyers>
    </div>
  );
};

export default Home;
