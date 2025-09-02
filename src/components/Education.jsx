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
    coursework: ["DSA", "OOPs", "DBMS", "OS", "CN", "AI", "ML", "Web Development"],
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
    achievements: ["School Topper in Mathematics", "Top 10 student in the School"],
    coursework: ["Maths", "Science", "English", "Hindi", "Geography"],
  },
];

export default function Education() {
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
          <FaAward className="text-amber-400 text-2xl" />
          <h2 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-rose-400 to-violet-400">
            Education
          </h2>
        </div>
        <p className="text-[var(--text-2)] mb-8 text-center max-w-2xl">
          Academic excellence with a strong foundation in engineering and technology
        </p>

        {/* GATE Achievement Card */}
        <div className="bg-black/30 border border-amber-400/40 rounded-xl px-8 py-5 mb-10 flex flex-col items-center shadow-xl backdrop-blur w-full">
          <div className="flex items-center gap-2 mb-1">
            <FaAward className="text-amber-400 text-xl" />
            <span className="text-amber-300 font-semibold">GATE Achievement</span>
          </div>
          <div className="text-2xl font-bold text-[var(--text-0)]">All India Rank XYZ</div>
          <div className="text-[var(--text-2)] text-sm mb-1">
            Computer Science and Engineering
          </div>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-amber-400 text-lg">★</span>
            ))}
          </div>
        </div>

        {/* Education Cards */}
        <div className="w-full flex flex-col gap-8">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="bg-black/30 border border-white/10 rounded-2xl p-6 shadow-xl backdrop-blur w-full"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                <div>
                  <div className="text-lg font-bold text-[var(--text-0)] mb-1">
                    {edu.degree}
                  </div>
                  <div className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-rose-400 to-violet-400">
                    {edu.school}
                  </div>
                  <div className="text-[var(--text-2)] text-sm">{edu.location}</div>
                </div>
                <div className="text-[var(--text-1)] text-sm mt-2 md:mt-0 md:text-right">
                  {edu.period}
                  {edu.cgpa && (
                    <div>
                      CGPA: <span className="font-bold text-amber-300">{edu.cgpa}</span>
                    </div>
                  )}
                  {edu.percentage && (
                    <div>
                      Percentage:{" "}
                      <span className="font-bold text-amber-300">{edu.percentage}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:justify-between gap-4 mt-3">
                <div>
                  <div className="font-semibold text-[var(--text-0)]/90 mb-1">
                    Achievements
                  </div>
                  <ul className="list-disc list-inside text-[var(--text-2)] text-sm">
                    {edu.achievements.map((ach, i) => (
                      <li key={i}>{ach}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="font-semibold text-[var(--text-0)]/90 mb-1">
                    Key Coursework
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((cw, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-xs font-medium text-[var(--text-0)] shadow border border-white/10 bg-gradient-to-r from-amber-400/20 via-rose-400/20 to-violet-400/20"
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
