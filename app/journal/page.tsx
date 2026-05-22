"use client";

import { MobileNav } from "@/components/mobile-nav";
import { PageShell } from "@/components/page-shell";
import { PenLine } from "lucide-react";
import { motion } from "framer-motion";

const entries = [
  {
    title: "Morning Reflection",
    content:
      "Today I want to focus on patience, gratitude, and being present.",
    date: "May 22",
  },
  {
    title: "Evening Prayer",
    content:
      "Thankful for making it through a difficult day with peace.",
    date: "May 21",
  },
];

export default function JournalPage() {
  return (
    <main className="app-screen px-5 py-8 pb-28">
      <PageShell>
        <section className="mx-auto max-w-md">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <p className="app-eyebrow text-sm uppercase tracking-[0.3em]">
                Daily Grace
              </p>

              <h1 className="mt-2 text-4xl font-bold">
                Prayer Journal
              </h1>
            </div>

            <button className="app-primary-button rounded-full p-3 shadow-lg">
              <PenLine className="h-5 w-5" />
            </button>
          </div>

          <div className="space-y-4">
            {entries.map((entry) => (
              <motion.div
                key={entry.title}
                whileHover={{ y: -4, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="app-surface rounded-[2rem] p-5"
              >
                <div className="mb-3 flex items-center justify-between">
                  <h2 className="text-xl font-semibold">
                    {entry.title}
                  </h2>

                  <span className="app-muted text-sm">{entry.date}</span>
                </div>

                <p className="app-muted leading-7">{entry.content}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </PageShell>

      <MobileNav />
    </main>
  );
}
