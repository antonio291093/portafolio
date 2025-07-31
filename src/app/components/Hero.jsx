"use client";
import { motion } from "framer-motion";

const Hero = () => {
  const handleScrollToAbout = () => {
    const section = document.getElementById("about");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <motion.section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-to-b from-yellow-100 via-white to-gray-50"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h1 className="text-5xl md:text-6xl mb-4 font-extrabold text-gray-900">
        Hola, soy <span className="text-yellow-600">Antonio Rico</span>
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
        Desarrollador Full Stack MERN & Next.js
      </h2>
      <p className="max-w-xl text-gray-500 mb-8">
        Creo aplicaciones funcionales, eficientes y escalables.
        <br />
        Amante de las interfaces limpias y la experiencia de usuario.
      </p>
      <a
        href="#projects"
        className="
            px-7 py-2
            rounded-full
            bg-white/70
            text-gray-900
            font-medium
            shadow
            border border-gray-200
            transition
            duration-200
            hover:bg-yellow-50
            hover:border-yellow-200
            hover:scale-105
            focus:outline-none
            focus:ring-2 focus:ring-yellow-300
        "
      >
        Ver Portafolio
      </a>

      <button
        onClick={handleScrollToAbout}
        aria-label="Ir a Sobre mí"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center justify-center rounded-full p-3 bg-yellow-400 hover:bg-yellow-500 shadow-md transition-transform hover:scale-110"
        type="button"
      >
        {/* SVG flecha */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-900"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
    </motion.section>
  );
};

export default Hero;
