"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Reveal } from "./components/Reveal";

const pillars = [
  {
    number: "01",
    title: "Diagnose",
    description:
      "We start inside your workflow, not a demo. We find the specific, repeatable decision or task worth automating, and the data it actually depends on.",
  },
  {
    number: "02",
    title: "Build",
    description:
      "We design and ship a purpose-built agent for that one job — grounded in your systems, with clear guardrails, evaluation, and a human override.",
  },
  {
    number: "03",
    title: "Operate",
    description:
      "We monitor behavior in production, tune it against real outcomes, and hand over documentation your team can actually maintain.",
  },
];

const proof = [
  { value: "1", label: "problem per engagement — no platform overreach" },
  { value: "14d", label: "to a working prototype on your own data" },
  { value: "100%", label: "of agents shipped with human-in-the-loop controls" },
  { value: "0", label: "vendor lock-in — you own the code and the model choice" },
];

export default function Home() {
  return (
    <main className="overflow-x-clip">
      <section className="mx-auto flex min-h-[calc(100svh-4.5rem)] w-[min(1120px,calc(100%-2rem))] flex-col justify-center py-16">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-accent dark:text-dark-accent"
        >
          Data &amp; AI company
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="max-w-[16ch] text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
        >
          Custom AI agents, built for one job at a time.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 max-w-[42rem] text-base leading-relaxed text-ink-soft dark:text-dark-muted sm:text-lg"
        >
          Off-the-shelf AI tools solve generic problems. Yours aren&apos;t generic. ScaleVeda designs,
          builds, and operates AI agents around the specific workflows, data, and constraints of your
          business — not a chatbot bolted onto your product.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-9 flex flex-wrap gap-3"
        >
          <Link
            href="/contact"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-6 font-semibold text-cream shadow-[0_14px_34px_rgba(23,22,15,0.18)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(23,22,15,0.24)] dark:bg-dark-text dark:text-dark-bg"
          >
            Start a conversation
          </Link>
          <Link
            href="/services"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-ink/20 px-6 font-semibold text-ink transition hover:-translate-y-0.5 hover:border-ink/40 dark:border-dark-text/20 dark:text-dark-text dark:hover:border-dark-text/40"
          >
            See how we build
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 gap-6 border-t border-ink/10 pt-7 text-sm text-ink-soft dark:border-dark-text/10 dark:text-dark-muted sm:grid-cols-3"
        >
          <div>
            <strong className="mb-1 block text-base font-semibold text-ink dark:text-dark-text">Built to fit</strong>
            One agent, one workflow, your systems.
          </div>
          <div>
            <strong className="mb-1 block text-base font-semibold text-ink dark:text-dark-text">Built to trust</strong>
            Evaluated, monitored, and reversible.
          </div>
          <div>
            <strong className="mb-1 block text-base font-semibold text-ink dark:text-dark-text">Built to last</strong>
            You own the code — no black box.
          </div>
        </motion.div>
      </section>

      <section className="mx-auto w-[min(1120px,calc(100%-2rem))] pb-20 pt-8 sm:pb-28">
        <Reveal className="mb-12 max-w-[46rem] sm:mb-16">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent dark:text-dark-accent">How we work</p>
          <h2 className="text-2xl font-medium tracking-tight sm:text-3xl lg:text-4xl">
            From a real workflow to a working agent.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.number} delay={i * 0.1} as="article" className="rounded-2xl border border-ink/10 bg-paper p-7 transition hover:-translate-y-1 hover:border-ink/25 dark:border-dark-text/10 dark:bg-dark-card dark:hover:border-dark-text/25">
              <span className="mb-8 block text-xs font-bold tracking-[0.12em] text-accent dark:text-dark-accent">{pillar.number}</span>
              <h3 className="mb-2 text-lg font-semibold">{pillar.title}</h3>
              <p className="text-sm leading-relaxed text-ink-soft dark:text-dark-muted">{pillar.description}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <Link href="/services" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ink transition hover:text-accent dark:text-dark-text dark:hover:text-dark-accent">
            See the full engagement model
            <span aria-hidden="true">→</span>
          </Link>
        </Reveal>
      </section>

      <section className="border-y border-ink/10 bg-cream-deep/60 py-14 dark:border-dark-text/10 dark:bg-dark-surface sm:py-16">
        <div className="mx-auto grid w-[min(1120px,calc(100%-2rem))] grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
          {proof.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08} className="border-l border-ink/10 pl-5 first:border-l-0 first:pl-0 dark:border-dark-text/10 sm:border-t-0">
              <strong className="mb-1 block text-3xl font-medium tracking-tight sm:text-4xl">{stat.value}</strong>
              <span className="text-sm text-ink-soft dark:text-dark-muted">{stat.label}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto grid w-[min(1120px,calc(100%-2rem))] grid-cols-1 gap-10 py-20 sm:py-28 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent dark:text-dark-accent">Why not just use an off-the-shelf AI tool</p>
          <h2 className="max-w-[13ch] text-2xl font-medium tracking-tight sm:text-3xl lg:text-4xl">
            Generic AI answers generic questions.
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="text-base leading-relaxed text-ink-soft dark:text-dark-muted sm:text-lg">
            Your edge cases, your legacy systems, your judgment calls — a general-purpose assistant
            doesn&apos;t know any of that. We treat each engagement as one well-scoped problem: understand
            the workflow, ground the agent in your real data, and ship something your team actually
            trusts enough to rely on. No platform to adopt, no seat licenses, no roadmap dictated by
            someone else&apos;s product.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto w-[min(1120px,calc(100%-2rem))] pb-24 text-center sm:pb-32">
        <Reveal className="mx-auto max-w-[36rem]">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent dark:text-dark-accent">See it applied</p>
          <h2 className="text-2xl font-medium tracking-tight sm:text-3xl lg:text-4xl">A few of the problems worth automating.</h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft dark:text-dark-muted sm:text-lg">
            Concrete examples of the kind of work we take on — the shape of the problem, not a sales pitch.
          </p>
          <Link
            href="/work"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-6 font-semibold text-cream shadow-[0_14px_34px_rgba(23,22,15,0.18)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(23,22,15,0.24)] dark:bg-dark-text dark:text-dark-bg"
          >
            Explore example use cases
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
