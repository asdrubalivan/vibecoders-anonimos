"use client";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/los-12-pasos", label: "Los 12 Pasos" },
  { href: "/reuniones", label: "Reuniones" },
  { href: "/contador", label: "Mi Sobriedad" },
  { href: "/confesionario", label: "Confesionario" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#8b1a1a] text-[#f5f0e8] shadow-lg">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-2xl">💻</span>
          <span className="font-bold text-lg tracking-wide group-hover:text-[#d4a017] transition-colors">
            Vibecoders <span className="text-[#d4a017]">Anónimos</span>
          </span>
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex gap-6 text-sm font-semibold tracking-wide">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="hover:text-[#d4a017] transition-colors uppercase"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#6b1414] px-4 pb-4">
          <ul className="flex flex-col gap-3 text-sm font-semibold">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="block py-2 hover:text-[#d4a017] transition-colors uppercase"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
