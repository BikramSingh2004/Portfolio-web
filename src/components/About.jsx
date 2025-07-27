import React from "react";
import profileImg from "../assets/profile.jpg";

export default function About() {
  return (
    <section className="w-full min-h-[60vh] flex flex-col md:flex-row items-center justify-between px-0 py-10 gap-8 md:gap-0 bg-gradient-to-br from-[#23255a] via-[#23263a] to-[#181c2e]">
      {/* About Text */}
      <div className="flex-1 text-left px-8">
        <h2 className="text-3xl font-bold text-indigo-300 mb-4">About Me</h2>
        <p className="text-slate-200 mb-4 max-w-xl">
          I'm a passionate and hard-working software engineer, currently
          pursuing B.Tech in Computer Science and Engineering at IIIT Bhagalpur.
          I love building scalable web applications, integrating AI workflows,
          and solving real-world problems. My experience spans Next.js, Node.js,
          MongoDB, Appwrite, and more. I thrive in collaborative environments
          and am always eager to learn and innovate.
        </p>
        <p className="text-slate-400 max-w-xl">
          Outside of coding, I enjoy reading books, writing, and running. I'm
          always open to new opportunities and challenges!
        </p>
      </div>
      {/* Profile Photo with floating shapes */}
      <div className="flex-1 flex justify-center items-center relative">
        <div className="relative">
          <span className="absolute -top-4 -left-4 w-8 h-8 bg-purple-400 rounded-full opacity-70 animate-pulse"></span>
          <span className="absolute -bottom-4 -right-4 w-6 h-6 bg-indigo-400 rounded-full opacity-60 animate-bounce"></span>
          <span className="absolute top-10 -right-6 w-4 h-4 bg-pink-400 rounded-full opacity-60 animate-pulse"></span>
          <div className="rounded-full bg-yellow-400 p-2 shadow-lg">
            <img
              src={profileImg}
              alt="Bikram Kumar Singh profile"
              className="w-40 h-40 object-cover rounded-full border-4 border-white shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
