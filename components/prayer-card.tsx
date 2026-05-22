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
      className="rounded-[2rem] bg-white/70 p-5 shadow-lg backdrop-blur"
    >
      <div className="mb-3 flex items-start justify-between gap-4">
        <div>
          {category && (
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
              {category}
            </p>
          )}

          <h2 className="text-xl font-semibold text-stone-900">{title}</h2>
        </div>

        <Heart
          className={`h-5 w-5 shrink-0 ${
            favorited
              ? "fill-rose-400 text-rose-400"
              : "text-stone-300"
          }`}
        />
      </div>

      <p className="leading-7 text-stone-600">{text}</p>
    </motion.div>
  );
}