// app/team/page.tsx
// Claude Builder Club — UC Irvine
// Meet the Team page
// Accent #da7756, gradient bg from zinc-50 to orange-50

"use client";

import React from "react";
import Link from "next/link";
import Header from "../../components/ui/Header";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function TeamPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-zinc-50 to-orange-50">
      <Header />
      
      <main className="relative mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.section
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-[#da7756] px-4 py-2 text-sm font-medium text-white shadow-md mb-6">
            <Sparkles className="h-4 w-4" />
            meet the team
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            our <span className="text-[#da7756]">board</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            meet the dedicated student leaders driving claude builder club @ uci forward
          </p>
        </motion.section>

        {/* Board Members Grid */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Member 1",
                title: "Claude Student Ambassador",
                desc: "Leading Claude Builder Club @ UCI, connecting students with AI building opportunities.",
                img: "/images/member1.jpg",
                link: "https://linkedin.com",
                linkLabel: "LinkedIn",
              },
              {
                name: "Member 2",
                title: "Claude Student Ambassador",
                desc: "Supporting engagement and hackathon planning for Anteaters.",
                img: "/images/member2.jpg",
                link: "https://linkedin.com",
                linkLabel: "LinkedIn",
              },
              {
                name: "Member 3",
                title: "Claude Student Ambassador",
                desc: "Building design and web experiences for CBC @ UCI.",
                img: "/images/member3.jpg",
                link: "mailto:member3@uci.edu",
                linkLabel: "Email",
              },
              {
                name: "Member 4",
                title: "Claude Student Ambassador",
                desc: "Organizing workshops and promoting collaboration among builders.",
                img: "/images/member4.jpg",
                link: "https://linkedin.com",
                linkLabel: "LinkedIn",
              },
              {
                name: "Member 5",
                title: "Claude Student Ambassador",
                desc: "Managing partnerships, sponsors, and cross-campus outreach.",
                img: "/images/member5.jpg",
                link: "mailto:member5@uci.edu",
                linkLabel: "Email",
              },
              {
                name: "Member 6",
                title: "Claude Student Ambassador",
                desc: "Focusing on growth and communications for the club.",
                img: "/images/member6.jpg",
                link: "https://linkedin.com",
                linkLabel: "LinkedIn",
              },
              {
                name: "Member 7",
                title: "Claude Student Ambassador",
                desc: "Overseeing logistics and event operations for build nights.",
                img: "/images/member7.jpg",
                link: "mailto:member7@uci.edu",
                linkLabel: "Email",
              },
            ].map((m, i) => (
              <motion.div
                key={i}
                className="group rounded-2xl border-2 border-gray-200 bg-white p-5 shadow-lg hover:border-[#da7756]/40 hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <div
                  className="aspect-square w-full mb-4 rounded-xl border-2 border-gray-200 group-hover:border-[#da7756]/40 transition-all"
                  style={{
                    backgroundImage: `url(${m.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <h3 className="text-lg font-bold text-gray-900 mb-1">{m.name}</h3>
                <p className="text-xs font-semibold text-[#da7756] mb-2">{m.title}</p>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{m.desc}</p>
                <a
                  href={m.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#da7756] hover:underline"
                >
                  {m.linkLabel}
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="rounded-3xl border-2 border-[#da7756]/20 bg-white p-10 text-center shadow-xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              want to get involved?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              join our community and start building with claude today
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 rounded-2xl bg-[#da7756] px-6 py-3 text-base font-semibold text-white shadow-lg hover:opacity-90 transition-all"
              >
                join the club
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-2xl bg-white border-2 border-gray-200 px-6 py-3 text-base font-semibold text-gray-700 shadow-md hover:border-[#da7756]/30 hover:bg-[#da7756]/5 transition-all"
              >
                learn more
              </Link>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}