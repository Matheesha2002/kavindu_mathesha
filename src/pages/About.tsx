import { useEffect, useMemo, useState } from "react";
import { VscCode } from "react-icons/vsc";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiPostman, SiFigma, SiDocker, SiGithubactions } from "react-icons/si";

type EducationItem = {
  title: string;
  place: string;
  period: string;
};

const education: EducationItem[] = [
  {
    title: "BSc (Hons) Computer Science (Top-up)",
    place: "Cinec Campus",
    period: "2024 - Present",
  },
  {
    title: "Higher nationl Diploma (computer science)",
    place: "Cinec campus",
    period: "2022 - 2024",
  },
];

const technicalSkills = [
  "React",
  "python",
  "Java",
  "HTML",
  "IOT",
  "TypeScript",
  "TailwindCSS",
  "Node.js",
  "FastAPI",
  "PostgreSQL",
  "Git & GitHub",
];

const softSkills = ["Teamwork", "Communication", "Problem Solving", "Time Management"];

const tools = [
  { label: "VS Code", icon: <VscCode className="text-lg" /> },
  { label: "Postman", icon: <SiPostman className="text-lg" /> },
  { label: "Figma", icon: <SiFigma className="text-lg" /> },
  { label: "Docker (basic)", icon: <SiDocker className="text-lg" /> },
  { label: "GitHub Actions (basic)", icon: <SiGithubactions className="text-lg" /> },
];

const links = [
  {
    label: "GitHub",
    value: "https://github.com/Matheesha2002",
    href: "https://github.com/Matheesha2002",
    icon: <FaGithub className="text-lg" />,
    external: true,
  },
  {
    label: "LinkedIn",
    value: "https://www.linkedin.com/in/kavindu-moragammana-a99207281/",
    href: "https://www.linkedin.com/in/kavindu-moragammana-a99207281/",
    icon: <FaLinkedinIn className="text-lg" />,
    external: true,
  },
  {
    label: "Email",
    value: "moragammanakavindu@gmail.com",
    href: "mailto:moragammanakavindu@gmail.com",
    icon: <MdEmail className="text-lg" />,
    external: false,
  },
];

// ------- helper components (dot markers) -------
function LeftMarker({ active }: { active: boolean }) {
  return (
    <div className="hidden md:flex items-center gap-3 mb-3">
      <span
        className={[
          "ml-auto h-3 w-3 rounded-full transition",
          active ? "bg-white ring-4 ring-white/20" : "bg-white/60",
        ].join(" ")}
      />
      <span className="w-6 h-px bg-white/15" />
    </div>
  );
}

function RightMarker({ active }: { active: boolean }) {
  return (
    <div className="hidden md:flex items-center gap-3 mb-3">
      <span className="w-6 h-px bg-white/15" />
      <span
        className={[
          "h-3 w-3 rounded-full transition",
          active ? "bg-white ring-4 ring-white/20" : "bg-white/60",
        ].join(" ")}
      />
    </div>
  );
}

