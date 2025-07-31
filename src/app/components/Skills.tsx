"use client";

import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaDatabase,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiTypescript,
  SiCloudinary,
  SiOracle,
  SiMysql,
  SiDelphi,
} from "react-icons/si";

import { motion } from "framer-motion";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

const skills = [
  { name: "React", icon: <FaReact size={32} className="text-blue-500" /> },
  { name: "Next.js", icon: <SiNextdotjs size={32} className="text-black" /> },
  { name: "Node.js", icon: <FaNodeJs size={32} className="text-green-600" /> },
  { name: "Express.js", icon: <SiExpress size={32} className="text-gray-700" /> },
  { name: "MongoDB", icon: <SiMongodb size={32} className="text-green-700" /> },
  { name: "Tailwind", icon: <SiTailwindcss size={32} className="text-cyan-500" /> },
  { name: "JavaScript", icon: <SiJavascript size={32} className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript size={32} className="text-blue-600" /> },
  { name: "HTML5", icon: <FaHtml5 size={32} className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt size={32} className="text-blue-500" /> },
  { name: "Git", icon: <FaGitAlt size={32} className="text-orange-600" /> },
  { name: "Cloudinary", icon: <SiCloudinary size={32} className="text-purple-500" /> },
  // Tecnologías empresariales
  { name: "Delphi", icon: <SiDelphi size={32} className="text-red-700" /> },
  { name: "Oracle DB", icon: <SiOracle size={32} className="text-orange-700" /> },
  { name: "MySQL", icon: <SiMysql size={32} className="text-blue-700" /> },
  { name: "SQL Server", icon: <FaDatabase size={32} className="text-gray-600" /> },
];

export default function Skills() {
  const handleScrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimationOnScroll animateIn="fadeIn" animateOnce={true}>
      <motion.section
        id="skills"
        className="relative min-h-screen py-16 px-4 max-w-5xl mx-auto text-center flex flex-col justify-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12">Tecnologías</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 place-items-center">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="p-4 rounded-full transition-transform duration-300 ease-in-out group-hover:scale-110">
                {skill.icon}
              </div>
              <span className="text-sm text-gray-700 mt-2">{skill.name}</span>
            </div>
          ))}
        </div>

        {/* Botón para avanzar a Contact */}
        <button
          onClick={handleScrollToContact}
          aria-label="Ir a Contacto"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center justify-center rounded-full p-3 bg-yellow-400 hover:bg-yellow-500 shadow-md transition-transform hover:scale-110"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-900"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </motion.section>
    </AnimationOnScroll>
  );
}
