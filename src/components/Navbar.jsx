import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LiaTimesSolid } from "react-icons/lia";
import { FaBars } from "react-icons/fa";
import logoBlanco from "../assets/logoBlanco.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Inicio" },
    { href: "#nosotros", label: "Nosotros" },
    { href: "#servicios", label: "Servicios" },
    { href: "#doctores", label: "Profesionales" },
    { href: "#horarios", label: "Horarios" },
    { href: "#noticias", label: "Noticias" },
  ];

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    handleClose(); // Cierra el menú en dispositivos móviles
  };

  return (
    <div className="w-full h-[8ch] bg-gray-800 flex items-center md:flex-row lg:px-32 md:px-16 sm:px-8 px-4 border-b border-gray-400 z-50 fixed top-0 left-0">
      {/* LOGO SECTION */}
      <Link to="/" className="mr-16 flex items-center">
        <img src={logoBlanco} alt="Logo G & W" className="h-25" />
      </Link>

      {/* TOGGLE BUTTON */}
      <button
        onClick={handleClick}
        className="flex-1 lg:hidden text-gray-400 ease-in-out duration-300 flex items-center justify-end"
      >
        {open ? (
          <LiaTimesSolid className="text-xl" />
        ) : (
          <FaBars className="text-xl" />
        )}
      </button>

      {/* NAV ITEMS */}
      <div
        className={`${
          open
            ? "flex absolute top-16 left-[50%] translate-x-[-50%] w-[95%] h-auto md:relative"
            : "hidden"
        } flex-1 md:flex flex-col md:flex-row gap-x-5 gap-y-4 md:items-center md:p-0 p-4 justify-between md:bg-transparent bg-neutral-50 md:border-none border border-neutral-200 md:shadow-none shadow-md rounded-md`}
      >
        {/* NAV ITEMS */}
        <ul className="list-none flex md:items-center items-start gap-x-7 gap-y-3 flex-wrap md:flex-row flex-col text-base md:text-gray-200 sm:text-black font-medium">
          {navLinks.map((nav, ind) => (
            <li key={ind}>
              <a
                href={nav.href}
                onClick={(e) => handleSmoothScroll(e, nav.href)}
                className="hover:text-blue-400 ease-in-out duration-300"
              >
                {nav.label}
              </a>
            </li>
          ))}
        </ul>

        {/* BUTTONS */}
        <div className="flex md:items-center items-start gap-x-5 md:flex-row flex-col text-base font-medium text-gray-800">
          <a href="https://wa.me/3865547356?text=Hola!%20me%20gustaría%20agendar%20una%20cita%20" target="_blank" className="btn font-bold w-fit px-6 py-2 rounded-full bg-gray-300 hover:bg-blue-900 hover:text-gray-300 ease-in-out duration-300">
            SACA TURNO
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;