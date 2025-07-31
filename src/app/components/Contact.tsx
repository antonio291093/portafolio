"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  // Función para hacer scroll suave hacia "hero"
  const handleScrollToTop = () => {
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="contact"
      className="
        relative
        min-h-screen
        py-16
        px-4
        text-center
        border-t border-gray-200
        flex flex-col justify-center items-center
        bg-gradient-to-t from-yellow-100 via-white to-gray-50
        w-full
      "
    >
      <div className="w-full max-w-3xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-6 text-gray-900">Contacto</h2>
        <p className="text-lg text-gray-700 mb-6">
          Si te interesa colaborar, tienes alguna idea o simplemente quieres saludar,
          no dudes en contactarme.
        </p>

        <a
          href="mailto:antonio291093@gmail.com"
          className="text-yellow-700 font-medium hover:underline"
        >
          antonio291093@gmail.com
        </a>

        <div className="flex justify-center gap-6 mt-8">
          <a
            href="https://github.com/antonio291093"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-700 hover:text-yellow-600 transition text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/jesus-antonio-rico-vigil-125693236/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-700 hover:text-yellow-600 transition text-2xl"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Botón para volver arriba */}
      <button
        onClick={handleScrollToTop}
        aria-label="Volver arriba"
        className="
          absolute
          bottom-8
          left-1/2
          -translate-x-1/2
          flex items-center justify-center
          rounded-full p-3
          bg-yellow-400 hover:bg-yellow-500
          shadow-md
          transition-transform hover:scale-110
        "
        type="button"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </section>
  );
}
