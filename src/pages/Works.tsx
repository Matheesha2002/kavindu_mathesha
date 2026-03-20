import React from "react";
import { FaGithub } from "react-icons/fa";
import { MdOpenInNew } from "react-icons/md";

type Project = {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
};

const projects: Project[] = [
  {
    title: "AgriCare AI",
    description:
      "AI-powered crop disease detection app with IoT sensor integration and backend API.",
    tags: ["React", "FastAPI", "PostgreSQL", "AI"],
    github: "https://github.com/your-username/agricare-ai",
    live: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio with animated background, smooth navigation, and responsive UI.",
    tags: ["React", "TypeScript", "Tailwind"],
    github: "https://github.com/your-username/portfolio",
    live: "#",
  },
  {
    title: "QA Test Project",
    description:
      "Manual + basic automation testing practice project with bug reports and test cases.",
    tags: ["QA", "STLC", "Test Cases"],
    github: "https://github.com/your-username/qa-project",
  },
];

export default function Works() {
  return (
    <main className="min-h-screen text-white px-6 pt-28 pb-16">
      <div className="mx-auto w-full max-w-5xl">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Works</h1>
        <p className="mt-2 opacity-80">My selected projects and builds.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className="rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-xl p-6 hover:border-white/25 transition"
            >
              <h2 className="text-xl font-semibold">{p.title}</h2>
              <p className="mt-3 opacity-80 leading-relaxed">{p.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full border border-white/15 bg-white/5 text-sm opacity-90"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-3">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 hover:border-white/40 hover:bg-white/5 transition"
                  >
                    <FaGithub /> GitHub
                  </a>
                )}
                {p.live && p.live !== "#" && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black font-semibold hover:opacity-90 transition"
                  >
                    <MdOpenInNew /> Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}