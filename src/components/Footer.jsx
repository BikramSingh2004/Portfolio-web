import React from "react";
import profileImg from "../assets/profile.jpg";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-br from-[#23255a] via-[#23263a] to-[#181c2e] py-8 flex flex-col items-center border-t border-slate-800 mt-8">
      <div className="flex flex-col items-center gap-2 mb-4">
        <img
          src={profileImg}
          alt="Bikram Kumar Singh profile"
          className="w-16 h-16 object-cover rounded-full border-2 border-yellow-400 shadow-lg mb-2"
        />
        <div className="text-lg font-bold text-white">Bikram Kumar Singh</div>
        <div className="text-slate-400 text-center max-w-xl">
          Software Engineer & Full Stack Developer passionate about creating
          innovative solutions that bridge technology and real-world problems.
        </div>
      </div>
      <div className="text-slate-500 text-sm mt-2">
        &copy; {new Date().getFullYear()} Bikram Kumar Singh. All rights
        reserved.
      </div>
      <div className="text-slate-600 text-xs mt-1">
        Made with <span className="text-red-400">♥</span> using React & Tailwind
        CSS
      </div>
    </footer>
  );
}
