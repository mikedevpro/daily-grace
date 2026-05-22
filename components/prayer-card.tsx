"use client";

import { Heart } from "lucide-react";
import { motion } from "framer-motion";

type PrayerCardProps = {
  title: string;
  text: string;
  category?: string;
  favorited?: boolean;
};

export function PrayerCard({
  title,
  text,
  category,
  favorited = false,
}: PrayerCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className="app-surface rounded-[2rem] p-5"
    >
      <div className="mb-3 flex items-start justify-between gap-4">
        <div>
          {category && (
            <p className="app-eyebrow mb-2 text-xs font-semibold uppercase tracking-[0.2em]">
              {category}
            </p>
          )}

          <h2 className="text-xl font-semibold">{title}</h2>
        </div>

        <Heart
          className={`h-5 w-5 shrink-0 ${
            favorited
              ? "fill-rose-400 text-rose-400"
              : "text-[var(--muted)]"
          }`}
        />
      </div>

      <p className="app-muted leading-7">{text}</p>
    </motion.div>
  );
}
