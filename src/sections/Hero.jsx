import React from "react";
import { FiChevronsRight } from "react-icons/fi";
import Layout from "../components/Layout";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../assets/img1.png"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";



// import required modules
import { Navigation } from "swiper/modules";

const Hero = ({ id }) => {
  return (
    <div className="w-full h-[calc(100vh-8ch)] flex flex-col" id={id}>
      <div className="flex-1">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <div className="w-full relative h-[calc(100vh-8ch)]">
              <div className="w-full h-full">
              <img
                  src={img2}
                  alt=""
                  className="h-full w-full object-cover object-right md:hidden"
                />
                <img
                  src={img2}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-0 left-0 w-full h-full flex items-start justify-center flex-col  z-30">
                <Layout>
                  <div className="bg-blue-800/40 border border-blue-200/50 backdrop-blur px-8 py-10 rounded-xl md:w-2/5 w-full space-y-7">
                    <div className="space-y-4">
                      <h1 className="md:text-4xl text-4xl text-blue-50 font-bold leading-[1.3]">
                        Hola! Soy el Dr. Pablo Wyss
                      </h1>
                      <p className="text-base text-neutral-300 font-normal line-clamp-7">
                      Mi objetivo es ofrecerte tratamientos personalizados y de alta calidad, combinando técnicas avanzadas con un trato cercano y profesional. Estoy aquí para ayudarte a recuperar la salud y la estética de tu sonrisa. ¡No dudes en contactarme para agendar tu consulta!
                      </p>
                    </div>

                    <a href="#servicios" className="w-fit px-8 py-3 text-base text-neutral-700 font-medium rounded-xl bg-neutral-50 borde-2 border-neutral-500 hover:bg-neutral-700 hover:text-neutral-50 hover:border-neutral-50 flex items-center gap-x-2 ease-in-out duration-300">
                      Nuestros tratamientos
                      <FiChevronsRight className="text-xl pt-0.5" />
                    </a>
                  </div>
                </Layout>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full relative h-[calc(100vh-8ch)]">
              <div className="w-full h-full">
              <img
                  src={img3}
                  alt=""
                  className="h-full w-full object-cover object-right md:hidden"
                />
                <img
                  src={img3}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute top-0 left-0 w-full h-full flex items-start justify-center flex-col  z-30">
                <Layout>
                  <div className="bg-blue-800/40 border border-blue-200/50 backdrop-blur px-8 py-10 rounded-xl md:w-2/5 w-full space-y-7">
                    <div className="space-y-4">
                      <h1 className="md:text-4xl text-3xl text-blue-50 font-bold leading-[1.3]">
                        Contamos con tecnologia de punta
                      </h1>
                      <p className="text-base text-neutral-300 font-normal line-clamp-7">
                      Contamos con equipos de diagnóstico digital, scanners intraorales 3D, y sistemas de planificación digital para garantizar precisión y resultados óptimos en cada procedimiento. Nuestro compromiso es brindarte una experiencia cómoda, segura y eficiente.
                      </p>
                    </div>

                    <a href="#servicios" className="w-fit px-8 py-3 text-base text-neutral-700 font-medium rounded-xl bg-neutral-50 borde-2 border-neutral-500 hover:bg-transparent hover:text-neutral-50 hover:border-neutral-50 flex items-center gap-x-2 ease-in-out duration-300">
                    Nuestros tratamientos
                      <FiChevronsRight className="text-xl pt-0.5" />
                    </a>
                  </div>
                </Layout>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full relative h-[calc(100vh-8ch)]">
              <div className="w-full h-full">
              <img
                  src={img1}
                  alt=""
                  className="h-full w-full object-cover object-right md:hidden"
                />
                <img
                  src={img1}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute top-0 left-0 w-full h-full flex items-start justify-center flex-col z-30">
                <Layout>
                  <div className="bg-blue-800/40 border border-blue-200/50 backdrop-blur px-8 py-10 rounded-xl md:w-2/5 w-full space-y-7">
                    <div className="space-y-4">
                      <h1 className="md:text-4xl text-2xl text-blue-50 font-bold leading-[1.3]">
                      Tradición y excelencia en cuidado dental
                      </h1>
                      <p className="text-base text-neutral-300 font-normal line-clamp-7">
                      Nuestro centro odontológico es un legado de dedicación y profesionalismo, respaldado por la experiencia de una tradición familiar única. hemos unido la sabiduría de años de práctica con las técnicas más modernas para ofrecerte un servicio integral y personalizado.
                      </p>
                    </div>

                    <a href="#servicios" className="w-fit px-8 py-3 text-base text-neutral-700 font-medium rounded-xl bg-neutral-50 borde-2 border-neutral-500 hover:bg-transparent hover:text-neutral-50 hover:border-neutral-50 flex items-center gap-x-2 ease-in-out duration-300">
                      Nuestros tratamientos
                      <FiChevronsRight className="text-xl pt-0.5" />
                    </a>
                  </div>
                </Layout>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
