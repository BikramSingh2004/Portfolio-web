import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="w-full py-16 bg-gradient-to-br from-[#23255a] via-[#23263a] to-[#181c2e] flex flex-col items-center">
      <h2 className="text-3xl font-bold text-center text-white mb-2">
        Get In Touch
      </h2>
      <p className="text-slate-300 mb-10 text-center max-w-2xl">
        I'm always open to discussing new opportunities, interesting projects,
        or just having a chat about technology and development.
      </p>
      <div className="w-full max-w-4xl flex flex-col md:flex-row gap-8 bg-[#202336] rounded-2xl shadow-xl p-8 md:p-12">
        {/* Contact Form */}
        <form className="flex-1 flex flex-col gap-4">
          <h3 className="text-xl font-bold text-white mb-2">
            Send me a message
          </h3>
          <input
            type="text"
            placeholder="Your name"
            className="bg-[#23263a] border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="your.email@example.com"
            className="bg-[#23263a] border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Tell me about your project or just say hello!"
            rows={5}
            className="bg-[#23263a] border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg shadow transition-colors"
          >
            Send Message
          </button>
        </form>
        {/* Sidebar */}
        <div className="flex-1 flex flex-col gap-6 justify-between">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Let's connect</h3>
            <p className="text-slate-300 mb-4">
              Whether you have a project in mind, want to collaborate, or just
              want to say hello, I'd love to hear from you. I'm currently
              available for freelance projects and full-time opportunities.
            </p>
            <div className="flex gap-4 mb-4">
              <a
                href="https://github.com/BikramSingh2004"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-slate-200 hover:text-white bg-[#23263a] p-3 rounded-full border border-slate-700 transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/bikram-kumar-singh-62199a24b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-slate-200 hover:text-white bg-[#23263a] p-3 rounded-full border border-slate-700 transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:bikramkumarsingh817@gmail.com"
                className="text-2xl text-slate-200 hover:text-white bg-[#23263a] p-3 rounded-full border border-slate-700 transition-colors"
              >
                <FaEnvelope />
              </a>
            </div>
            <div className="bg-blue-900/40 border border-blue-700 rounded-lg p-4 text-blue-200">
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
