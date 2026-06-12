"use client";

import {
  Heart,
  Calendar,
  Images,
  Gift,
} from "lucide-react";

export default function FloatingNav() {
  const items = [
    {
      icon: Heart,
      href: "#couple",
    },
    {
      icon: Calendar,
      href: "#event",
    },
    {
      icon: Images,
      href: "#gallery",
    },
    {
      icon: Gift,
      href: "#gift",
    },
  ];

  return (
    <div
      className="
      fixed
      bottom-4
      left-1/2
      z-50
      flex
      -translate-x-1/2
      gap-4
      rounded-full
      bg-white/90
      px-5
      py-3
      shadow-xl
      backdrop-blur
    "
    >
      {items.map(
        ({ icon: Icon, href }) => (
          <a
            key={href}
            href={href}
          >
            <Icon size={22} />
          </a>
        )
      )}
    </div>
  );
}