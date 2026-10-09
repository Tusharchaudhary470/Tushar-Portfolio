import React from "react";
import avatarImg from "../../assets/character-cutout.png";
import { GraduationCap, MapPin, Mail, Phone } from "lucide-react";
import { GithubIcon } from "../ui/GithubIcon";
import { ScrollReveal } from "../ui/ScrollReveal";

export function About() {
  const milestones = [
    {
      year: "2023 – 2026",
      title: "Bachelor of Computer Applications (BCA)",
      institution: "Aggarwal College, Ballabgarh (MDU Rohtak)",
      score: "70.17% Aggregate",
      desc: "Specialized in Computer Science, Database Management Systems, Data Structures, and Software Engineering principles.",
      highlight: true,
    },
    {
      year: "2022 – 2023",
      title: "Senior Secondary (Class 12) — CBSE",
      institution: "Central Board of Secondary Education",
      score: "77.6%",
      desc: "Strong foundation in mathematics and analytical problem solving.",
      highlight: false,
    },
    {
      year: "2020 – 2021",
      title: "Secondary School (Class 10) — HBSE",
      institution: "Haryana Board of School Education",
      score: "98% Distinction",
      desc: "Top percentile academic achievement with distinction in science and mathematics.",
      highlight: false,
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <ScrollReveal className="mb-12 sm:mb-16">
        <span className="text-xs font-bold tracking-widest text-white/90 uppercase px-3 py-1 rounded-full bg-white/20 inline-block mb-3">
          Behind the Code
        </span>
        <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight font-display uppercase">
          Designing Experiences That Make Sense
        </h2>
      </ScrollReveal>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Profile Card */}
        <ScrollReveal delay={100} className="lg:col-span-5">
          <div className="bg-white rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-8 shadow-2xl border border-white/30 text-black flex flex-col justify-between">
            <div>
              <div className="relative w-full aspect-square max-w-[280px] mx-auto rounded-3xl bg-[#DC1428] overflow-hidden mb-6 shadow-inner ring-4 ring-black/5 flex items-center justify-center">
                <img
                  src={avatarImg}
                  alt="Tushar Kumar"
                  className="w-full h-full object-cover object-top scale-110"
                />
                <div className="absolute bottom-3 inset-x-3 bg-black/75 backdrop-blur-md text-white py-1.5 px-3 rounded-full text-center text-xs font-bold flex items-center justify-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#DC1428]" />
                  Faridabad, Haryana, India
                </div>
              </div>

              <h3 className="text-3xl font-extrabold text-black tracking-tight mb-1">
                Tushar Kumar
              </h3>
              <p className="text-sm font-semibold text-[#DC1428] mb-4">
                Full-Stack Developer • MERN Specialist
              </p>

              <p className="text-neutral-700 text-sm leading-relaxed mb-6">
                I build complete web applications with React, Node.js, Express, and MongoDB. From architecting secure JWT authentication and complex database relations to building responsive, fluid dashboards, I focus on delivering real-world code that is fast, resilient, and intuitive.
              </p>
            </div>

            <div className="pt-5 border-t border-neutral-100 flex flex-col gap-2.5 text-xs text-neutral-800">
              <a
                href="mailto:tusharkumarg89@gmail.com"
                className="flex items-center gap-2 hover:text-[#DC1428] font-semibold transition-colors"
              >
                <Mail className="w-4 h-4 text-[#DC1428]" />
                tusharkumarg89@gmail.com
              </a>
              <a
                href="tel:+918920607096"
                className="flex items-center gap-2 hover:text-[#DC1428] font-semibold transition-colors"
              >
                <Phone className="w-4 h-4 text-[#DC1428]" />
                +91 8920607096
              </a>
              <a
                href="https://github.com/Tusharchaudhary470"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-[#DC1428] font-semibold transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-[#DC1428]" />
                github.com/Tusharchaudhary470
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Right: Academic History & Engineering Ethos */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <ScrollReveal delay={200}>
            <div className="bg-white rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-8 shadow-2xl border border-white/30 text-black">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="w-5 h-5 text-[#DC1428]" />
                <h3 className="text-xl sm:text-2xl font-bold text-black tracking-tight">
                  Education & Qualifications
                </h3>
              </div>

              <div className="space-y-6">
                {milestones.map((item, index) => (
                  <div
                    key={index}
                    className={`p-4 sm:p-5 rounded-2xl transition-all ${
                      item.highlight
                        ? "bg-neutral-50 border-2 border-[#DC1428]/20"
                        : "bg-neutral-50/60 border border-neutral-100"
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                      <span className="text-xs font-bold text-[#DC1428] uppercase tracking-wider">
                        {item.year}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-black text-white text-xs font-bold">
                        {item.score}
                      </span>
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-black mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-neutral-500 font-semibold mb-2">
                      {item.institution}
                    </p>
                    <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Quick Pillars of Value */}
          <ScrollReveal delay={300}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white/95 rounded-2xl p-5 shadow-lg text-black border border-white/20">
                <span className="text-2xl font-extrabold text-[#DC1428] block mb-1">01</span>
                <h4 className="font-bold text-sm mb-1">Production Mindset</h4>
                <p className="text-xs text-neutral-600">Writing maintainable code tested against real-world user flows.</p>
              </div>
              <div className="bg-white/95 rounded-2xl p-5 shadow-lg text-black border border-white/20">
                <span className="text-2xl font-extrabold text-[#DC1428] block mb-1">02</span>
                <h4 className="font-bold text-sm mb-1">Full-Stack Depth</h4>
                <p className="text-xs text-neutral-600">Connecting clean React states with performant Node & MongoDB APIs.</p>
              </div>
              <div className="bg-white/95 rounded-2xl p-5 shadow-lg text-black border border-white/20">
                <span className="text-2xl font-extrabold text-[#DC1428] block mb-1">03</span>
                <h4 className="font-bold text-sm mb-1">Rapid Learner</h4>
                <p className="text-xs text-neutral-600">Quick to absorb new tools, frameworks, and engineering standards.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
