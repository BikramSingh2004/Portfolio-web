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
    <section className="relative w-full py-16">
      {/* ambient theme blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-20 h-96 w-96 rounded-full blur-3xl bg-gradient-to-br from-amber-400/20 via-rose-400/20 to-violet-400/20"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-20 h-[28rem] w-[28rem] rounded-full blur-3xl bg-gradient-to-tr from-violet-400/20 via-rose-400/20 to-amber-400/20"
      />

      <div className="relative max-w-6xl mx-auto flex flex-col items-center w-full px-4">
        <div className="flex items-center gap-2 mb-2">
          <FaBriefcase className="text-amber-400 text-2xl" />
          <h2 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-rose-400 to-violet-400">
            Experience
          </h2>
        </div>
        <p className="text-[var(--text-2)] mb-8 text-center max-w-2xl">
          6+ months of professional experience building innovative solutions
        </p>

        <div className="w-full flex flex-col gap-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-black/30 border border-white/10 rounded-2xl p-6 shadow-xl backdrop-blur w-full"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                <div>
                  <div className="text-lg font-bold text-[var(--text-0)] mb-1">
                    {exp.role}
                  </div>
                  <div className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-rose-400 to-violet-400">
                    {exp.company}
                  </div>
                </div>
                <div className="text-[var(--text-1)] text-sm mt-2 md:mt-0 md:text-right">
                  {exp.period}
                </div>
              </div>

              <div className="text-[var(--text-1)] mb-3">{exp.description}</div>

              <div>
                <div className="font-semibold text-[var(--text-0)]/90 mb-1">
                  Key Achievements
                </div>
                <ul className="list-disc list-inside text-[var(--text-2)] text-sm">
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
