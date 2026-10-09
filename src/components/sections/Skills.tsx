import React, { useState } from "react";
import { Server, Shield, Smartphone, Database, CheckCircle, Sparkles, Code2, Layers, Cpu } from "lucide-react";
import { ScrollReveal } from "../ui/ScrollReveal";
import {
  ReactLogo,
  NodeLogo,
  ExpressLogo,
  MongoLogo,
  JavaScriptLogo,
  TypeScriptLogo,
  TailwindLogo,
  RestApiLogo,
  DartLogo,
  FlutterLogo,
  JwtLogo,
  GitLogo,
  PostmanLogo,
  VercelLogo,
  RenderLogo,
} from "../ui/TechLogos";
import { GithubIcon } from "../ui/GithubIcon";

interface TechItem {
  id: string;
  name: string;
  category: "frontend" | "backend" | "devops";
  categoryLabel: string;
  icon: React.ReactNode;
}

export function Skills() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [activeService, setActiveService] = useState<number | null>(0);

  const allSkills: TechItem[] = [
    // Frontend Stack
    { id: "react", name: "React", category: "frontend", categoryLabel: "Core UI Library", icon: <ReactLogo className="w-8 h-8" /> },
    { id: "javascript", name: "JavaScript", category: "frontend", categoryLabel: "ES6+ Standards", icon: <JavaScriptLogo className="w-8 h-8 rounded-md" /> },
    { id: "typescript", name: "TypeScript", category: "frontend", categoryLabel: "Static Typing", icon: <TypeScriptLogo className="w-8 h-8 rounded-md" /> },
    { id: "tailwind", name: "Tailwind CSS", category: "frontend", categoryLabel: "Utility-First CSS", icon: <TailwindLogo className="w-8 h-8" /> },
    { id: "rest-api", name: "REST APIs", category: "frontend", categoryLabel: "Client Integration", icon: <RestApiLogo className="w-8 h-8 rounded-md" /> },

    // Backend & Database
    { id: "nodejs", name: "Node.js", category: "backend", categoryLabel: "Server Runtime", icon: <NodeLogo className="w-8 h-8" /> },
    { id: "express", name: "Express.js", category: "backend", categoryLabel: "Backend Framework", icon: <ExpressLogo className="w-9 h-7" /> },
    { id: "mongodb", name: "MongoDB", category: "backend", categoryLabel: "NoSQL Database", icon: <MongoLogo className="w-8 h-8" /> },
    { id: "jwt", name: "JWT Auth", category: "backend", categoryLabel: "Token Security & RBAC", icon: <JwtLogo className="w-8 h-8 rounded-md" /> },
    { id: "postman", name: "Postman", category: "backend", categoryLabel: "API Testing & Docs", icon: <PostmanLogo className="w-8 h-8" /> },

    // Mobile & DevOps
    { id: "dart", name: "Dart", category: "devops", categoryLabel: "Mobile Language", icon: <DartLogo className="w-8 h-8" /> },
    { id: "flutter", name: "Flutter", category: "devops", categoryLabel: "Cross-Platform UI", icon: <FlutterLogo className="w-8 h-8" /> },
    { id: "git", name: "Git", category: "devops", categoryLabel: "Version Control", icon: <GitLogo className="w-8 h-8" /> },
    { id: "github", name: "GitHub", category: "devops", categoryLabel: "CI/CD & Repos", icon: <GithubIcon className="w-8 h-8 text-black" /> },
    { id: "vercel", name: "Vercel", category: "devops", categoryLabel: "Frontend Edge CDN", icon: <VercelLogo className="w-8 h-8" /> },
    { id: "render", name: "Render", category: "devops", categoryLabel: "Cloud Web Services", icon: <RenderLogo className="w-8 h-8 rounded-md" /> },
  ];

  const filteredSkills = activeFilter === "all" 
    ? allSkills 
    : allSkills.filter((s) => s.category === activeFilter);

  const services = [
    {
      id: 1,
      title: "Full-Stack Web Architecture",
      icon: Server,
      summary: "End-to-end web engineering from database schemas to reactive interfaces.",
      pills: ["React", "Node.js", "Express.js", "MongoDB", "Context API"],
      details: [
        "Modular MVC backend architecture with isolated routers, controllers, and services",
        "Single-Page Applications (SPA) with nested client routing and lazy loading",
        "State management using React Context API and reusable custom hooks",
        "Optimistic UI updates for high-responsiveness and zero sluggishness",
      ],
    },
    {
      id: 2,
      title: "Secure Authentication & REST APIs",
      icon: Shield,
      summary: "Protected data transmission, token-based authentication, and role authorization.",
      pills: ["JWT", "bcrypt", "RESTful Architecture", "RBAC", "CORS"],
      details: [
        "Stateless JSON Web Token (JWT) workflows with protected middleware routes",
        "Salted password hashing with bcrypt for bulletproof credential storage",
        "Role-Based Access Control (Admin, Team Manager, Player permissions)",
        "Strict input validation and error-handling middleware preventing crashes",
      ],
    },
    {
      id: 3,
      title: "Frontend Engineering & Responsive UI",
      icon: Smartphone,
      summary: "Crafting modern, fluid user experiences that look stunning on every device.",
      pills: ["Tailwind CSS", "Mobile-First", "Micro-Interactions", "Custom Hooks"],
      details: [
        "Mobile-first responsive layouts that adapt smoothly across smartphones, tablets, and desktops",
        "Accessible, high-contrast visual design following modern design systems",
        "Debounced search handlers and caching to minimize unnecessary server requests",
        "Smooth interactive micro-animations and zero-layout-shift UI components",
      ],
    },
    {
      id: 4,
      title: "Database Design & Optimization",
      icon: Database,
      summary: "Reliable NoSQL data persistence, schema relations, and indexing.",
      pills: ["MongoDB Atlas", "Mongoose", "Data Population", "CRUD Operations"],
      details: [
        "Mongoose schema design with strict data type validation and pre-save hooks",
        "Optimized queries using populate, aggregation pipelines, and indexed fields",
        "Cloud database deployment on MongoDB Atlas with automated backups",
        "Data persistence for wallet transactions, teams, and tournament leaderboards",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 sm:py-28 px-4 sm:px-6 max-w-7xl mx-auto overflow-hidden">
      {/* Section Header */}
      <ScrollReveal className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
        <span className="text-xs font-bold tracking-widest text-white/90 uppercase px-3.5 py-1.5 rounded-full bg-white/20 inline-block mb-3 backdrop-blur-md">
          Verified Tech Stack
        </span>
        <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight font-display uppercase leading-tight">
          Tools & <span className="underline decoration-white/30">Technologies</span>
        </h2>
        <p className="text-white/85 text-xs sm:text-sm md:text-base mt-3 max-w-xl mx-auto">
          Complete technology stack reviewable in one look — official tools utilized across production systems.
        </p>

        {/* Quick Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
          {[
            { id: "all", label: "All Skills (16)" },
            { id: "frontend", label: "Frontend & UI (5)" },
            { id: "backend", label: "Backend & Database (5)" },
            { id: "devops", label: "Mobile & DevOps (6)" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                activeFilter === tab.id
                  ? "bg-white text-black shadow-md scale-105"
                  : "bg-black/20 text-white/90 hover:bg-white/20"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </ScrollReveal>

      {/* ── Static, Single-Glance Tech Stack Grid (No Waiting for Animations!) ── */}
      <ScrollReveal delay={150} className="mb-20">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4">
          {filteredSkills.map((item) => (
            <div
              key={item.id}
              className="bg-white text-black p-4 sm:p-5 rounded-2xl sm:rounded-3xl shadow-lg border border-white/60 flex flex-col items-center text-center hover-lift group transition-all duration-300"
            >
              {/* Icon Container */}
              <div className="w-14 h-14 rounded-2xl bg-neutral-50 border border-neutral-100 flex items-center justify-center mb-3 shadow-xs group-hover:scale-110 transition-transform">
                {item.icon}
              </div>

              {/* Title & Category */}
              <h3 className="font-extrabold text-base text-black tracking-tight group-hover:text-[#DC1428] transition-colors">
                {item.name}
              </h3>
              <span className="text-[11px] font-semibold text-neutral-500 mt-0.5">
                {item.categoryLabel}
              </span>
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* ── Engineering Specializations / Capabilities Section ── */}
      <ScrollReveal className="text-center max-w-3xl mx-auto mb-10">
        <span className="text-xs font-bold tracking-widest text-white/90 uppercase px-3 py-1 rounded-full bg-white/20 inline-block mb-2">
          Engineering Focus
        </span>
        <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display uppercase">
          What I help you to Shape
        </h3>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {services.map((service, index) => {
          const Icon = service.icon;
          const isOpen = activeService === index;

          return (
            <ScrollReveal
              key={service.id}
              delay={index * 100}
              className={`rounded-3xl p-6 sm:p-8 transition-all duration-300 cursor-pointer shadow-xl ${
                isOpen
                  ? "bg-white text-black ring-4 ring-white/30"
                  : "bg-white/95 text-neutral-900 hover:bg-white hover:scale-[1.01]"
              }`}
            >
              <div onClick={() => setActiveService(isOpen ? null : index)}>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-colors ${
                        isOpen ? "bg-[#DC1428] text-white" : "bg-neutral-100 text-black"
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-neutral-600 block">
                        0{service.id}
                      </span>
                      <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-black">
                        {service.title}
                      </h4>
                    </div>
                  </div>
                  <span
                    className={`text-2xl font-bold transition-transform duration-300 ${
                      isOpen ? "rotate-45 text-[#DC1428]" : "text-neutral-600"
                    }`}
                  >
                    +
                  </span>
                </div>

                <p className="text-neutral-600 text-xs sm:text-sm mt-3.5 leading-relaxed">
                  {service.summary}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {service.pills.map((pill) => (
                    <span
                      key={pill}
                      className="px-2.5 py-1 rounded-full bg-black text-white text-[11px] font-semibold"
                    >
                      {pill}
                    </span>
                  ))}
                </div>

                {/* Expanded Details */}
                {isOpen && (
                  <div className="mt-5 pt-4 border-t border-neutral-100 animate-fadeIn">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2.5">
                      Included Engineering Practices
                    </h5>
                    <ul className="space-y-2">
                      {service.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-700">
                          <CheckCircle className="w-4 h-4 text-[#DC1428] shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
