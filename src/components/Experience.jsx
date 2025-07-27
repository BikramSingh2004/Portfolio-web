import React from "react";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    role: "Full-Stack Developer & AI Automations Intern",
    company: "Hisales Consulting Pvt. Ltd.",
    period: "June 2025 – present",
    description:
      "Worked on Salesifyme.com to build scalable modules for sales automation and personalized onboarding. Integrated AI workflows using n8n, OpenRouter, and custom agents for lead routing, enrichment, and dynamic CRM updates. Developed secure APIs, dashboards, and backend automation using Next.js, Node.js, MongoDB, and JWT.",
    achievements: [
      "Integrated AI workflows using n8n, OpenRouter, and custom agents for lead routing, enrichment, and dynamic CRM updates.",
      "Developed secure APIs, dashboards, and backend automation using Next.js, Node.js, MongoDB, and JWT.",
    ],
  },
  {
    role: "Smart India Hackathon (Team Leader)",
    company: "Smart India Hackathon",
    period: "2023",
    description:
      "Led a team of six in Smart India Hackathon 2023 to build a digital heritage solution. Ranked 8th out of 45+ teams based on innovation and execution.",
    achievements: [
      "Led a team of six in Smart India Hackathon 2023 to build a digital heritage solution.",
      "Ranked 8th out of 45+ teams based on innovation and execution.",
    ],
  },
];

export default function Experience() {
  return (
    <section className="w-full py-16 bg-gradient-to-br from-[#23255a] via-[#23263a] to-[#181c2e]">
      <div className="flex flex-col items-center w-full">
        <div className="flex items-center gap-2 mb-2">
          <FaBriefcase className="text-blue-400 text-2xl" />
          <h2 className="text-3xl font-bold text-blue-300">Experience</h2>
        </div>
        <p className="text-slate-300 mb-6 text-center max-w-2xl">
          6+ months of professional experience building innovative solutions
        </p>
        <div className="w-full flex flex-col gap-8 px-2 md:px-16 lg:px-32">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-[#181c2e] border border-slate-700 rounded-xl p-6 shadow-lg w-full"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                <div>
                  <div className="text-lg font-bold text-white mb-1">
                    {exp.role}
                  </div>
                  <div className="text-blue-400 font-semibold">
                    {exp.company}
                  </div>
                </div>
                <div className="text-slate-300 text-sm mt-2 md:mt-0 md:text-right">
                  {exp.period}
                </div>
              </div>
              <div className="text-slate-200 mb-2">{exp.description}</div>
              <div>
                <div className="font-semibold text-slate-200 mb-1">
                  Key Achievements
                </div>
                <ul className="list-disc list-inside text-slate-400 text-sm">
                  {exp.achievements.map((ach, i) => (
                    <li key={i}>{ach}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
