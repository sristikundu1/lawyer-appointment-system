import React from "react";
import { Link } from "react-router";

const NotFoundLawyer = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center my-40 text-center">
        <h2 className="text-3xl font-bold text-red-500">No Lawyer Found</h2>
        <p className="text-gray-500 mt-2">
          The lawyer you are looking for does not exist.
        </p>

        <Link to="/" className="mt-6">
          <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600">
            Show All Lawyers
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundLawyer;
