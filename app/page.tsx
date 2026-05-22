"use client";

import { Sparkles } from "lucide-react";
import { MobileNav } from "@/components/mobile-nav";
import { PageShell } from "@/components/page-shell";
import { motion } from "framer-motion";

const categories = ["Peace", "Gratitude", "Strength", "Family"];

export default function Page() {
  return (
    
      <main className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-100 px-5 py-8 text-stone-900">
        <PageShell>
        <section className="mx-auto flex min-h-[90vh] max-w-md flex-col justify-between pb-24">
          <div>
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.3em] text-amber-700">
                  Daily Grace
                </p>
                <h1 className="mt-2 text-3xl font-bold">Good morning</h1>
              </div>

              <div className="rounded-full bg-white/70 p-3 shadow-sm backdrop-blur">
                <Sparkles className="h-5 w-5 text-amber-700" />
              </div>
            </div>

            <div className="rounded-[2rem] bg-white/70 p-6 shadow-xl shadow-orange-200/50 backdrop-blur">
              <p className="mb-3 text-sm text-stone-500">Today’s prayer</p>

              <h2 className="mb-4 text-4xl font-bold leading-tight">
                Find peace in today’s grace.
              </h2>

              <p className="mb-6 leading-7 text-stone-600">
                A quiet moment to pause, pray, reflect, and carry encouragement
                into your day.
              </p>

              <div className="rounded-3xl bg-amber-100/80 p-5">
                <p className="mb-2 text-sm font-semibold text-amber-800">
                  Prayer of the Day
                </p>
                <p className="leading-7 text-stone-700">
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
                  className="rounded-2xl bg-white/70 px-4 py-4 text-left font-medium shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-white"
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
