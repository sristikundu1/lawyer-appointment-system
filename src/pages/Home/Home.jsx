import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import Lawyers from "../../components/Lawyers/Lawyers";
import { useLoaderData } from "react-router";
import Services from "../../components/Services/Services";
import homeBanner from "../../assets/banner.jpg";

const Home = () => {
  // load all data
  const allLawyers = useLoaderData();

  const title =
    " It avoids subjective claims or exaggeration that might raise red flags legally";
  const bannerSubtitle =
    " Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.";

  return (
    <div>
      <Banner
        title={title}
        subtitle={bannerSubtitle}
        image={homeBanner}
      ></Banner>
      <Lawyers allLawyers={allLawyers}></Lawyers>
      <Services></Services>
    </div>
  );
};

export default Home;
