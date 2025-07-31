"use client";

import { motion } from "framer-motion";


const About = () => {

  const handleScrollToProjects = () => {
    const section = document.getElementById('projects');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.section
      id="about"
      className="relative min-h-screen flex flex-col justify-center items-center px-4 max-w-3xl mx-auto text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="text-4xl font-extrabold mb-6 text-gray-900">Sobre mí</h2>
      <p className="text-lg text-gray-700 mb-4">
        Soy un{" "}
        <span className="text-yellow-600 font-semibold">
          Desarrollador Full Stack especializado en el stack MERN
        </span>{" "}
        (MongoDB, Express.js, React, Node.js), con experiencia en{" "}
        <span className="text-yellow-600 font-semibold">Next.js y Tailwind CSS</span>{" "}
        para crear aplicaciones modernas y escalables.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        Me apasiona transformar ideas en productos funcionales, poniendo especial énfasis en la experiencia de usuario, el diseño minimalista y la eficiencia del código.
      </p>
      <p className="text-lg text-gray-700 mb-8">
        Además, cuento con una sólida experiencia empresarial de 5 años trabajando con Delphi, Oracle, MySQL y Microsoft SQL Server, desarrollando soluciones robustas y optimizando procesos a nivel de base de datos.
      </p>
      <a
        href="/CV.pdf"
        target="_blank"
        rel="noopener noreferrer"        
        className="inline-block px-6 py-2 mb-20 border border-yellow-500 text-yellow-700 rounded-full font-medium hover:bg-yellow-400 hover:text-white transition"
      >
        Descargar CV
      </a>
      <button
        onClick={handleScrollToProjects}
        aria-label="Ir a Proyectos"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center justify-center rounded-full p-3 bg-yellow-400 hover:bg-yellow-500 shadow-md transition-transform hover:scale-110"
        type="button"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </motion.section>
  );
};

export default About;

