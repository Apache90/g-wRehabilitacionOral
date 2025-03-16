import React from "react";
import { FiChevronsRight } from "react-icons/fi";
import Layout from "../components/Layout";
import { Link } from "react-router";
import img5 from "../assets/img5.jpg";

const About = ({ id }) => {
  return (
    <div className="w-full" id={id}>
      <Layout>
        <div
          className="w-full flex items-center gap-16 justify-between flex-wrap"
          id="#about"
        >
          <div className="md:w-5/12 w-full space-y-9">
            <div className="space-y-5">
              <div className="space-y-2">
                <h2 className="text-2xl text-blue-500 font">Quienes somos?</h2>
                <h1 className="md:text-5xl text-4xl text-neutral-800 font-bold leading-[1.3]">
                  Somos el mejor servicio de la ciudad
                </h1>
              </div>
              <p className="text-base text-neutral-500 font-light line-clamp-5">
                En nuestro centro odontologico, combinamos tecnología avanzada
                con un equipo de profesionales altamente capacitados para
                ofrecer tratamientos personalizados y de calidad. Nos enfocamos
                en tu comodidad y bienestar, garantizando resultados
                excepcionales y una experiencia única. Tu sonrisa es nuestra
                prioridad.
              </p>
            </div>
          </div>

          <div className="md:w-1/2 w-full rounded-xl overflow-hidden relative">
            <img
              src={img5}
              alt=""
              className="w-full h-full object-cover object-center"
            />

            <div className="absolute top-0 left-0 w-full h-full flex items-center md:mt-80 mt-40 flex-col z-30">
              <div className="w-[90%] md:space-y-6 space-y-4">
                <Link
                  to="https://maps.app.goo.gl/jUK6muodRmFqU1dT6"
                  target="_blank"
                  className="w-full max-w-[230px] px-4 md:px-6 py-3 md:py-5 text-base md:text-lg text-neutral-50 font-medium rounded-xl bg-neutral-50/10 border-2 border-neutral-50/60 hover:bg-transparent hover:text-neutral-50 hover:border-neutral-50 flex items-center justify-between ease-in-out duration-300 backdrop-blur-sm"
>
                  Donde estamos?
                  <FiChevronsRight className="text-2xl md:text-3xl" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default About;