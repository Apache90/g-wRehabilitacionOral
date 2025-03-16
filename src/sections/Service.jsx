import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router";
import ServiceCard from "../components/ServiceCard";

const Service = ({ id }) => {
  const serviceData = [
    {
      id: 1,
      title: "FRENECTOMIA",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero quod error reprehenderit iste laboriosam vel repudiandae eaque voluptas impedit numquam.",
    },
    {
      id: 2,
      title: "BLANQUEAMIENTO DENTAL",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero quod error reprehenderit iste laboriosam vel repudiandae eaque voluptas impedit numquam.",
    },
    {
      id: 3,
      title: "EXTRACCIONES",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero quod error reprehenderit iste laboriosam vel repudiandae eaque voluptas impedit numquam.",
    },
    {
      id: 4,
      title: "IMPLANTES DENTALES",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero quod error reprehenderit iste laboriosam vel repudiandae eaque voluptas impedit numquam.",
    },
    {
      id: 5,
      title: "ORTODONCIA",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero quod error reprehenderit iste laboriosam vel repudiandae eaque voluptas impedit numquam.",
    },
    {
      id: 6,
      title: "PLACAS INVISIBLES",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero quod error reprehenderit iste laboriosam vel repudiandae eaque voluptas impedit numquam.",
    },
    {
      id: 7,
      title: "TRATAMIENTOS DE CONDUCTO",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero quod error reprehenderit iste laboriosam vel repudiandae eaque voluptas impedit numquam.",
    },
  ];

  return (
    <Layout className="w-full space-y-6" >
      <div className="w-full flex items-center justify-between" id={id}>
        <h1 className="text-2xl text-neutral-700 font-semibold">
          Nuestros Servicios
        </h1>
      </div>

      <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-6">
        {serviceData.map((item) => (
          <ServiceCard key={item.id} {...item} />
        ))}
      </div>
    </Layout>
  );
};

export default Service;