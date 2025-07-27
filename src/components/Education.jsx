import React from "react";
import { FaAward } from "react-icons/fa";

const education = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    school: "Indian Institute Of Information Technology, Bhagalpur, Bihar",
    location: "Bhagalpur, India",
    period: "2022 - 2026",
    // cgpa: "6.86",
    achievements: [
      "Top 25 student in the Department",
      "Developed a mobile app to connect farmers with the consumers directly",
    ],
    coursework: [
      "DSA",
      "OOPs",
      "DBMS",
      "OS",
      "CN",
      "AI",
      "ML",
      "Web Development",
    ],
  },
  {
    degree: "Higher Secondary Education",
    school: "Kendriya Vidyalaya Hazaribagh, Jharkhand, 12th",
    location: "Hazaribagh, India",
    period: "2018 - 2020",
    percentage: "83.40%",
    achievements: ["Head of Class", "Top 2 student in the School"],
    coursework: ["Physics", "Chemistry", "Maths", "English"],
  },
  {
    degree: "Secondary Education",
    school: "Vidya Bhawan BVP, Lakhisarai, Bihar, 10th",
    location: "Lakhisarai, India",
    period: "2017 - 2018",
    percentage: "91.40%",
    achievements: [
      "School Topper in Mathematics",
      "Top 10 student in the School",
    ],
    coursework: ["Maths", "Science", "English", "Hindi", "Geography"],
  },
];

export default function Education() {
  return (
    <section className="w-full py-16 bg-gradient-to-br from-[#23255a] via-[#23263a] to-[#181c2e]">
      <div className="flex flex-col items-center w-full">
        <div className="flex items-center gap-2 mb-2">
          <FaAward className="text-green-400 text-2xl" />
          <h2 className="text-3xl font-bold text-green-300">Education</h2>
        </div>
        <p className="text-slate-300 mb-6 text-center max-w-2xl">
          Academic excellence with a strong foundation in engineering and
          technology
        </p>
        {/* GATE Achievement Card */}
        <div className="bg-[#181c2e] border-2 border-yellow-500 rounded-xl px-8 py-4 mb-8 flex flex-col items-center shadow-lg">
          <div className="flex items-center gap-2 mb-1">
            <FaAward className="text-yellow-400 text-xl" />
            <span className="text-yellow-300 font-semibold">
              GATE Achievement
            </span>
          </div>
          <div className="text-2xl font-bold text-white">
            All India Rank XYZ
          </div>
          <div className="text-slate-300 text-sm mb-1">
            Computer Science and Engineering
          </div>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-lg">
                ★
              </span>
            ))}
          </div>
        </div>
        {/* Education Cards */}
        <div className="w-full flex flex-col gap-8 px-2 md:px-16 lg:px-32">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="bg-[#23263a] border border-slate-700 rounded-xl p-6 shadow-lg w-full"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                <div>
                  <div className="text-lg font-bold text-white mb-1">
                    {edu.degree}
                  </div>
                  <div className="text-green-400 font-semibold">
                    {edu.school}
                  </div>
                  <div className="text-slate-400 text-sm">{edu.location}</div>
                </div>
                <div className="text-slate-300 text-sm mt-2 md:mt-0 md:text-right">
                  {edu.period}
                  {edu.cgpa && (
                    <div>
                      CGPA:{" "}
                      <span className="font-bold text-yellow-300">
                        {edu.cgpa}
                      </span>
                    </div>
                  )}
                  {edu.percentage && (
                    <div>
                      Percentage:{" "}
                      <span className="font-bold text-yellow-300">
                        {edu.percentage}
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:justify-between gap-4 mt-2">
                <div>
                  <div className="font-semibold text-slate-200 mb-1">
                    Achievements
                  </div>
                  <ul className="list-disc list-inside text-slate-400 text-sm">
                    {edu.achievements.map((ach, i) => (
                      <li key={i}>{ach}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="font-semibold text-slate-200 mb-1">
                    Key Coursework
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((cw, i) => (
                      <span
                        key={i}
                        className="bg-green-900/60 text-green-300 px-3 py-1 rounded-full text-xs font-medium shadow"
                      >
                        {cw}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
