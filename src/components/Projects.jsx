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

      <div className="relative flex flex-col items-center w-full">
        <h2 className="text-3xl font-extrabold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-rose-400 to-violet-400">
          Projects
        </h2>

        {/* WIDER cards (3 on xl, 4 on 2xl) + SHORTER height via clamps */}
        <div className="w-full max-w-7xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 px-4">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-black/30 rounded-2xl shadow-xl overflow-hidden flex flex-col border border-white/10 backdrop-blur hover:-translate-y-0.5 transition-transform"
            >
              <div className="p-5 flex flex-col">
                <h3 className="text-xl font-semibold text-[var(--text-0)] mb-2 leading-snug">
                  {project.title}
                </h3>

                {/* Clamp description to reduce card height */}
                <p
                  className="text-[var(--text-1)] mb-3 leading-relaxed"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 5,        // <= adjust lines if needed
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {project.description}
                </p>

                {/* Tech chips: limit visible rows to keep height compact */}
                <div className="flex flex-wrap gap-2 mb-3 max-h-16 overflow-hidden">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-full text-[11px] font-medium text-[var(--text-0)] border border-white/10 bg-gradient-to-r from-amber-400/20 via-rose-400/20 to-violet-400/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* actions */}
                <div className="mt-auto flex gap-2 pt-1">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-3.5 py-2 rounded-lg font-semibold text-[#1a1223] border border-white/20 shadow bg-gradient-to-b from-white to-amber-200 hover:-translate-y-0.5 transition-transform"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-3.5 py-2 rounded-lg font-semibold text-[var(--text-1)] border border-white/15 bg-white/5 hover:bg-white/10 transition-colors shadow backdrop-blur"
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
