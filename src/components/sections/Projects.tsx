import React, { useState } from "react";
import rosterlyLogo from "../../assets/rosterly/rosterly-logo.jpg";
import rosterlyDashboard from "../../assets/rosterly/rosterly-dashboard.png";
import rosterlyTactical from "../../assets/rosterly/rosterly-tactical-board.png";
import rosterlyTransactions from "../../assets/rosterly/rosterly-transactions.png";
import rosterlyTournaments from "../../assets/rosterly/rosterly-tournaments.png";
import rosterlyStats from "../../assets/rosterly/rosterly-stats.png";
import { 
  ArrowUpRight, 
  Link,
  Layers, 
  ShieldCheck, 
  Sparkles, 
  X, 
  Trophy, 
  Wallet, 
  Compass, 
  TrendingUp, 
  CheckCircle2, 
  Maximize2
} from "lucide-react";
import { GithubIcon } from "../ui/GithubIcon";
import { ScrollReveal } from "../ui/ScrollReveal";

interface ScreenshotTab {
  id: string;
  label: string;
  icon: React.ElementType;
  image: string;
  caption: string;
}

interface Project {
  id: string;
  title: string;
  badgeTitle?: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  problemStatement?: string;
  solutionStatement?: string;
  engineeringHighlights?: {
    title: string;
    description: string;
    points: string[];
  }[];
  features?: string[];
  tags: string[];
  techStackDetailed?: {
    category: string;
    items: string[];
  }[];
  githubUrl: string;
  liveUrl?: string;
  image?: string;
  featured?: boolean;
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalActiveTab, setModalActiveTab] = useState<string>("dashboard");

  const rosterlyTabs: ScreenshotTab[] = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: TrendingUp,
      image: rosterlyDashboard,
      caption: "Executive command center: Live ₹303,215 team vault, 100% win-rate analytics, and cashflow trajectory",
    },
    {
      id: "tactical",
      label: "Tactical Playbook",
      icon: Compass,
      image: rosterlyTactical,
      caption: "Custom SVG vector whiteboard: 0-100% normalized canvas, rotation vectors, compound zone containment & pan/zoom",
    },
    {
      id: "escrow",
      label: "Escrow & Treasury",
      icon: Wallet,
      image: rosterlyTransactions,
      caption: "Automated match entry fee reservation, profit/loss settlement engine, CSV export & WhatsApp deep links",
    },
    {
      id: "tournaments",
      label: "Tournaments",
      icon: Trophy,
      image: rosterlyTournaments,
      caption: "Active squad registrations, ₹18L+ prize pools, upcoming match timelines & roster slot allocations",
    },
    {
      id: "stats",
      label: "Match Analytics",
      icon: Layers,
      image: rosterlyStats,
      caption: "Performance diagnostics: 20-match win streaks, +₹3,995 net profit margins & Recharts data visualizations",
    },
  ];

  const currentModalTab = rosterlyTabs.find((t) => t.id === modalActiveTab) || rosterlyTabs[0];

  const projects: Project[] = [
    {
      id: "rosterly",
      title: "Rosterly",
      badgeTitle: "Featured Flagship",
      subtitle: "Esports Operations & Tactical Playbook Platform",
      description:
        "A full-stack production platform for competitive esports teams: automated financial escrow balances, squad roster allocations, and an interactive SVG strat board for IGLs.",
      problemStatement:
        "Competitive esports teams manage thousands of rupees in entry fees, scrims, tournament rosters, and battle-royale drop tactics across messy WhatsApp chats and unorganized notes, leading to financial miscalculations and chaotic communications.",
      solutionStatement:
        "Rosterly centralizes treasury management with an automated escrow engine, interactive live strategy whiteboards, multi-stage roster management, and Discord webhook automation.",
      engineeringHighlights: [
        {
          title: "1. Interactive Tactical Playbook (IGL Strat Board)",
          description: "Built a custom SVG vector drawing engine supporting freehand tactics, tactical directional arrows with Euclidean distance calculation, compound perimeter containment boundaries, and tactical role pins.",
          points: [
            "Mathematical Euclidean distance calculation: D = √(Δx² + Δy²)",
            "Normalized screen mouse/touch events to a responsive 0–100% coordinate space with pan/zoom scaling matrix",
            "Immutable Undo/Redo state history stack with multi-phase tactical slide sequencing"
          ]
        },
        {
          title: "2. Financial Treasury & Escrow Settlement State Machine",
          description: "Designed a dual-state Match Lobby Escrow system (pending entry fee reservation → completed with automated net profit/loss reconciliation).",
          points: [
            "Enforced atomic transaction ledger balance updates with Mongoose subdocument modification tracking (markModified)",
            "Client-side CSV spreadsheet export and dynamic WhatsApp deep-link receipt generator",
            "Visualized financial health and cashflow trajectory using Recharts Area charts"
          ]
        },
        {
          title: "3. Enterprise Role-Based Access Control (RBAC) & Squad Engine",
          description: "Built role hierarchy permissions (Captain, Co-Captain, Member) with secure JWT authorization and Bcrypt salt hashing.",
          points: [
            "Hybrid squad roster management combining registered platform users with offline/custom sub players (capped at 6 slots)",
            "Cryptographically secure invite codes and join request approval queues"
          ]
        },
        {
          title: "4. Resilient Network & Real-Time Alerts",
          description: "Engineered client-server resilience with automated cold-start mitigation and instant asynchronous notification pipelines.",
          points: [
            "Integrated asynchronous Discord Webhook alerts with rich embeds for treasury updates and match victories",
            "Engineered custom API abstraction with in-memory GET caching/deduplication and retry backoff for cloud cold starts"
          ]
        }
      ],
      tags: [
        "React 19", 
        "Node.js", 
        "Express 5", 
        "MongoDB", 
        "Mongoose 9", 
        "JWT (RBAC)", 
        "Tailwind CSS v4", 
        "Recharts"
      ],
      techStackDetailed: [
        {
          category: "Frontend Architecture",
          items: ["React 19", "Tailwind CSS v4", "Vite", "React Router v7", "Recharts", "Lucide Icons"]
        },
        {
          category: "Backend & Database",
          items: ["Node.js", "Express 5", "MongoDB Atlas", "Mongoose 9", "JWT (RBAC)", "Bcrypt", "Helmet"]
        },
        {
          category: "Cloud & DevOps",
          items: ["Render (Backend Server)", "Vercel (Client CDN)", "Discord Webhook API", "Git Version Control"]
        }
      ],
      githubUrl: "https://github.com/Tusharchaudhary470",
      liveUrl: "https://esport-manager-azure.vercel.app",
      image: rosterlyDashboard,
      featured: true,
    },
    {
      id: "anime-discovery",
      title: "Anime Discovery Platform",
      subtitle: "Dynamic Search & Media Exploration App",
      description:
        "A fast, modern React web application that fetches, filters, and displays anime titles from a public API with debounced search and nested routing.",
      longDescription:
        "Built to demonstrate advanced frontend architecture: reusable custom hooks for API querying, debounced input handlers for snappy responses without rate-limiting, and deep nested routing for character profiles and episodic details.",
      features: [
        "Custom hooks for debounced search and resilient API data fetching",
        "Nested client-side routing with React Router for seamless navigation",
        "Filter by popularity, seasonal release, genres, and studio ratings",
        "Optimized image loading and skeletal loading states for zero layout shift",
      ],
      tags: ["React", "React Router", "Custom Hooks", "API Integration", "Tailwind CSS"],
      githubUrl: "https://github.com/Tusharchaudhary470/Anime-search-app",
      liveUrl: "https://anime-search-app-phi.vercel.app",
      featured: false,
    },
    {
      id: "mini-crm",
      title: "Mini CRM & Lead Pipeline",
      subtitle: "Client Relationship & Contact Management",
      description:
        "A streamlined CRM platform for managing business contacts, lead lifecycle stages (Lead, Contact, Opportunity, Customer), and real-time client search.",
      longDescription:
        "Engineered with a responsive modular architecture: dynamic stage-based pipeline filtering, debounced contact search across names/emails/companies, custom local-storage synchronization hooks, and non-blocking toast notifications.",
      features: [
        "Dynamic lifecycle stage pipeline (Lead, Contact, Opportunity, Customer)",
        "Search & filter engine across contact names, email addresses, and company tags",
        "Persistent client-side state synchronization with custom storage hooks",
        "Interactive CRUD modal workflows with validation and responsive toast alerts",
      ],
      tags: ["React 19", "Vite", "Custom Hooks", "State Management", "Tailwind CSS"],
      githubUrl: "https://github.com/Tusharchaudhary470/Crm-mini",
      liveUrl: "https://crm-mini-pi.vercel.app",
      featured: false,
    },
    {
      id: "task-tracker",
      title: "Full-Stack Task Tracker",
      subtitle: "State-Driven Productivity System",
      description:
        "A responsive task management application with real-time state updates, priority categorization, and database persistence.",
      longDescription:
        "A full-stack application connecting a modern React client with an Express/MongoDB backend: optimistic state updates, task priority categorization, and persistent REST API synchronization.",
      features: [
        "Real-time state updates with optimistic UI updates for instant feedback",
        "Priority sorting, status categorization (Todo, In Progress, Completed)",
        "REST API integration with MongoDB for persistent data integrity across sessions",
      ],
      tags: ["React", "Node.js", "Express", "MongoDB", "REST APIs"],
      githubUrl: "https://github.com/Tusharchaudhary470/todo-fullstack-frontend",
      liveUrl: "https://todo-fullstack-frontend-kohl.vercel.app",
      featured: false,
    },
  ];

  const featuredProject = projects.find((p) => p.featured) || projects[0];

  return (
    <section id="projects" className="py-20 sm:py-28 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider mb-3 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            Selected Work
          </div>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight font-display uppercase">
            Latest Projects
          </h2>
        </div>
      </ScrollReveal>

      {/* ── Featured Project Card: Rosterly (Clean, Compact Bento Card) ── */}
      <ScrollReveal delay={100}>
        <div 
          onClick={() => setSelectedProject(featuredProject)}
          className="group relative bg-white rounded-3xl p-5 sm:p-7 lg:p-8 mb-8 shadow-xl hover-lift border border-white/40 cursor-pointer transition-all duration-300"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Left Column: Single Dashboard Screenshot in Sleek Browser Frame */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden bg-neutral-950 border-2 sm:border-3 border-neutral-200 shadow-md group-hover:border-black/50 transition-colors">
                {/* Browser top pill bar */}
                <div className="bg-neutral-900 px-3.5 py-1.5 flex items-center justify-between border-b border-neutral-800">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-500/80" />
                    <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
                    <span className="w-2 h-2 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-[10px] font-mono text-neutral-400 truncate">
                    esport-manager-azure.vercel.app
                  </span>
                  {featuredProject.liveUrl && (
                    <a
                      href={featuredProject.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[9px] text-white bg-[#DC1428] hover:bg-[#B50E1F] font-black uppercase tracking-wider transition-colors shadow-2xs"
                    >
                      <Link className="w-2.5 h-2.5 stroke-[2.5]" />
                      <span>LIVE</span>
                    </a>
                  )}
                </div>

                {/* Dashboard Image */}
                <div className="relative aspect-[16/9] bg-neutral-900 overflow-hidden">
                  <img
                    src={rosterlyDashboard}
                    alt="Rosterly Dashboard"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  {/* Hover Prompt */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white text-black font-bold text-xs px-4 py-2 rounded-full shadow-lg flex items-center gap-1.5">
                      <Maximize2 className="w-3.5 h-3.5 text-[#DC1428]" />
                      Click to explore full system
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Logo, Pitch, Tags & Action */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                {/* Brand Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl overflow-hidden bg-black shadow-xs shrink-0 border border-orange-200/50">
                      <img src={rosterlyLogo} alt="Rosterly logo" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <span className="px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800 text-[10px] font-bold uppercase tracking-wide border border-orange-200">
                        Featured Flagship
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-neutral-500">
                    Full-Stack MERN
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight mb-2 group-hover:text-[#DC1428] transition-colors">
                  {featuredProject.title}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-neutral-700 mb-2">
                  {featuredProject.subtitle}
                </p>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed mb-4">
                  {featuredProject.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {featuredProject.tags.slice(0, 6).map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-full bg-black text-white text-[10px] font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                  <span className="px-2 py-0.5 rounded-full bg-neutral-200 text-neutral-800 text-[10px] font-semibold">
                    +{featuredProject.tags.length - 6} more
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2.5 pt-2">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black text-white font-bold text-xs sm:text-sm hover:bg-neutral-800 transition-all shadow-md"
                >
                  Inspect Architecture & Screens <ArrowUpRight className="w-4 h-4" />
                </button>
                {featuredProject.liveUrl && (
                  <a
                    href={featuredProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#DC1428] hover:bg-[#B50E1F] text-white text-xs font-black uppercase tracking-wider transition-all shadow-md hover:scale-105 active:scale-95"
                    title="Open Live Application"
                  >
                    <Link className="w-3.5 h-3.5 stroke-[2.5]" />
                    <span>LIVE</span>
                  </a>
                )}
                <a
                  href={featuredProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-2.5 rounded-full bg-neutral-100 hover:bg-neutral-200 text-black transition-colors"
                  aria-label="View on GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </ScrollReveal>

      {/* ── Secondary Projects Grid (3-Column Layout) ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {projects.filter((p) => !p.featured).map((proj, idx) => (
          <ScrollReveal key={proj.id} delay={150 * (idx + 1)}>
            <div 
              onClick={() => setSelectedProject(proj)}
              className="bg-white rounded-3xl p-6 sm:p-7 shadow-xl flex flex-col justify-between hover-lift border border-white/30 h-full group cursor-pointer transition-all"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#DC1428]">
                    {proj.subtitle}
                  </span>
                  <div className="flex items-center gap-1.5">
                    {proj.liveUrl && (
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DC1428] hover:bg-[#B50E1F] text-white text-[11px] font-black tracking-wider uppercase shadow-xs transition-all hover:scale-105 active:scale-95"
                        title="Open Live Application"
                      >
                        <Link className="w-3 h-3 stroke-[2.5]" />
                        <span>LIVE</span>
                      </a>
                    )}
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 rounded-full bg-neutral-100 text-black hover:bg-neutral-200 transition-colors"
                      aria-label="GitHub link"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <h4 className="text-2xl font-bold text-black tracking-tight mb-2.5 group-hover:text-[#DC1428] transition-colors">
                  {proj.title}
                </h4>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed mb-6">
                  {proj.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {proj.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-full bg-neutral-900 text-white text-[11px] font-semibold"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  className="w-full py-2.5 rounded-full bg-neutral-100 group-hover:bg-[#DC1428] text-black group-hover:text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  Inspect Architecture <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* ── Comprehensive Architecture Deep-Dive Modal (When clicked) ── */}
      {selectedProject && (
        <div 
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white text-black w-full max-w-3xl rounded-3xl p-5 sm:p-8 shadow-2xl relative max-h-[92vh] overflow-y-auto"
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 text-black transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-3">
              {selectedProject.id === "rosterly" && (
                <div className="w-10 h-10 rounded-xl overflow-hidden bg-black shadow-sm shrink-0 border border-neutral-200">
                  <img src={rosterlyLogo} alt="Rosterly logo" className="w-full h-full object-cover" />
                </div>
              )}
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#DC1428]/10 text-[#DC1428] text-xs font-bold uppercase tracking-wider">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Engineering Deep Dive
                  </div>
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#DC1428] hover:bg-[#B50E1F] text-white text-xs font-black uppercase tracking-wider transition-colors shadow-2xs"
                    >
                      <Link className="w-3 h-3 stroke-[2.5]" />
                      <span>LIVE</span>
                    </a>
                  )}
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight mt-1">
                  {selectedProject.title}
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-500 font-medium mb-5">
              {selectedProject.subtitle}
            </p>

            {/* Rosterly Interactive Screenshot Switcher INSIDE the Modal */}
            {selectedProject.id === "rosterly" && (
              <div className="mb-6">
                <div className="flex flex-wrap gap-1.5 mb-2.5 bg-neutral-100 p-1.5 rounded-xl">
                  {rosterlyTabs.map((tab) => {
                    const Icon = tab.icon;
                    const isActive = modalActiveTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setModalActiveTab(tab.id)}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                          isActive
                            ? "bg-black text-white shadow-xs"
                            : "text-neutral-600 hover:text-black hover:bg-neutral-200/60"
                        }`}
                      >
                        <Icon className={`w-3.5 h-3.5 ${isActive ? "text-amber-400" : ""}`} />
                        <span>{tab.label}</span>
                      </button>
                    );
                  })}
                </div>

                <div className="rounded-2xl overflow-hidden border-2 border-neutral-200 bg-neutral-950 shadow-md">
                  <div className="relative aspect-[16/9] bg-neutral-900">
                    <img
                      src={currentModalTab.image}
                      alt={currentModalTab.caption}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="bg-neutral-900 px-4 py-2 text-xs text-neutral-300 flex items-center gap-2 border-t border-neutral-800">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{currentModalTab.caption}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Problem & Solution Story */}
            {selectedProject.problemStatement && (
              <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-4 sm:p-5 mb-6">
                <div className="text-xs font-bold uppercase tracking-wider text-[#DC1428] mb-1.5">
                  1. Problem Statement
                </div>
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed mb-3">
                  {selectedProject.problemStatement}
                </p>
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-1.5">
                  2. Architectural Solution
                </div>
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                  {selectedProject.solutionStatement}
                </p>
              </div>
            )}

            {/* Core Engineering Highlights */}
            {selectedProject.engineeringHighlights ? (
              <div className="mb-6 space-y-3.5">
                <h4 className="text-sm font-bold uppercase tracking-wider text-black flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#DC1428]" />
                  Core Engineering Highlights (Showstopper Features)
                </h4>

                <div className="space-y-3">
                  {selectedProject.engineeringHighlights.map((highlight, idx) => (
                    <div key={idx} className="bg-neutral-50 p-4 rounded-2xl border border-neutral-200/80">
                      <h5 className="text-sm font-bold text-neutral-900 mb-1">
                        {highlight.title}
                      </h5>
                      <p className="text-xs text-neutral-600 mb-2 leading-relaxed">
                        {highlight.description}
                      </p>
                      <ul className="space-y-1.5 pl-1">
                        {highlight.points.map((pt, ptIdx) => (
                          <li key={ptIdx} className="flex items-start gap-2 text-xs text-neutral-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#DC1428] shrink-0 mt-1.5" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              selectedProject.features && (
                <div className="mb-6">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-black mb-3">
                    Key Technical Capabilities
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
                        <CheckCircle2 className="w-4 h-4 text-[#DC1428] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            )}

            {/* Tech Stack Breakdown */}
            {selectedProject.techStackDetailed ? (
              <div className="mb-6">
                <h4 className="text-sm font-bold uppercase tracking-wider text-black mb-3">
                  Production Tech Stack
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {selectedProject.techStackDetailed.map((stack, idx) => (
                    <div key={idx} className="bg-neutral-100/80 p-3 rounded-xl border border-neutral-200/60">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-1.5">
                        {stack.category}
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {stack.items.map((it) => (
                          <span key={it} className="px-2 py-0.5 rounded-md bg-white text-black text-[10px] font-semibold border border-neutral-200">
                            {it}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="mb-6">
                <h4 className="text-sm font-bold uppercase tracking-wider text-black mb-2">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full bg-black text-white text-xs font-semibold"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-neutral-200">
              <span className="text-xs text-neutral-500 font-medium">
                Verified full-stack architecture
              </span>
              <div className="flex flex-wrap items-center gap-2.5">
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#DC1428] text-white text-xs font-black uppercase tracking-wider hover:bg-[#B50E1F] transition-all shadow-md hover:scale-105 active:scale-95"
                  >
                    <Link className="w-3.5 h-3.5 stroke-[2.5]" />
                    <span>LIVE</span>
                  </a>
                )}
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black text-white text-xs font-bold hover:bg-neutral-800 transition-colors shadow-md"
                >
                  <GithubIcon className="w-4 h-4" /> View Repository
                </a>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-full bg-neutral-100 text-neutral-800 text-xs font-bold hover:bg-neutral-200 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
