"use client";

import { Heart } from "lucide-react";
import { MobileNav } from "@/components/mobile-nav";
import { PageShell } from "@/components/page-shell";
import { motion } from "framer-motion";

const savedPrayers = [
  {
    title: "Prayer for Calm",
    text: "Help me move through today with peace instead of fear.",
  },
  {
    title: "Prayer for Guidance",
    text: "Lead me toward wisdom, clarity, and patience in every decision.",
  },
];

export default function SavedPage() {
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
                Saved Prayers
              </h1>
            </div>

            <div className="app-accent-panel rounded-full p-3">
              <Heart className="h-5 w-5 text-rose-500" />
            </div>
          </div>

          <div className="space-y-4">
            {savedPrayers.map((prayer) => (
              <motion.div
                key={prayer.title}
                whileHover={{ y: -4, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="app-surface rounded-[2rem] p-5"
              >
                <div className="mb-3 flex items-center justify-between">
                  <h2 className="text-xl font-semibold">
                    {prayer.title}
                  </h2>

                  <Heart className="h-5 w-5 fill-rose-400 text-rose-400" />
                </div>

                <p className="app-muted leading-7">{prayer.text}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </PageShell>

      <MobileNav />
    </main>
  );
}
