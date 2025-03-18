import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router";
import { FiChevronsRight } from "react-icons/fi";
import DoctorCard from "../components/DoctorCard";
import img8 from "../assets/img8.jpg"; // Importa las imágenes correctamente
import img9 from "../assets/img9.jpg";

const Doctor = ({ id }) => {
  const doctorData = [
    {
      id: 1,
      img: img8, // Pasa la ruta de la imagen directamente
      name: "Dra. Gimenez Laura Irene",
      position: "Endodoncia | Especialista en odontologia legal",
    },
    {
      id: 2,
      img: img9, // Pasa la ruta de la imagen directamente
      name: "Dr. Wyss Pablo Matias",
      position: "Cirugia | Implantes | Rehabilitación protésica y estética",
    },
  ];

  return (
    <Layout className="w-full space-y-6" >
      <div className="w-full flex items-center md:justify-between justify-center" id={id}>
        <h1 className="text-2xl text-neutral-700 font-serif">
          NUESTROS ESPECIALISTAS
        </h1>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-12">
        {doctorData.map((item) => (
          <DoctorCard key={item.id} {...item} />
        ))}
      </div>
    </Layout>
  );
};

export default Doctor;