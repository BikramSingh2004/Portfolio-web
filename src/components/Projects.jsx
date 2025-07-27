import React from "react";

const projects = [
  {
    title: "Overflow – Stack Overflow Clone",
    description:
      "Full-stack Q&A platform using Next.js + Appwrite. Reduced page load time by 33% with SSR in Next.js; boosted SEO and performance. Integrated Appwrite for auth + DB, cutting backend time by 40%. Responsive UI with Tailwind, MagicUI, and Zustand.",
    tech: ["Next.js", "Appwrite", "Tailwind", "MagicUI", "Zustand"],
    link: "#",
    demo: "https://overflow-sa9t-git-main-bikram-singhs-projects-45376413.vercel.app/",
  },
  {
    title: "Parlour Admin Dashboard (RBAC + Attendance)",
    description:
      "Role-based access app with live attendance sync. Built Super Admin, Admin, and Staff roles with RBAC; secured access levels. Improved UX by 40% through instant UI reflection and smooth transitions.",
    tech: ["React", "Node.js", "MongoDB", "JWT", "Tailwind"],
    link: "#",
    demo: "https://parlour-mu.vercel.app/",
  },
  {
    title: "AI Support Chatbot",
    description:
      "Smart chatbot with fallback LLM and file search. Reduced support time by 30% using OpenRouter (Claude) fallback + FAQ search. Enabled file upload and real-time admin management.",
    tech: ["React", "Node.js", "MongoDB", "JWT", "Tailwind", "OpenRouter"],
    link: "",
    demo: "https://1frontendbot-aaa9-git-main-bikram-singhs-projects-45376413.vercel.app/",
  },
  {
    title: "Chat app with ai support ",
    description:
      "Smart ChatApp with AI support. Reduced message latency by 45% using Socket.IO and Redis for real-time communication. Improved user productivity with auto-replies and summarization via Google Gemini API.Secured sessions with JWT; built scalable backend with Node.js + Express.js and MongoDB.",
    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "JWT",
      "Tailwind",
      "Socket.IO",
      "bcrypt",
      "Redis",
      "Gemini API",
    ],
    link: "#",
    demo: "https://chat-application-4znk.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section className="w-full py-16 bg-gradient-to-br from-[#23255a] via-[#23263a] to-[#181c2e]">
      <div className="flex flex-col items-center w-full">
        <h2 className="text-3xl font-bold text-indigo-300 mb-8 text-center">
          Projects
        </h2>
        <div className="w-full grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-2 md:px-16 lg:px-32">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-[#23263a] rounded-xl shadow-lg overflow-hidden flex flex-col hover:scale-[1.03] transition-transform border border-slate-700"
            >
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-semibold text-indigo-200 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-medium shadow"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2 mt-auto">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-semibold transition-colors shadow"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 border border-indigo-400 text-indigo-200 rounded-lg font-semibold transition-colors shadow hover:bg-indigo-700/30"
                    >
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
