import React, { useState } from "react";
import Lawyer from "../Lawyer/Lawyer";

const Lawyers = ({ allLawyers }) => {
  const [showAll, setShowAll] = useState(false);
  // If showAll is true, show all lawyers; otherwise, show first 6
  const lawyerToShow = showAll ? allLawyers : allLawyers.slice(0, 6);

  return (
    <div className="max-w-10/12 mx-auto mt-6">
      <div className="w-9/12 mx-auto mb-5">
        <h2 className="text-4xl font-extrabold text-center">
          Our Best Lawyers
        </h2>
        <p className="text-[rgba(15,15,15,0.8)] text-sm leading-6 text-center">
          Our platform connects you with verified, experienced Lawyers across
          various specialties — all at your convenience. Whether it's a routine
          checkup or urgent consultation, book appointments in minutes and
          receive quality care you can trust.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-5">
        {lawyerToShow.map((lawyer) => (
          <Lawyer key={lawyer.id} lawyer={lawyer}></Lawyer>
        ))}
      </div>

      {/* Show button only if there are more than 6 lawyers and not showing all */}
      {!showAll && allLawyers.length > 6 && (
        <div className="flex justify-center my-6">
          <button
            onClick={() => setShowAll(true)}
            className="px-9 py-2 rounded-4xl bg-[#0EA106] text-white text-sm font-bold hover:bg-white hover:text-[#0EA106] hover:border-[#0EA106] hover:border transition"
          >
            Show All Lawyer
          </button>
        </div>
      )}
    </div>
  );
};

export default Lawyers;
