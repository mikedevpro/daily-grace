"use client";

import { PrayerCard } from "@/components/prayer-card";
import { PageShell } from "@/components/page-shell";
import { prayers } from "@/lib/data";

export default function PrayersPage() {
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
              <PrayerCard
                key={prayer.title}
                title={prayer.title}
                text={prayer.text}
                category={prayer.category}
                favorited={prayer.favorited}
              />
            ))}
          </div>
        </section>
      </PageShell>
    </main>
  );
}
