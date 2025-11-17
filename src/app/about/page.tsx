// app/about/page.tsx
// Claude Builder Club — UC Irvine
// About page with unique layout - light theme
// Accent #da7756, gradient bg from zinc-50 to orange-50

"use client";

import React from "react";
import Link from "next/link";
import Header from "../../components/ui/Header";
import { motion } from "framer-motion";
import {
  Sparkles,
  Users,
  Rocket,
  BookOpen,
  HeartHandshake,
  BadgeCheck,
  GraduationCap,
  Cpu,
  MessageSquare,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import Footer from "../../components/ui/footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-zinc-50 to-orange-50">
      <Header />
      <main className="relative mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        {/* Hero - Full width with split design */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-3 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#da7756] px-4 py-2 text-sm font-medium text-white shadow-md">
                <Sparkles className="h-4 w-4" />
                who we are
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
                build with claude,{" "}
                <span className="text-[#da7756] block mt-2">together</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                we're a student-led community at uci focused on hands-on
                learning, ethical ai, and shipping real projects with claude.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                <Link
                  href="/signup"
                  className="inline-flex items-center gap-2 rounded-2xl bg-[#da7756] px-6 py-3 text-base font-semibold text-white shadow-lg hover:opacity-90 transition-all"
                >
                  join the club
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/hackathon"
                  className="inline-flex items-center gap-2 rounded-2xl bg-white border-2 border-gray-200 px-6 py-3 text-base font-semibold text-gray-700 shadow-md hover:border-[#da7756]/30 hover:bg-[#da7756]/5 transition-all"
                >
                  see hackathon
                </Link>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-[#da7756]/20 to-orange-100 border-2 border-[#da7756]/30 shadow-xl" />
            </div>
          </div>
        </motion.section>

        {/* Stats Banner - Horizontal */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="rounded-3xl border-2 border-[#da7756]/20 bg-white p-8 shadow-xl">
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-[#da7756] mb-2">
                  200+
                </div>
                <div className="text-sm font-medium text-gray-600">
                  members & contributors
                </div>
              </div>
              <div className="text-center border-x-2 border-gray-200">
                <div className="text-5xl font-bold text-[#da7756] mb-2">
                  15+
                </div>
                <div className="text-sm font-medium text-gray-600">
                  workshops & build nights
                </div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-[#da7756] mb-2">1</div>
                <div className="text-sm font-medium text-gray-600">
                  hackathon (fall 2025)
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Pillars - Alternating Layout */}
        <section className="mb-20 space-y-12">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            what we offer
          </h2>

          {/* Pillar 1 - Left */}
          <motion.div
            className="grid md:grid-cols-2 gap-8 items-center"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="order-2 md:order-1">
              <div className="rounded-3xl bg-gradient-to-br from-[#da7756]/10 to-orange-50 p-1">
                <div className="rounded-3xl bg-white p-8 h-full">
                  <div className="w-12 h-12 rounded-xl bg-[#da7756]/10 flex items-center justify-center mb-4">
                    <Cpu className="h-6 w-6 text-[#da7756]" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    innovation through learning
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    idea → prototype quickly. we share patterns for prompts,
                    agents, tools, and product flows that actually work. build
                    nights, demos, and starter kits.
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 aspect-video rounded-3xl bg-gray-100 border-2 border-gray-200" />
          </motion.div>

          {/* Pillar 2 - Right */}
          <motion.div
            className="grid md:grid-cols-2 gap-8 items-center"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="aspect-video rounded-3xl bg-gray-100 border-2 border-gray-200" />
            <div>
              <div className="rounded-3xl bg-gradient-to-br from-[#da7756]/10 to-orange-50 p-1">
                <div className="rounded-3xl bg-white p-8 h-full">
                  <div className="w-12 h-12 rounded-xl bg-[#da7756]/10 flex items-center justify-center mb-4">
                    <HeartHandshake className="h-6 w-6 text-[#da7756]" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    community & mentorship
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    meet teammates, get unstuck, and learn from folks building
                    the same kind of stuff you are. peer feedback + support.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Pillar 3 - Left */}
          <motion.div
            className="grid md:grid-cols-2 gap-8 items-center"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="order-2 md:order-1">
              <div className="rounded-3xl bg-gradient-to-br from-[#da7756]/10 to-orange-50 p-1">
                <div className="rounded-3xl bg-white p-8 h-full">
                  <div className="w-12 h-12 rounded-xl bg-[#da7756]/10 flex items-center justify-center mb-4">
                    <BadgeCheck className="h-6 w-6 text-[#da7756]" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    free resources & credits
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    we help with claude pro (limited), api credits, templates,
                    and example repos so you can move fast. pro access when
                    available.
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 aspect-video rounded-3xl bg-gray-100 border-2 border-gray-200" />
          </motion.div>
        </section>

        {/* Why This Matters - Feature Box */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="rounded-3xl border-2 border-[#da7756]/20 bg-white p-10 shadow-xl">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                why this matters
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                ai is changing how we build. we focus on responsible, useful
                projects — things you'd actually ship to a friend or a club on
                campus. less hype, more demos.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border-2 border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700">
                  <GraduationCap className="h-4 w-4" />
                  beginner-friendly
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border-2 border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700">
                  <MessageSquare className="h-4 w-4" />
                  feedback loops
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border-2 border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700">
                  <Rocket className="h-4 w-4" />
                  demo-driven
                </span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Meet the Team Link */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="rounded-3xl border-2 border-[#da7756]/20 bg-white p-10 text-center shadow-xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              meet our board
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              get to know the dedicated student leaders behind claude builder
              club @ uci
            </p>
            <Link
              href="/team"
              className="inline-flex items-center gap-2 rounded-2xl bg-[#da7756] px-6 py-3 text-base font-semibold text-white shadow-lg hover:opacity-90 transition-all"
            >
              view the team
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.section>

        {/* CTA - Full Width Banner */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="rounded-3xl bg-gradient-to-r from-[#da7756] to-orange-400 p-12 text-center shadow-2xl">
            <h2 className="text-4xl font-bold text-white mb-4">
              ready to build with us?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              join the club, get updates, and we'll see you at the next
              workshop.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-lg font-bold text-[#da7756] shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
              >
                join via form
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="https://instagram.com/claudebuildersuci"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border-2 border-white bg-transparent px-8 py-4 text-lg font-bold text-white hover:bg-white/10 transition-all"
              >
                <ExternalLink className="h-5 w-5" />
                follow us
              </Link>
            </div>
          </div>
        </motion.section>
      </main>
      <Footer />;
    </div>
  );
}
