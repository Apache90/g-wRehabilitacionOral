import React from "react";

const ServiceCard = ({ title, desc }) => {
  return (
    <div
      className="w-full flex flex-col space-y-4 p-6 border border-neutral-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 bg-white"
    >
      <h1 className="text-xl text-blue-600 font-semibold text-center">{title}</h1>
      <p className="text-sm text-neutral-600 font-normal text-center line-clamp-3">
        {desc}
      </p>
      <div className="flex justify-center">
        <a href="https://wa.me/3865547356?text=Hola!%20me%20gustaría%20agendar%20una%20cita%20" target="_blank" className="mt-4 px-4 py-2 text-white rounded-lg bg-blue-700 hover:bg-blue-900 hover:text-gray-300 ease-in-out duration-300">
          Más información
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;