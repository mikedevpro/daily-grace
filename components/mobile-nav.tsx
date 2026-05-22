"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Heart, Home, PenLine } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

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
    <nav className="app-nav fixed bottom-5 left-1/2 grid w-[92%] max-w-md -translate-x-1/2 grid-cols-5 rounded-full px-4 py-3 backdrop-blur">
      {navItems.map((item) => {
        const Icon = item.icon;
        const active = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center gap-1 transition ${
              active ? "app-nav-active" : ""
            }`}
          >
            <Icon className="h-5 w-5" />
            <span className="text-[11px]">{item.label}</span>
          </Link>
        );
      })}
      <ThemeToggle />
    </nav>
  );
}
