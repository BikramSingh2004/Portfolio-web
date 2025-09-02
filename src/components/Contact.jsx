import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="relative w-full py-16 flex flex-col items-center">
      {/* ambient theme blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-20 h-96 w-96 rounded-full blur-3xl bg-gradient-to-br from-amber-400/20 via-rose-400/20 to-violet-400/20"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-20 h-[28rem] w-[28rem] rounded-full blur-3xl bg-gradient-to-tr from-violet-400/20 via-rose-400/20 to-amber-400/20"
      />

      <h2 className="relative text-3xl font-extrabold text-center mb-2 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-rose-400 to-violet-400">
        Get In Touch
      </h2>
      <p className="relative text-[var(--text-2)] mb-10 text-center max-w-2xl">
        I'm always open to discussing new opportunities, interesting projects,
        or just having a chat about technology and development.
      </p>

      <div className="relative w-full max-w-4xl flex flex-col md:flex-row gap-8 rounded-2xl shadow-xl p-8 md:p-12 bg-black/30 border border-white/10 backdrop-blur">
        {/* Contact Form */}
        <form className="flex-1 flex flex-col gap-4">
          <h3 className="text-xl font-bold text-[var(--text-0)] mb-2">
            Send me a message
          </h3>
          <input
            type="text"
            placeholder="Your name"
            className="bg-white/5 border border-white/15 rounded-lg px-4 py-2 text-[var(--text-0)] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-300/60 focus:border-amber-300/40"
          />
          <input
            type="email"
            placeholder="your.email@example.com"
            className="bg-white/5 border border-white/15 rounded-lg px-4 py-2 text-[var(--text-0)] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-300/60 focus:border-amber-300/40"
          />
          <textarea
            placeholder="Tell me about your project or just say hello!"
            rows={5}
            className="bg-white/5 border border-white/15 rounded-lg px-4 py-2 text-[var(--text-0)] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-300/60 focus:border-amber-300/40"
          />
          <button
            type="submit"
            className="mt-2 inline-flex justify-center items-center rounded-lg font-semibold text-[#1a1223] px-4 py-2 border border-white/20 shadow bg-gradient-to-b from-white to-amber-200 hover:-translate-y-0.5 transition-transform"
          >
            Send Message
          </button>
        </form>

        {/* Sidebar */}
        <div className="flex-1 flex flex-col gap-6 justify-between">
          <div>
            <h3 className="text-xl font-bold text-[var(--text-0)] mb-2">
              Let's connect
            </h3>
            <p className="text-[var(--text-2)] mb-4">
              Whether you have a project in mind, want to collaborate, or just
              want to say hello, I'd love to hear from you. I'm currently
              available for freelance projects and full-time opportunities.
            </p>
            <div className="flex gap-4 mb-4">
              <a
                href="https://github.com/BikramSingh2004"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-[var(--text-1)] hover:text-[var(--text-0)] bg-white/5 p-3 rounded-full border border-white/15 transition-colors backdrop-blur hover:bg-white/10"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/bikram-kumar-singh-62199a24b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-[var(--text-1)] hover:text-[var(--text-0)] bg-white/5 p-3 rounded-full border border-white/15 transition-colors backdrop-blur hover:bg-white/10"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:bikramkumarsingh817@gmail.com"
                className="text-2xl text-[var(--text-1)] hover:text-[var(--text-0)] bg-white/5 p-3 rounded-full border border-white/15 transition-colors backdrop-blur hover:bg-white/10"
              >
                <FaEnvelope />
              </a>
            </div>
            <div className="bg-white/5 border border-white/12 rounded-lg p-4 text-[var(--text-1)]">
              <div className="font-semibold mb-1">Quick Response</div>
              <div className="text-sm">
                I typically respond to messages within 24 hours. For urgent
                inquiries, feel free to reach out on LinkedIn.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
