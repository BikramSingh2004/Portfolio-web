import React from "react";
import {
  FaCode,
  FaDatabase,
  FaBrain,
  FaMobileAlt,
  FaPaintBrush,
  FaTools,
} from "react-icons/fa";
// import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";



const skills = [
  { name: "C", icon: <FaCode /> },
  { name: "C++", icon: <FaCode /> },
  { name: "JavaScript", icon: <FaCode /> },
  { name: "TypeScript", icon: <FaCode /> },
  { name: "Python", icon: <FaBrain /> },
  { name: "HTML", icon: <FaCode /> },
  { name: "CSS", icon: <FaPaintBrush /> },
  { name: "React", icon: <FaCode /> },
  { name: "Next.js", icon: <FaCode /> },
  { name: "Node.js", icon: <FaCode /> },
  { name: "Express.js", icon: <FaCode /> },
  { name: "Tailwind", icon: <FaPaintBrush /> },
  { name: "Zustand", icon: <FaTools /> },
  { name: "SQL", icon: <FaDatabase /> },
  { name: "MongoDB", icon: <FaDatabase /> },
  { name: "Appwrite", icon: <FaTools /> },
  { name: "OpenRouter", icon: <FaBrain /> },
  { name: "n8n", icon: <FaTools /> },
  { name: "JWT", icon: <FaTools /> },
];

export default function Skills() {
  return (
    <section className="w-full py-16 bg-gradient-to-br from-[#23255a] via-[#23263a] to-[#181c2e]">
      <div className="flex flex-col items-center w-full">
        <h2 className="text-3xl font-bold text-purple-300 mb-8 text-center">
          Skills & Technologies
        </h2>
        <div className="w-full grid gap-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 px-2 md:px-16 lg:px-32">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center bg-[#181c2e] border border-slate-700 rounded-xl p-6 shadow-lg hover:scale-105 transition-transform"
            >
              <div className="text-3xl mb-2 text-purple-300">{skill.icon}</div>
              <div className="text-slate-200 font-semibold text-lg text-center">
                {skill.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
