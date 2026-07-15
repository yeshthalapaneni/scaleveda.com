"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const logoSrc = mounted && theme === "dark" ? "/scaleveda-logo-light.svg" : "/scaleveda-logo.svg";

  return (
    <header className="sticky top-0 z-20 border-b border-ink/10 bg-cream/80 backdrop-blur-xl transition-colors dark:border-dark-text/10 dark:bg-dark-bg/80">
      <div className="mx-auto flex w-[min(1180px,calc(100%-2rem))] items-center justify-between gap-6 py-4">
        <Link href="/" aria-label="scaleveda home" className="inline-flex w-[9.5rem] shrink-0 sm:w-[11rem]">
          <Image src={logoSrc} alt="scaleveda" width={690} height={170} priority className="h-auto w-full" />
        </Link>

        <nav aria-label="Primary navigation" className="flex items-center gap-5 text-sm font-medium text-ink-soft dark:text-dark-muted sm:gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hidden transition-colors hover:text-ink dark:hover:text-dark-text sm:inline ${
                pathname === link.href ? "text-ink dark:text-dark-text" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
          <Link
            href="/contact"
            className="rounded-full border border-ink px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-cream dark:border-dark-text dark:text-dark-text dark:hover:bg-dark-text dark:hover:text-dark-bg"
          >
            Book a call
          </Link>
        </nav>
      </div>
    </header>
  );
}
