import React from "react";
import { IoChatbubble } from "react-icons/io5";

const DoctorCard = ({ img, name, position }) => {
  return (
    <div className="w-full rounded-xl overflow-hidden cursor-pointer">
      <div className="w-full aspect-square relative">
        <img
          src={img} // Aquí se usa la ruta de la imagen directamente
          alt="doctor image"
          className="w-full aspect-square object-cover object-center rounded-xl"
        />
      </div>

      <div className="space-y-1 px-2 py-3 text-center">
        <h1 className="text-xl text-neutral-700 font-semibold">{name}</h1>
        <p className="text-base text-neutral-500 font-normal">{position}</p>
      </div>
    </div>
  );
};

export default DoctorCard;