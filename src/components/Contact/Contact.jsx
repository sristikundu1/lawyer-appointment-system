import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Contact Us!</h1>
            <p className="py-6">
              We’d love to hear from you! Whether you have questions, feedback,
              or need assistance, our team is here to help.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" />
                <label className="label">Name</label>
                <input type="text" className="input" placeholder="Name" />
                <label className="label">Phone Number</label>
                <input type="number" className="input" placeholder="Phone" />

                <button className="btn px-7 py-4 rounded-4xl bg-[#0EA106] text-white text-lg font-bold">
                  Contact Now
                </button>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
