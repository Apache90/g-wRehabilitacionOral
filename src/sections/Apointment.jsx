import React from "react";
import Layout from "../components/Layout";
import logoGris from "../assets/logoGris.png"

const Apointment = ({ id }) => {
  return (
    <div className="w-full space-y-6" id={id}>
      <Layout>
        <div className="w-full items-center gap-10 justify-between md:flex md:flex-nowrap flex-wrap">
          {/* Div con la imagen y los horarios */}
          <div className="md:w-1/2 w-full rounded-xl overflow-hidden relative">
            <img
              src="https://cdn.pixabay.com/photo/2021/11/21/06/16/female-6813278_640.png"
              alt=""
              className="w-full md:aspect-[3/4] aspect-2/3 object-cover object-center"
            />
            <div className="w-full h-full absolute top-0 left-0 p-4 flex items-center justify-center flex-col bg-gradient-to-tr from-neutral-900/40 to-neutral-900/40 z-30">
              <div className="w-full h-full bg-blue-300/10 border border-blue-200/50 backdrop-blur p-5 rounded-lg md:space-y-10 space-y-6 flex justify-center flex-col">
                <div className="space-y-2">
                  <h1 className="text-2xl text-neutral-100 font-semibold">
                    HORARIO DE ATENCIÓN
                  </h1>
                  <p className="text-base text-neutral-100 font-normal">
                    El centro solo trabaja los siguientes dias y horarios.
                  </p>
                </div>
                <div className="space-y-5">
                  <p className="text-base text-neutral-100 font-medium flex items-center justify-between">
                    Lunes - Viernes <span>8 - 13 | 17 - 20</span>
                  </p>
                  <div className="w-full h-[0.5px] bg-blue-200/50"></div>
                </div>
                <div className="space-y-5">
                  <p className="text-base text-neutral-100 font-medium flex items-center justify-between">
                    Sabados <span>8 AM - 1 PM</span>
                  </p>
                  <div className="w-full h-[0.5px] bg-blue-200/50"></div>
                </div>
                <div className="space-y-5">
                  <p className="text-base text-neutral-100 font-medium flex items-center justify-between">
                    Feriados <span>8 AM - 1 PM</span>
                  </p>
                  <div className="w-full h-[0.5px] bg-blue-200/50"></div>
                </div>
                <div className="space-y-5">
                  <p className="text-base text-neutral-100 font-medium flex items-center justify-between">
                    Domingos <span>CERRADO</span>
                  </p>
                  <div className="w-full h-[0.5px] bg-blue-200/50"></div>
                  <p className="text-sm text-neutral-100 font-normal">
                    Para ser atendido por urgencias dentales, es necesario
                    comunicarse previamente al número de teléfono que aparece en
                    la sección de contacto.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Div con el logo */}
          <div className="md:w-1/2 w-full space-y-6 rounded-xl md:p-8 p-4">
            <img src={logoGris} alt="" className="w-full" />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Apointment;