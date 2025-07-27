import React from "react";

const navLinks = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <nav className="w-full py-4 px-6 flex justify-between items-center bg-gray-900 bg-opacity-80 fixed top-0 left-0 z-50 shadow-lg">
      <div className="text-2xl font-bold tracking-tight text-indigo-400">
        Bikram Kumar Singh
      </div>
      <ul className="flex space-x-6">
        {navLinks.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              className="text-gray-200 hover:text-indigo-400 transition-colors font-medium"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
