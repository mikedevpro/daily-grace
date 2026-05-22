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
    
      <main className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-100 px-5 py-8 pb-28">
        <PageShell>
        <section className="mx-auto max-w-md">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-amber-700">
                Daily Grace
              </p>

              <h1 className="mt-2 text-4xl font-bold text-stone-900">
                Saved Prayers
              </h1>
            </div>

            <div className="rounded-full bg-rose-100 p-3">
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
                className="rounded-[2rem] bg-white/70 p-5 shadow-lg backdrop-blur"
              >
                <div className="mb-3 flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-stone-900">
                    {prayer.title}
                  </h2>

                  <Heart className="h-5 w-5 fill-rose-400 text-rose-400" />
                </div>

                <p className="leading-7 text-stone-600">{prayer.text}</p>
              </motion.div>
            ))}
          </div>
        </section>
        </PageShell>

        <MobileNav />
      </main>
    
  );
}
