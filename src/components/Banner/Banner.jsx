import React from "react";
// import bannerImg from "../../assets/banner.jpg";
const Banner = ({ title, subtitle, image }) => {
  return (
    <div className="max-w-10/12 mx-auto my-7">
      <div
        className="w-full h-screen bg-cover bg-center rounded-3xl flex flex-col items-center justify-center text-center px-4 md:px-24 "
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(15, 15, 15, 0) -27.727%, rgba(15, 15, 15, 0.8) 100%), url(${image})`,
        }}
      >
        <h1 className="text-white text-3xl md:text-5xl font-extrabold md:leading-[60px]">
          {title}
        </h1>

        <p className="text-white text-[16px] font-medium leading-[26px] mt-4 max-w-2xl">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default Banner;