export default function About() {
  // active section id for highlighting dots
  const [activeId, setActiveId] = useState<string>("who");

  // All section IDs (order matters: top to bottom)
  const sectionIds = useMemo(
    () => ["education", "tech", "soft", "who", "tools", "links"],
    []
  );

  useEffect(() => {
    // Observe sections and set active based on visibility
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // pick the most visible section
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));

        if (visible[0]?.target?.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        // Adjust this to match your navbar height
        root: null,
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.4, 0.6],
      }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, [sectionIds]);

  return (
    <main className="min-h-screen text-white px-6 pt-28 pb-16">
      <div className="mx-auto w-full max-w-5xl">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">About Me</h1>
        <p className="mt-2 opacity-80">Who I am, what I build, and the skills I use.</p>

        {/* ✅ wrapper relative + center line */}
        <div className="mt-8 relative grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* ✅ Center vertical line (desktop only) */}
          <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 h-full w-px bg-white/15" />

          {/* LEFT COLUMN */}
          <section className="rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-xl overflow-hidden">
            <div className="p-6 sm:p-8">
              {/* Profile block */}
              <div className="flex items-start gap-4">
                {/* ✅ IMPORTANT: Put your real file in public/ and match case */}
                <img
                  src="/me..PNG"
                  alt="Kavindu"
                  className="h-24 w-24 rounded-2xl object-cover border border-white/15 opacity-90 drop-shadow-2xl"
                />

                <div className="flex-1">
                  <h2 className="text-xl font-semibold">Kavindu Matheesha</h2>
                  <p className="mt-1 text-sm opacity-80">Software Engineer / Full-Stack Developer</p>

                  <div className="mt-4 flex flex-wrap gap-2 text-sm">
                    <a
                      className="px-3 py-1 rounded-full border border-white/20 hover:border-white/40 hover:bg-white/5 transition"
                      href="https://github.com/Matheesha2002"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                    <a
                      className="px-3 py-1 rounded-full border border-white/20 hover:border-white/40 hover:bg-white/5 transition"
                      href="https://www.linkedin.com/in/kavindu-moragammana-a99207281/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>

              {/* Education (active marker) */}
              <div className="mt-8" id="education">
                <LeftMarker active={activeId === "education"} />
                <h3 className="text-lg font-semibold">Education</h3>

                <div className="mt-3 space-y-3">
                  {education.map((e) => (
                    <div key={e.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="font-medium">{e.title}</p>
                      <p className="text-sm opacity-80">{e.place}</p>
                      <p className="text-xs opacity-70 mt-1">{e.period}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Skills */}
              <div className="mt-8" id="tech">
                <LeftMarker active={activeId === "tech"} />
                <h3 className="text-lg font-semibold">Technical Skills</h3>

                <div className="mt-3 flex flex-wrap gap-2">
                  {technicalSkills.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 rounded-full border border-white/15 bg-black/30 text-sm opacity-90"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Soft Skills */}
              <div className="mt-8" id="soft">
                <LeftMarker active={activeId === "soft"} />
                <h3 className="text-lg font-semibold">Soft Skills</h3>

                <div className="mt-3 flex flex-wrap gap-2">
                  {softSkills.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 rounded-full border border-white/15 bg-black/30 text-sm opacity-90"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* RIGHT COLUMN */}
          <section className="rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-xl overflow-hidden">
            <div className="p-6 sm:p-8">
              {/* Who I am */}
              <div id="who">
                <RightMarker active={activeId === "who"} />
                <h2 className="text-2xl font-semibold">Who I am</h2>

                <p className="mt-4 opacity-80 leading-relaxed">
                  I’m a software engineer focused on building clean, modern, and user-friendly
                  applications. I enjoy working on both frontend and backend, and I like projects
                  where I can connect real-world data with practical features.
                </p>

                <p className="mt-4 opacity-80 leading-relaxed">
                  My goal is to create software that is reliable, secure, and easy to use. I also
                  enjoy learning new technologies and improving my problem-solving skills through projects.
                </p>
              </div>

              {/* Tools */}
              <div className="mt-8" id="tools">
                <RightMarker active={activeId === "tools"} />
                <h3 className="text-lg font-semibold">Skills & Tools</h3>

                <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {tools.map((t) => (
                    <div
                      key={t.label}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm opacity-90 hover:border-white/25 transition"
                    >
                      <span className="opacity-90">{t.icon}</span>
                      <span>{t.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5" id="links">
                <RightMarker active={activeId === "links"} />
                <p className="font-semibold">Links</p>

                <div className="mt-4 space-y-3">
                  {links.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      target={l.external ? "_blank" : undefined}
                      rel={l.external ? "noreferrer" : undefined}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/30 px-4 py-3 hover:border-white/25 hover:bg-white/5 transition"
                    >
                      <span className="opacity-90">{l.icon}</span>
                      <span className="text-sm opacity-80 w-20">{l.label}:</span>
                      <span className="text-sm underline underline-offset-4 hover:opacity-90 break-all">
                        {l.value}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}