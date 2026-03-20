import React from "react";
import {
  FaPhoneAlt,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <main className="min-h-screen text-white px-6 pt-28 pb-16">
      <div className="mx-auto w-full max-w-5xl">
        {/* Title */}
        <h1 className="text-center text-3xl sm:text-4xl font-bold tracking-tight">
          I’d love to hear from you.
        </h1>

        {/* Main card */}
        <div className="mt-10 rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-xl p-6 sm:p-8 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {/* Left side - Contact Information */}
            <div className="md:pr-8 md:border-r md:border-white/10">
              <h2 className="text-xl font-semibold">Contact Information.</h2>

              <div className="mt-6 space-y-4">
                <a
                  href="mailto:moragammanakavindu@gmail.com"
                  className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-4 py-3 hover:border-white/30 transition"
                >
                  <MdEmail className="text-xl" />
                  <span className="opacity-90">moragammanakavindu@gmail.com</span>
                </a>

                <a
                  href="https://wa.me/94774162330?text=Hi%20Kavindu%2C%20I%20want%20to%20contact%20you"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-4 py-3 hover:border-white/30 transition"
                >
                  <FaWhatsapp className="text-lg" />
                  < span className="opacity-90">WhatsApp</span>
                </a>

                <a
                  href="tel:+94774162330"
                  className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-4 py-3 hover:border-white/30 transition"
                >
                  <FaPhoneAlt className="text-base" />
                  <span className="opacity-90">077 416 2330</span>
                </a>

                <a
                  href="https://linkedin.com/in/your-profile"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-4 py-3 hover:border-white/30 transition"
                >
                  <FaLinkedinIn className="text-lg" />
                  <span className="opacity-90">LinkedIn</span>
                </a>

                <a
                  href="https://github.com/Matheesha2002"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-4 py-3 hover:border-white/30 transition"
                >
                  <FaGithub className="text-lg" />
                  <span className="opacity-90">GitHub</span>
                </a>
              </div>
            </div>

            {/* Right side - Form */}
            <div>
              <h2 className="text-xl font-semibold">Send a message.</h2>

              <form className="mt-6 space-y-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 outline-none placeholder:text-white/50 focus:border-white/35"
                />

                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 outline-none placeholder:text-white/50 focus:border-white/35"
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 outline-none placeholder:text-white/50 focus:border-white/35"
                />

                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 outline-none placeholder:text-white/50 focus:border-white/35"
                />

                <textarea
                  rows={5}
                  placeholder="Your Message"
                  className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 outline-none placeholder:text-white/50 focus:border-white/35 resize-none"
                />

                <button
                  type="submit"
                  className="w-full rounded-xl bg-white px-4 py-3 font-semibold text-black hover:opacity-90 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}