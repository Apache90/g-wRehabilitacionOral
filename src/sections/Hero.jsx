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
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute top-0 left-0 w-full h-full flex items-start justify-center flex-col  z-30">
                <Layout>
                  <div className="bg-blue-800/40 border border-blue-200/50 backdrop-blur px-8 py-10 rounded-xl md:w-2/5 w-full space-y-7">
                    <div className="space-y-4">
                      <h1 className="md:text-4xl text-3xl text-blue-50 font-bold leading-[1.3]">
                        Hola soy Pablo
                      </h1>
                      <p className="text-base text-neutral-300 font-normal line-clamp-3">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint et tenetur vitae omnis odit ratione hic illo, distinctio libero animi!
                      </p>
                    </div>

                    <button className="w-fit px-8 py-3 text-base text-neutral-700 font-medium rounded-xl bg-neutral-50 borde-2 border-neutral-500 hover:bg-neutral-700 hover:text-neutral-50 hover:border-neutral-50 flex items-center gap-x-2 ease-in-out duration-300">
                      Nuestros servicios
                      <FiChevronsRight className="text-xl pt-0.5" />
                    </button>
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
                      <p className="text-base text-neutral-300 font-normal line-clamp-3">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint et tenetur vitae omnis odit ratione hic illo, distinctio libero animi!
                      </p>
                    </div>

                    <button className="w-fit px-8 py-3 text-base text-neutral-700 font-medium rounded-xl bg-neutral-50 borde-2 border-neutral-500 hover:bg-transparent hover:text-neutral-50 hover:border-neutral-50 flex items-center gap-x-2 ease-in-out duration-300">
                      Nuestros servicios
                      <FiChevronsRight className="text-xl pt-0.5" />
                    </button>
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
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute top-0 left-0 w-full h-full flex items-start justify-center flex-col z-30">
                <Layout>
                  <div className="bg-blue-800/40 border border-blue-200/50 backdrop-blur px-8 py-10 rounded-xl md:w-2/5 w-full space-y-7">
                    <div className="space-y-4">
                      <h1 className="md:text-4xl text-3xl text-blue-50 font-bold leading-[1.3]">
                        Una tradicion de profesionales
                      </h1>
                      <p className="text-base text-neutral-300 font-normal line-clamp-3">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint et tenetur vitae omnis odit ratione hic illo, distinctio libero animi!
                      </p>
                    </div>

                    <button className="w-fit px-8 py-3 text-base text-neutral-700 font-medium rounded-xl bg-neutral-50 borde-2 border-neutral-500 hover:bg-transparent hover:text-neutral-50 hover:border-neutral-50 flex items-center gap-x-2 ease-in-out duration-300">
                      Nuestros servicios
                      <FiChevronsRight className="text-xl pt-0.5" />
                    </button>
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
