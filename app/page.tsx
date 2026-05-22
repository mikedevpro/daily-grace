"use client";

import { Sparkles } from "lucide-react";
import { MobileNav } from "@/components/mobile-nav";
import { PageShell } from "@/components/page-shell";
import { motion } from "framer-motion";

const categories = ["Peace", "Gratitude", "Strength", "Family"];

export default function Page() {
  return (
    <main className="app-screen px-5 py-8">
      <PageShell>
        <section className="mx-auto flex min-h-[90vh] max-w-md flex-col justify-between pb-24">
          <div>
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="app-eyebrow text-sm font-medium uppercase tracking-[0.3em]">
                  Daily Grace
                </p>
                <h1 className="mt-2 text-3xl font-bold">Good morning</h1>
              </div>

              <div className="app-icon-chip rounded-full p-3 backdrop-blur">
                <Sparkles className="h-5 w-5" />
              </div>
            </div>

            <div className="app-surface rounded-[2rem] p-6">
              <p className="app-muted mb-3 text-sm">Today’s prayer</p>

              <h2 className="mb-4 text-4xl font-bold leading-tight">
                Find peace in today’s grace.
              </h2>

              <p className="app-muted mb-6 leading-7">
                A quiet moment to pause, pray, reflect, and carry encouragement
                into your day.
              </p>

              <div className="app-accent-panel rounded-3xl p-5">
                <p className="mb-2 text-sm font-semibold">
                  Prayer of the Day
                </p>
                <p className="leading-7">
                  Lord, guide my heart today. Help me move with patience,
                  gratitude, and faith in every step I take.
                </p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ y: -4, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  className="app-surface app-surface-strong rounded-2xl px-4 py-4 text-left font-medium transition hover:-translate-y-0.5"
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>

          <MobileNav />
        </section>
      </PageShell>
    </main>
  );
}
