"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Reveal } from "./Reveal";

type FaqItem = { question: string; answer: string };

export function Faq({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="grid gap-3">
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <Reveal key={item.question} delay={index * 0.05} as="article" className="overflow-hidden rounded-2xl border border-ink/10 bg-paper dark:border-dark-text/10 dark:bg-dark-card">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base font-semibold"
            >
              {item.question}
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.3 }}
                className="shrink-0 text-xl leading-none text-accent dark:text-dark-accent"
                aria-hidden="true"
              >
                +
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-5 text-sm leading-relaxed text-ink-soft dark:text-dark-muted">{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </Reveal>
        );
      })}
    </div>
  );
}
