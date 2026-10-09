import React, { useState } from "react";
import { ChevronDown, Calendar, Phone, Mail, ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "../ui/ScrollReveal";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "01 How do we get started?",
      a: "Simply reach out via email or phone! We can schedule a short introductory call to discuss your project requirements, team architecture, or role expectations.",
    },
    {
      q: "02 Are you available for full-time junior/fresher roles?",
      a: "Yes! Having completed my BCA, I am actively seeking full-time Full-Stack / MERN Developer roles (remote or on-site) where I can contribute to production codebases from day one.",
    },
    {
      q: "03 What is your core technology stack?",
      a: "My core specialty is the MERN stack: React, Node.js, Express.js, and MongoDB, paired with Tailwind CSS for rapid styling and JWT/bcrypt for secure authentication.",
    },
    {
      q: "04 Can you build both frontend and backend from scratch?",
      a: "Yes. I develop end-to-end applications: designing normalized MongoDB schemas, writing modular Express controllers and middleware, and constructing responsive, interactive React user interfaces.",
    },
    {
      q: "05 How do you ensure code security and clean architecture?",
      a: "I practice strict separation of concerns (MVC), environment variable protection, salted bcrypt password hashing, stateless JWT authorization with route guards, and robust error-handling middleware.",
    },
  ];

  return (
    <section id="faq" className="py-20 sm:py-28 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <ScrollReveal className="mb-12 sm:mb-16">
        <span className="text-xs font-bold tracking-widest text-white/90 uppercase px-3 py-1 rounded-full bg-white/20 inline-block mb-3">
          Got Questions?
        </span>
        <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight font-display uppercase">
          Frequently Asked Questions
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: FAQs Accordion */}
        <div className="lg:col-span-7 flex flex-col gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <ScrollReveal key={index} delay={index * 80}>
                <div
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-xl transition-all cursor-pointer border border-white/20"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-base sm:text-lg font-bold text-black tracking-tight">
                      {faq.q}
                    </h3>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center bg-neutral-100 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 bg-[#DC1428] text-white" : "text-black"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>

                  {isOpen && (
                    <p className="mt-3 pt-3 border-t border-neutral-100 text-xs sm:text-sm text-neutral-600 leading-relaxed animate-fadeIn">
                      {faq.a}
                    </p>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Right Column: Discovery Call Card */}
        <ScrollReveal delay={200} className="lg:col-span-5">
          <div className="bg-white rounded-3xl sm:rounded-[2.5rem] p-7 sm:p-9 shadow-2xl border border-white/30 text-black flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#DC1428] text-white flex items-center justify-center mb-6 shadow-lg shadow-[#DC1428]/25">
                <Calendar className="w-6 h-6" />
              </div>

              <span className="text-xs font-bold text-[#DC1428] uppercase tracking-wider block mb-1">
                Direct Contact
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight mb-3">
                Still not sure? Let’s schedule a quick call.
              </h3>
              <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed mb-6">
                I’m always happy to discuss how my full-stack skillset aligns with your team’s roadmap, or how we can collaborate on your next product.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="mailto:tusharkumarg89@gmail.com"
                className="w-full py-3.5 px-6 rounded-full bg-[#DC1428] text-white font-bold text-sm hover:bg-[#B50E1F] transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <Mail className="w-4 h-4" />
                Schedule via Email
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="tel:+918920607096"
                className="w-full py-3.5 px-6 rounded-full bg-neutral-100 hover:bg-neutral-200 text-black font-bold text-sm transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#DC1428]" />
                Call +91 8920607096
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
