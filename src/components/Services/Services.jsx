import React from "react";
import lawyer from "../../assets/lawyer-icon.png";
import order from "../../assets/order-icon.png";
import people from "../../assets/people-icon.png";
import star from "../../assets/star-icon.png";
import CountUpModule from "react-countup";

const CountUp = CountUpModule.default;

const Services = () => {
  return (
    <div className="max-w-10/12 mx-auto mt-20">
      <div className="w-9/12 mx-auto mb-5">
        <h2 className="text-4xl font-extrabold text-center">
          We Provide Best Law Services
        </h2>
        <p className="text-[rgba(15,15,15,0.8)] text-sm leading-6 text-center mt-4">
          Our platform connects you with verified, experienced Lawyers across
          various specialities — all at your convenience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-5">
        {/* card 1  */}
        <div className="card border border-[rgba(15,15,15,0.15)] rounded-xl bg-[rgba(15,15,15,0.05)] flex flex-col justify-start px-10 py-8 ">
          <figure className="flex justify-start">
            <img className="w-16 h-16" src={lawyer} alt="lawyer-icon" />
          </figure>
          <div>
            <h2 className="card-title text-2xl font-extrabold text-left my-3">
              <span>
                <CountUp
                  start={0}
                  end={199}
                  duration={4}
                  delay={0}
                  suffix="+"
                />
              </span>
            </h2>
            <p className="text-[rgba(15,15,15,0.6)] text-lg font-medium text-left">
              Total Lawyer
            </p>
          </div>
        </div>

        {/* card 2  */}
        <div className="card border border-[rgba(15,15,15,0.15)] rounded-xl bg-[rgba(15,15,15,0.05)] flex flex-col justify-start px-10 py-8 ">
          <figure className="flex justify-start">
            <img className="w-16 h-16" src={star} alt="star-icon" />
          </figure>
          <div>
            <h2 className="card-title text-2xl font-extrabold text-left my-3">
              <span>
                <CountUp
                  start={0}
                  end={467}
                  duration={4}
                  delay={0}
                  suffix="+"
                />
              </span>
            </h2>
            <p className="text-[rgba(15,15,15,0.6)] text-lg font-medium text-left">
              Total Reviews
            </p>
          </div>
        </div>

        {/* card 3  */}
        <div className="card border border-[rgba(15,15,15,0.15)] rounded-xl bg-[rgba(15,15,15,0.05)] flex flex-col justify-start px-10 py-8 ">
          <figure className="flex justify-start">
            <img className="w-16 h-16" src={order} alt="case-icon" />
          </figure>
          <div>
            <h2 className="card-title text-2xl font-extrabold text-left my-3">
              <span>
                <CountUp
                  start={0}
                  end={1900}
                  duration={4}
                  delay={0}
                  suffix="+"
                />
              </span>
            </h2>
            <p className="text-[rgba(15,15,15,0.6)] text-lg font-medium text-left">
              Cases Initiated
            </p>
          </div>
        </div>

        {/* card 4  */}
        <div className="card border border-[rgba(15,15,15,0.15)] rounded-xl bg-[rgba(15,15,15,0.05)] flex flex-col justify-start px-10 py-8 ">
          <figure className="flex justify-start">
            <img className="w-16 h-16" src={people} alt="people-icon" />
          </figure>
          <div>
            <h2 className="card-title text-2xl font-extrabold text-left my-3">
              <span>
                <CountUp
                  start={0}
                  end={300}
                  duration={4}
                  delay={0}
                  suffix="+"
                />
              </span>
            </h2>
            <p className="text-[rgba(15,15,15,0.6)] text-lg font-medium text-left">
              Total Stuffs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
