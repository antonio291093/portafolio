"use client";
import { useState } from "react";
import { projects } from "./projectsData";
import { motion } from "framer-motion";

const Projects = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleScrollToSkills = () => {
    const section = document.getElementById("skills");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.section
      id="projects"
      className="relative min-h-screen py-16 px-4 flex flex-col justify-center items-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-900">
        Proyectos Destacados
      </h2>
      {/* Mobile View: Acordeón */}
      <div className="mb-20 w-full max-w-2xl flex flex-col gap-4 md:hidden">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md border border-gray-200"
          >
            <button
              className="w-full flex justify-between items-center px-6 py-4 text-left"
              onClick={() => handleAccordion(idx)}
            >
              <span className="font-semibold text-gray-900 text-lg">
                {project.title}
              </span>
              <span className="text-yellow-600 text-2xl transition-transform duration-200"
                style={{
                  transform: openIndex === idx ? "rotate(180deg)" : "rotate(0deg)",
                }}>
                ▼
              </span>
            </button>
            {openIndex === idx && (
              <div className="px-6 pb-6 animate__animated animate__fadeIn">
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-yellow-50 text-yellow-600 rounded-full px-3 py-1 text-xs font-medium border border-yellow-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-gray-800 hover:text-yellow-600 underline"
                    >
                      Live
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-gray-800 hover:text-yellow-600 underline"
                    >
                      Código
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Desktop View: Grid Cards */}
      <div className="mb-20 w-full max-w-5xl grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center hidden md:grid">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition p-6 flex flex-col h-full w-full max-w-xs"
          >
            <h3 className="text-2xl font-bold mb-2 text-gray-900">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="bg-yellow-50 text-yellow-600 rounded-full px-3 py-1 text-xs font-medium border border-yellow-200"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-auto flex gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-gray-800 hover:text-yellow-600 underline"
                >
                  Live
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-gray-800 hover:text-yellow-600 underline"
                >
                  Código
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={handleScrollToSkills}
        aria-label="Ir a Tecnologias"
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

export default Projects;
