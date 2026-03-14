import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import Lawyers from "../../components/Lawyers/Lawyers";
import { useLoaderData } from "react-router";
import Services from "../../components/Services/Services";

const Home = () => {
  // load all data
  const allLawyers = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <Lawyers allLawyers={allLawyers}></Lawyers>
      <Services></Services>
    </div>
  );
};

export default Home;
