import React from "react";
import Hero from "./Hero";
import About from "./About";
import Service from "./Service";
import Banner from "./Banner";
import Doctor from "./Doctor";
import Apointment from "./Apointment";
import Blogs from "./Blogs";

const Home = () => {
  return (
    <div className="w-full h-auto space-y-20 pb-12">
      {/* HERO SECTION */}
      <Hero id="home" /> {/* Coincide con #home */}
      {/* ABOUT */}
      <About id="nosotros" /> {/* Coincide con #about */}
      {/* SERVICES */}
      <Service id="servicios" /> {/* Coincide con #services */}
      {/* BANNER */}
      <Banner /> {/* Este no necesita id */}
      {/* DOCTOR */}
      <Doctor id="doctores" /> {/* Coincide con #doctors */}
      {/* TURNOS */}
      <Apointment id="horarios"/> {/* Este no necesita id */}
      {/* BLOGS */}
      <Blogs id="noticias" /> {/* Coincide con #blogs */}
    </div>
  );
};

export default Home;