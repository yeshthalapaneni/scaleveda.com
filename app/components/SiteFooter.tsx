"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const email = "yeshthalapaneni@gmail.com";

export function SiteFooter() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const logoSrc = mounted && theme === "dark" ? "/scaleveda-logo-light.svg" : "/scaleveda-logo.svg";

  return (
    <footer className="border-t border-ink/10 bg-cream-deep/60 px-4 py-10 transition-colors dark:border-dark-text/10 dark:bg-dark-surface sm:px-8">
      <div className="mx-auto flex w-[min(1180px,100%)] flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <Image src={logoSrc} alt="scaleveda" width={690} height={170} className="h-auto w-[9.5rem]" />

        <nav aria-label="Footer navigation" className="flex gap-5 text-sm font-medium text-ink-soft dark:text-dark-muted">
          <a href="/services" className="hover:text-ink dark:hover:text-dark-text">Services</a>
          <a href="/work" className="hover:text-ink dark:hover:text-dark-text">Work</a>
          <a href="/contact" className="hover:text-ink dark:hover:text-dark-text">Contact</a>
        </nav>

        <div className="text-sm text-ink-soft/80 dark:text-dark-muted sm:text-right">
          <a href={`mailto:${email}`} className="underline underline-offset-4">{email}</a>
          <p className="mt-1">© {new Date().getFullYear()} ScaleVeda. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
