// app/events/page.tsx
// Claude Builder Club — UC Irvine
// Events page showcasing past events with photos and descriptions

"use client";

import React from "react";
import Link from "next/link";
import Header from "../../components/ui/Header";
import { motion } from "framer-motion";
import { Calendar, MapPin, Users, ArrowRight, Sparkles } from "lucide-react";

export default function EventsPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-zinc-50 to-orange-50">
      <Header />

      <main className="relative mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        {/* Hero */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#da7756] px-4 py-2 text-sm font-medium text-white shadow-md mb-6">
              <Sparkles className="h-4 w-4" />
              our events
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              building <span className="text-[#da7756]">together</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              workshops, kickoffs, and hands-on sessions where we learn, build,
              and ship with claude
            </p>
          </div>
        </motion.section>

        {/* Events Grid */}
        <section className="space-y-16">
          {/* Event 1 - Kickoff */}
          <motion.div
            className="grid md:grid-cols-2 gap-8 items-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="aspect-[4/3] rounded-3xl bg-gray-100 border-2 border-gray-200" />
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#da7756]/10 px-3 py-1 text-sm font-medium text-[#da7756]">
                kickoff event
              </div>
              <h2 className="text-3xl font-bold text-gray-900">club kickoff</h2>
              <div className="flex flex-col gap-2 text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>October 1, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>6PM @ ANTrepreneur Center</span>
                </div>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                we kicked off the club by introducing what we're all about,
                meeting other builders, and showing how claude can help bring
                ideas to life. great turnout and energy!
              </p>
            </div>
          </motion.div>

          {/* Event 2 - Agent Workshop */}
          <motion.div
            className="grid md:grid-cols-2 gap-8 items-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="order-2 md:order-1 space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#da7756]/10 px-3 py-1 text-sm font-medium text-[#da7756]">
                workshop
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                intro to ai agents
              </h2>
              <div className="flex flex-col gap-2 text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>October 20, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>4PM @ DBH 6011</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>Joint event with AI @ UCI</span>
                </div>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                we teamed up with ai @ uci for our first workshop. we covered
                what agents are, why they matter, and how to start building your
                own — no coding experience required. hands-on demos and great
                questions from everyone!
              </p>
            </div>
            <div className="order-1 md:order-2 aspect-[4/3] rounded-3xl bg-gray-100 border-2 border-gray-200" />
          </motion.div>
        </section>

        {/* CTA */}
        <motion.section
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="rounded-3xl bg-gradient-to-r from-[#da7756] to-orange-400 p-12 text-center shadow-2xl">
            <h2 className="text-4xl font-bold text-white mb-4">
              don't miss the next one
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              join the club to get updates on upcoming workshops, build nights,
              and events
            </p>
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-lg font-bold text-[#da7756] shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
            >
              join the club
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
