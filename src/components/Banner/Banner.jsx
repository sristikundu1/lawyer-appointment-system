import React from "react";
import bannerImg from "../../assets/banner.jpg";
const Banner = () => {
  return (
    <div className="max-w-11/12 mx-auto my-7">
      <div
        className="w-full h-screen bg-cover bg-center rounded-3xl flex flex-col items-center justify-center text-center px-24 "
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(15, 15, 15, 0) -27.727%, rgba(15, 15, 15, 0.8) 100%), url(${bannerImg})`,
        }}
      >
        <h1 className="text-white text-5xl font-extrabold leading-[60px]">
          It avoids subjective claims or exaggeration that might raise red flags
          legally
        </h1>

        <p className="text-white text-[16px] font-medium leading-[26px] mt-4 max-w-2xl">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience.
        </p>
      </div>
    </div>
  );
};

export default Banner;
