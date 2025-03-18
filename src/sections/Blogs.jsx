import React from "react";
import BlogCard from "../components/BlogCard";
import Layout from '../components/Layout';

const Blogs = ({ id }) => {
  const blogData = [
    {
      id: 1,
      img: "https://dgoavhl867cjd.cloudfront.net/0001/21d36a3f/resize-crop(w=2400;h=1350):sharpen(level=0):output(format=webp)/up/dt/2025/02/0-Imagen-inicial-Pesaressi-Cabeza.jpg",
      title: "Infiltración de diente hipomineralizado reconstruido con resina compuesta",
      desc: "La hipomineralización del esmalte, que incluye condiciones como la hipomineralización molar-incisiva (HMI), la amelogénesis imperfecta y la fluorosis dental, se caracteriza por defectos en la mineralización del esmalte (segunda fase de la amelogénesis).",
      link: "https://la.dental-tribune.com/news/infiltracion-de-diente-hipomineralizado-reconstruido-con-resina-compuesta/" // Enlace externo
    },
    {
      id: 2,
      img: "https://dgoavhl867cjd.cloudfront.net/0001/89504755/resize-crop(w=1541;h=867):sharpen(level=0):output(format=webp)/up/dt/2025/03/OrthoApnea-NOA.jpg",
      title: "Un estudio confirma la eficacia de los DAM en la apnea obstructiva del sueño",
      desc: "Una investigación liderada por un equipo internacional de especialistas en dolor orofacial y trastornos del sueño ha evaluado la efectividad, la adherencia al tratamiento y los posibles efectos secundarios de un dispositivo en comparación con otros aparatos de avance mandibular (DAM).",
      link: "https://la.dental-tribune.com/news/un-estudio-confirma-la-eficacia-de-los-dam-en-la-apnea-obstructiva-del-sueno/" // Enlace externo
    },
    {
      id: 3,
      img: "https://dgoavhl867cjd.cloudfront.net/0001/af6b111c/resize-crop(w=2400;h=1350):sharpen(level=0):output(format=webp)/up/dt/2025/02/Medical-Orthodontics2.jpg",
      title: "El enorme impacto de la Ortodoncia Médica",
      desc: "No es casualidad que los pioneros de la Ortodoncia Americana y de la Escuela Funcionalista Europea fueran médicos. Siempre he mantenido que nuestra especialidad, una de las más antiguas de las ciencias de la salud, sufre de un gran desconocimiento, no solo del público general sino también de los propios dentistas.",
      link: "https://la.dental-tribune.com/news/el-impacto-de-la-ortodoncia-medica-en-la-salud/" // Enlace externo
    },
  ];

  return (
    <Layout className="w-full space-y-6">
      <div className="w-full flex items-center md:justify-between justify-center" id={id}>
        <h1 className="text-2xl text-neutral-700 font-serif">
          NOTICIAS
        </h1>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-10" id={id}>
        {blogData.map((blog) => (
          <BlogCard key={blog.id} {...blog} />
        ))}
      </div>
    </Layout>
  );
};

export default Blogs;