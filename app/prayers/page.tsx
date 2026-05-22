"use client";

import { PrayerCard } from "@/components/prayer-card";
import { PageShell } from "@/components/page-shell";
import { MobileNav } from "@/components/mobile-nav";
import { prayers } from "@/lib/data";

export default function PrayersPage() {
  return (
    <main className="app-screen app-screen-cool px-5 py-8 pb-28">
      <PageShell>
        <section className="app-surface mx-auto max-w-3xl rounded-[2rem] p-8">
          <div className="mb-6">
            <p className="app-eyebrow text-sm font-medium uppercase tracking-[0.3em]">
              Prayers
            </p>
            <h1 className="mt-3 text-3xl font-bold">Prayer Collection</h1>
            <p className="app-muted mt-2">
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
      <MobileNav />
    </main>
  );
}
