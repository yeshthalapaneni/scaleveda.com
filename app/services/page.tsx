import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "../components/Reveal";
import { Faq } from "../components/Faq";

export const metadata: Metadata = {
  title: "Services | ScaleVeda",
  description:
    "How ScaleVeda designs, builds, and operates custom AI agents — from diagnosing the right workflow to running the agent in production.",
};

const services = [
  {
    number: "01",
    title: "Agent design",
    description:
      "We map the workflow the agent needs to fit into: who does the task today, what decisions it involves, and which data sources are ground truth.",
    points: ["Workflow and decision mapping", "Data source and access audit", "Scope, guardrails, and success metrics"],
  },
  {
    number: "02",
    title: "Agent build",
    description:
      "We build the agent against your real systems — retrieval over your own data, tool use scoped to what the task needs, and evaluation before anything ships.",
    points: ["Retrieval grounded in your data", "Scoped tool and system access", "Offline evaluation against real cases"],
  },
  {
    number: "03",
    title: "Agent operations",
    description:
      "Shipping is the start, not the end. We monitor how the agent performs against real outcomes and keep it aligned as your business changes.",
    points: ["Production monitoring and alerting", "Human-in-the-loop review paths", "Ongoing tuning as workflows change"],
  },
];

const process = [
  ["Discover", "A short working session to find the highest-value, well-bounded task worth automating — not a wish list."],
  ["Prototype", "A working agent against a sample of your real data within roughly two weeks, so you're judging something concrete."],
  ["Build", "We harden the prototype: access controls, evaluation, fallback paths, and the plumbing to run it reliably."],
  ["Operate", "We hand over documentation and monitoring, and stay involved as the agent meets more of your real workflow."],
];

const faqs = [
  {
    question: "What counts as a 'unique business use case'?",
    answer:
      "Any repeatable task where judgment currently sits with a person and depends on your own data — triage, drafting, research, exception handling, internal support. If it's specific to how your business runs, it's a candidate.",
  },
  {
    question: "Do you build on top of existing AI platforms, or from scratch?",
    answer:
      "We choose the model and tooling around your constraints — cost, latency, data residency, existing infrastructure. Sometimes that's a hosted model API, sometimes a self-hosted model. You're not locked into a single vendor's stack.",
  },
  {
    question: "How do you keep an agent from making bad calls?",
    answer:
      "Every agent ships with an explicit scope, an evaluation set built from real cases, and a human-in-the-loop path for anything above the confidence threshold we agree on with you. Nothing runs fully autonomous by default.",
  },
  {
    question: "What do we own at the end of the engagement?",
    answer:
      "The code, the prompts, the evaluation harness, and the documentation. There's no proprietary platform you need to keep paying for to keep the agent running.",
  },
];

export default function ServicesPage() {
  return (
    <main className="overflow-x-clip">
      <section className="mx-auto w-[min(1120px,calc(100%-2rem))] py-16 sm:py-20">
        <Reveal>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent dark:text-dark-accent">Services</p>
          <h1 className="max-w-[22ch] text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl">
            Design, build, and operate — one agent at a time.
          </h1>
          <p className="mt-6 max-w-[42rem] text-base leading-relaxed text-ink-soft dark:text-dark-muted sm:text-lg">
            We don&apos;t sell a platform or a seat license. Each engagement is scoped around one real
            workflow in your business, from the first working prototype through running it in production.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto w-[min(1120px,calc(100%-2rem))] pb-20 sm:pb-28">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.number} delay={i * 0.1} as="article" className="flex min-h-[26rem] flex-col rounded-2xl border border-ink/10 bg-paper p-7 dark:border-dark-text/10 dark:bg-dark-card">
              <span className="mb-auto block text-xs font-bold tracking-[0.12em] text-accent dark:text-dark-accent">{service.number}</span>
              <h3 className="mb-2 mt-6 text-lg font-semibold">{service.title}</h3>
              <p className="text-sm leading-relaxed text-ink-soft dark:text-dark-muted">{service.description}</p>
              <ul className="mt-5 grid gap-2">
                {service.points.map((point) => (
                  <li key={point} className="relative pl-4 text-sm font-medium">
                    <span className="absolute left-0 top-[0.55em] h-1.5 w-1.5 rounded-full bg-ink dark:bg-dark-text" />
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-ink/10 bg-cream-deep/60 py-16 dark:border-dark-text/10 dark:bg-dark-surface sm:py-20">
        <div className="mx-auto w-[min(1120px,calc(100%-2rem))]">
          <Reveal className="mb-12 max-w-[46rem]">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent dark:text-dark-accent">Engagement model</p>
            <h2 className="text-2xl font-medium tracking-tight sm:text-3xl lg:text-4xl">A practical path from idea to production.</h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 dark:border-dark-text/10 dark:bg-dark-text/10 sm:grid-cols-2 lg:grid-cols-4">
            {process.map(([title, description], index) => (
              <Reveal key={title} delay={index * 0.08} as="article" className="min-h-[15rem] bg-cream-deep p-6 dark:bg-dark-surface">
                <span className="mb-10 block text-xs font-bold text-accent dark:text-dark-accent">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mb-2 text-base font-semibold">{title}</h3>
                <p className="text-sm leading-relaxed text-ink-soft dark:text-dark-muted">{description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-[min(1120px,calc(100%-2rem))] py-20 sm:py-28">
        <Reveal className="mb-10 max-w-[46rem]">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent dark:text-dark-accent">FAQ</p>
          <h2 className="text-2xl font-medium tracking-tight sm:text-3xl lg:text-4xl">Common questions.</h2>
        </Reveal>
        <Faq items={faqs} />
      </section>

      <section className="mx-auto w-[min(1120px,calc(100%-2rem))] pb-24 text-center sm:pb-32">
        <Reveal className="mx-auto max-w-[36rem]">
          <h2 className="text-2xl font-medium tracking-tight sm:text-3xl lg:text-4xl">Have a workflow in mind?</h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft dark:text-dark-muted sm:text-lg">
            Tell us what it looks like today. We&apos;ll tell you if it&apos;s a good fit.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-6 font-semibold text-cream transition hover:-translate-y-0.5 dark:bg-dark-text dark:text-dark-bg">
              Start a conversation
            </Link>
            <Link href="/work" className="inline-flex min-h-12 items-center justify-center rounded-full border border-ink/20 px-6 font-semibold text-ink transition hover:-translate-y-0.5 hover:border-ink/40 dark:border-dark-text/20 dark:text-dark-text dark:hover:border-dark-text/40">
              See example use cases
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
