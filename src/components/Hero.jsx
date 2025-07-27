import React from "react";

export default function Hero() {
  return (
    <section className="w-full min-h-[90vh] flex flex-col justify-center items-center bg-gradient-to-br from-[#181c2e] via-[#23255a] to-[#1a1a2e] relative overflow-hidden">
      {/* Available for hire badge */}
      <div className="mt-8 mb-4 flex justify-center w-full">
        <span className="px-4 py-1 rounded-full bg-slate-800/70 text-sm text-slate-200 border border-slate-700 shadow backdrop-blur">
          Available for hire
        </span>
      </div>
      {/* Name with gradient */}
      <h1 className="text-5xl sm:text-7xl font-extrabold text-center bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2 drop-shadow-lg">
        Bikram Kumar Singh
      </h1>
      {/* Subtitle */}
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 text-center mb-4">
        Software Engineer | Full Stack Developer
      </h2>
      {/* Badges */}
      <div className="flex flex-wrap gap-3 justify-center mb-6">
        <span className="bg-green-500/90 text-white px-4 py-1 rounded-full font-semibold flex items-center gap-1 text-sm shadow">
          B.Tech CSE, IIIT Bhagalpur
        </span>
        <span className="bg-blue-500/90 text-white px-4 py-1 rounded-full font-semibold flex items-center gap-1 text-sm shadow">
          OpenRouter | AI | Appwrite
        </span>
      </div>
      {/* Description */}
      <p className="max-w-2xl text-slate-200 text-center mb-8 text-lg">
        Passionate about building scalable web applications, integrating AI
        workflows, and solving real-world problems. Experienced in Next.js,
        Node.js, MongoDB, Appwrite, and more. Always eager to learn,
        collaborate, and innovate.
      </p>
      {/* Buttons */}
      <div className="flex flex-wrap gap-4 justify-center mb-12">
        <a
          href="#projects"
          className="px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
        >
          Explore My Work
        </a>
        <a
          href="#contact"
          className="px-6 py-3 rounded-lg border border-slate-400 text-slate-200 font-semibold shadow-lg hover:bg-slate-800/60 hover:scale-105 transition-transform"
        >
          Let's Connect
        </a>
      </div>
      {/* Stats Cards */}
      <div className="w-full flex flex-wrap justify-center gap-6 mb-8">
        <div className="bg-[#101325]/80 rounded-2xl px-8 py-6 min-w-[180px] text-center shadow-lg border border-slate-800">
          <div className="text-3xl font-bold text-indigo-400 mb-1">3+</div>
          <div className="text-slate-200 text-lg font-medium">
            Major Projects
          </div>
        </div>
        <div className="bg-[#101325]/80 rounded-2xl px-8 py-6 min-w-[180px] text-center shadow-lg border border-slate-800">
          <div className="text-3xl font-bold text-purple-400 mb-1">3+</div>
          <div className="text-slate-200 text-lg font-medium">
            Months Internship
          </div>
        </div>
        <div className="bg-[#101325]/80 rounded-2xl px-8 py-6 min-w-[180px] text-center shadow-lg border border-slate-800">
          <div className="text-3xl font-bold text-green-400 mb-1">15+</div>
          <div className="text-slate-200 text-lg font-medium">Technologies</div>
        </div>
      </div>
    </section>
  );
}
