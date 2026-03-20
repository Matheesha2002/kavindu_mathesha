
// import React from "react";
// import { Link } from "react-router";
// import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
// import { useTypewriter } from "../hooks/useTypewriter";

// type Social = {
//   label: string;
//   icon: React.ReactNode;
//   href: string;
// };

// const socials: Social[] = [
//   { label: "Facebook", icon: <FaFacebookF />, href: "https://facebook.com/" },
//   { label: "GitHub", icon: <FaGithub />, href: "https://github.com/Matheesha2002" },
//   { label: "Email", icon: <MdEmail />, href: "mailto:moragammanakavindu@gmail.com" },
//   { label: "LinkedIn", icon: <FaLinkedinIn />, href: "https://linkedin.com/" },
// ];

// export default function Home() {
//   const typing = useTypewriter({
//     words: ["Software Engineer", "Full-Stack Developer", "UI Focused Builder"],
//     typingSpeed: 80,
//     deletingSpeed: 45,
//     pauseTime: 1200,
//   });

//   return (
//     <main className="relative min-h-screen text-white">
//       <section className="min-h-screen flex items-center justify-center px-6 pt-28 pb-16">
//         <div className="w-full max-w-5xl relative">
//           {/* Main Hero Card */}
//           <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-xl">
//             <div className="p-8 sm:p-12 md:p-14">
//               <p className="text-lg sm:text-xl opacity-90">Hi 👋</p>
//               <p className="mt-2 text-lg opacity-80">I am</p>

//               <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
//                 KAVINDU <span className="opacity-80">MATHEESHA</span>
//               </h1>

//               {/* Typing line */}
//               <div className="mt-4 text-lg sm:text-xl opacity-90">
//                 <span className="opacity-70">I build as </span>
//                 <span className="font-semibold">{typing}</span>
//                 <span className="ml-1 inline-block w-[10px] animate-pulse">|</span>
//               </div>

//               <p className="mt-6 max-w-2xl text-base sm:text-lg opacity-80 leading-relaxed">
//                 I create modern web apps with clean UI, strong backend logic,
//                 and real-world project experience.
//               </p>

//               <div className="mt-8 flex flex-wrap gap-3">
//                 <a
//                   href="#"
//                   className="px-5 py-3 rounded-full bg-white text-black font-semibold hover:opacity-90 transition"
//                 >
//                   Download CV
//                 </a>

//                 <Link
//                   to="/works"
//                   className="px-5 py-3 rounded-full border border-white/20 hover:border-white/40 hover:bg-white/5 transition"
//                 >
//                   View Works
//                 </Link>

//                 <Link
//                   to="/contact"
//                   className="px-5 py-3 rounded-full border border-white/20 hover:border-white/40 hover:bg-white/5 transition"
//                 >
//                   Contact
//                 </Link>
//               </div>
//             </div>

//             {/* subtle shine */}
//             <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
//             <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
//           </div>

//           {/* Social Icons (right side) */}
//           <div className="hidden sm:flex absolute top-1/2 -translate-y-1/2 -right-4 flex-col gap-3">
//             {socials.map((s) => (
//               <a
//                 key={s.label}
//                 href={s.href}
//                 target="_blank"
//                 rel="noreferrer"
//                 aria-label={s.label}
//                 title={s.label}
//                 className="h-11 w-11 rounded-full border border-white/20 bg-black/40 backdrop-blur-md flex items-center justify-center text-lg hover:border-white/50 hover:bg-white/5 transition"
//               >
//                 {s.icon}
//               </a>
//             ))}
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

import React from "react";
import { Link } from "react-router";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useTypewriter } from "../hooks/useTypewriter";

type Social = {
  label: string;
  icon: React.ReactNode;
  href: string;
};

const socials: Social[] = [
  { label: "Facebook", icon: <FaFacebookF />, href: "https://facebook.com/" },
  { label: "GitHub", icon: <FaGithub />, href: "https://github.com/" },
  { label: "Email", icon: <MdEmail />, href: "mailto:yourmail@example.com" },
  { label: "LinkedIn", icon: <FaLinkedinIn />, href: "https://linkedin.com/" },
];

export default function Home() {
  const typing = useTypewriter({
    words: ["Software Engineer", "Full-Stack Developer", "UI Focused Builder"],
    typingSpeed: 80,
    deletingSpeed: 45,
    pauseTime: 1200,
  });

  return (
    <main className="relative min-h-screen text-white">
      <section className="min-h-screen flex items-center justify-center px-6 pt-28 pb-16">
        <div className="w-full max-w-6xl relative">
          {/* Main Hero Card */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 p-8 sm:p-12 md:p-14">
              {/* Left side - Text */}
              <div className="z-10">
                <p className="text-lg sm:text-xl opacity-90">Hi 👋</p>
                <p className="mt-2 text-lg opacity-80">I am</p>

                <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                  KAVINDU <span className="opacity-80">MATHEESHA</span>
                </h1>

                <div className="mt-4 text-lg sm:text-xl opacity-90">
                  <span className="opacity-70">I build as </span>
                  <span className="font-semibold">{typing}</span>
                  <span className="ml-1 inline-block w-[10px] animate-pulse">|</span>
                </div>

                <p className="mt-6 max-w-xl text-base sm:text-lg opacity-80 leading-relaxed">
                  I create modern web apps with clean UI, strong backend logic,
                  and real-world project experience.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#"
                    className="px-5 py-3 rounded-full bg-white text-black font-semibold hover:opacity-90 transition"
                  >
                    Download CV
                  </a>

                  <Link
                    to="/works"
                    className="px-5 py-3 rounded-full border border-white/20 hover:border-white/40 hover:bg-white/5 transition"
                  >
                    View Works
                  </Link>

                  <Link
                    to="/contact"
                    className="px-5 py-3 rounded-full border border-white/20 hover:border-white/40 hover:bg-white/5 transition"
                  >
                    Contact
                  </Link>
                </div>
              </div>

              {/* Right side - Transparent Photo */}
              <div className="relative flex justify-center md:justify-end">
                <img
                  src="/me..PNG"
                  alt="Kavindu profile"
                  className="w-[240px] sm:w-[300px] md:w-[380px] lg:w-[430px] object-contain opacity-90 drop-shadow-2xl"
                />
              </div>
            </div>

            {/* subtle shine */}
            <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          </div>

          {/* Social Icons */}
          <div className="hidden sm:flex absolute top-1/2 -translate-y-1/2 -right-0.5 flex-col gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                title={s.label}
                className="h-11 w-11 rounded-full border border-white/20 bg-black/40 backdrop-blur-md flex items-center justify-center text-lg hover:border-white/50 hover:bg-white/5 transition"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}