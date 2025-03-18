import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router";
import logoGris from "../assets/logoGris.png";
import logoGris2 from "../assets/logoGris2.png";
import { SiGooglemaps } from "react-icons/si";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import {
  FaEnvelope,
  FaInstagram,
  FaFacebookSquare,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full py-7 bg-neutral-200/50">
      <Layout className="w-full space-y-10">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
          {/* Bloque izquierdo: Logo y texto */}
          <div className="space-y-5">
            <Link to="" className="flex items-center justify-center">
              <img src={logoGris} alt="Logo G & W" className="h-50" />{" "}
              {/* Ajusta el tamaño según sea necesario */}
            </Link>
          </div>

          {/* Bloque central: Redes y contacto */}
          <div className="space-y-4">
            <h1 className="text-xl text-neutral-700 font-semibold">
              Contactanos
            </h1>

            <div className="flex items-center gap-5 w-full">
              <Link
                to="https://www.instagram.com/gyw_rehabilitacion/"
                target="_blank"
                className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center hover:bg-blue-500/20 ease-in-out duration-300"
              >
                <FaInstagram className="text-blue-500 text-lg" />
              </Link>

              <Link
                to="https://www.facebook.com/GyW.centro.de.rehabilitacion"
                target="_blank"
                className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center hover:bg-blue-500/20 ease-in-out duration-300"
              >
                <FaFacebookSquare className="text-blue-500 text-lg" />
              </Link>

              <Link
                to="https://wa.me/3865547356?text=Hola!%20me%20gustaría%20agendar%20una%20cita%20"
                target="_blank"
                className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center hover:bg-blue-500/20 ease-in-out duration-300"
              >
                <FaWhatsapp className="text-blue-500 text-lg" />
              </Link>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-x-3">
                <SiGooglemaps className="text-base text-neutral-500 font-normal" />
                Córdoba N°67|Concepción|Tucumán.
              </div>
              <div className="flex items-center gap-x-3">
                <TfiHeadphoneAlt className="text-base text-neutral-500 font-normal" />
                3865-421005
              </div>
              <div className="flex items-center gap-x-3">
                <FaEnvelope className="text-base text-neutral-500 font-normal" />
                mail@gmail.com
              </div>
            </div>
          </div>

          {/* Bloque derecho: Iframe con la ubicación */}
          <div className="w-full h-64 md:h-auto">
            <h1 className="text-xl text-neutral-700 font-semibold ">
              Aquí nos podes encontrar
            </h1>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.9267054474158!2d-65.60169102460765!3d-27.345159511411264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9423cfce4dae4589%3A0x82ec9bba4a545ccf!2sChicligasta%2C%20C%C3%B3rdoba%2067%2C%20T4146%20Concepci%C3%B3n%2C%20Tucum%C3%A1n!5e1!3m2!1ses!2sar!4v1741911292357!5m2!1ses!2sar"
              width="100%"
              height="100%"
              className="border-5"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="w-full h-[1px] bg-neutral-300"></div>

        <div className="w-full flex items-center justify-between flex-wrap gap-2">
          <p className="text-sm text-neutral-500/80 font-normal">&copy; 2025</p>
          <p className="text-sm text-neutral-500/80 font-normal">
            Desarrollado por Apache90
          </p>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;