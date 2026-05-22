"use client";

import { PageShell } from "@/components/page-shell";
import { motion } from "framer-motion";

export default function PrayersPage() {
  const prayers = [
    {
      title: "Morning Gratitude",
      text: "Thank you for this new day. Help me walk with gratitude and serve others in love.",
    },
    {
      title: "Strength in Trials",
      text: "Grant me courage and tenderness when challenges come, and remind me of your presence.",
    },
    {
      title: "Peace for Today",
      text: "Still my restless thoughts and fill me with calm faith as I trust your plan.",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 px-5 py-8 text-slate-900">
      <PageShell>
        <section className="mx-auto max-w-3xl rounded-[2rem] bg-white/80 p-8 shadow-xl shadow-slate-300/50 backdrop-blur">
          <div className="mb-6">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-slate-500">
              Prayers
            </p>
            <h1 className="mt-3 text-3xl font-bold">Prayer Collection</h1>
            <p className="mt-2 text-slate-600">
              A calm space to speak, listen, and return to your faith throughout
              the day.
            </p>
          </div>

          <div className="space-y-4">
            {prayers.map((prayer) => (
              <motion.div
                key={prayer.title}
                whileHover={{ y: -4, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="rounded-[2rem] bg-white/70 p-5 shadow-lg backdrop-blur"
              >
                <h2 className="text-xl font-semibold text-slate-900">
                  {prayer.title}
                </h2>
                <p className="mt-3 leading-7 text-slate-700">{prayer.text}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </PageShell>
    </main>
  );
}
