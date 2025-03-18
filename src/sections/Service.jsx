import React from "react";
import Layout from "../components/Layout";
import ServiceCard from "../components/ServiceCard";

const Service = ({ id }) => {
  const serviceData = [
    {
      id: 1,
      title: "RADIOGRAFIA PANORAMICA",
      desc: "Imágenes de alta definición de la boca para un diagnóstico eficaz y personalizado.",
    },
    {
      id: 2,
      title: "FRENECTOMIA",
      desc: "Procedimiento rápido y seguro para mejorar la movilidad oral con resultados naturales.",
    },
    {
      id: 3,
      title: "BLANQUEAMIENTO DENTAL",
      desc: "Tratamiento para una sonrisa más brillante y blanca en pocas sesiones.",
    },
    {
      id: 4,
      title: "EXTRACCIONES",
      desc: "Extracciones dentales indoloras y eficientes, con resultados postoperatorios óptimos.",
    },
    {
      id: 5,
      title: "IMPLANTES DENTALES",
      desc: "Soluciones duraderas y estéticas para reemplazar dientes perdidos por materiales de alta calidad para una máxima funcionalidad.",
    },
    {
      id: 6,
      title: "ORTODONCIA",
      desc: "Tratamientos personalizados para alinear dientes y corregir mordidas con resultados visibles.",
    },
    {
      id: 7,
      title: "PLACAS INVISIBLES",
      desc: "Ortodoncia discreta y cómoda para enderezar dientes sin brackets tradicionales.",
    },
    {
      id: 8,
      title: "TRATAMIENTOS DE CONDUCTO",
      desc: "Ortodoncia discreta y cómoda para enderezar dientes sin brackets tradicionales.",
    },
  ];

  return (
    <Layout className="w-full space-y-6" >
      <div className="w-full flex items-center md:justify-between justify-center" id={id}>
        <h1 className="text-2xl text-neutral-700 font-serif">
          TRATAMIENTOS
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