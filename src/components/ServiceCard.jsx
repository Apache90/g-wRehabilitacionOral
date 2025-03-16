import React from "react";
import { Link } from "react-router";

const ServiceCard = ({ title, desc }) => {
  return (
    <Link
      to="/services"
      className="w-full flex flex-col space-y-4 p-6 border border-neutral-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 bg-white"
    >
      <h1 className="text-xl text-blue-600 font-semibold text-center">{title}</h1>
      <p className="text-sm text-neutral-600 font-normal text-center line-clamp-3">
        {desc}
      </p>
      <div className="flex justify-center">
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
          Más información
        </button>
      </div>
    </Link>
  );
};

export default ServiceCard;