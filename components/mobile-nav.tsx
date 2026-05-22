"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Heart, Home, PenLine } from "lucide-react";

const navItems = [
  {
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
    label: "Prayers",
    href: "/prayers",
    icon: BookOpen,
  },
  {
    label: "Journal",
    href: "/journal",
    icon: PenLine,
  },
  {
    label: "Saved",
    href: "/saved",
    icon: Heart,
  },
];

export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-5 left-1/2 grid w-[90%] max-w-md -translate-x-1/2 grid-cols-4 rounded-full bg-stone-900/95 px-4 py-3 text-white shadow-2xl shadow-stone-500/30 backdrop-blur">
      {navItems.map((item) => {
        const Icon = item.icon;
        const active = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center gap-1 transition ${
              active ? "text-amber-200" : "text-stone-300"
            }`}
          >
            <Icon className="h-5 w-5" />
            <span className="text-[11px]">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}