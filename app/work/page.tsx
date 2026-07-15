import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "../components/Reveal";

export const metadata: Metadata = {
  title: "Work | ScaleVeda",
  description:
    "Example use cases for custom AI agents — the shape of problems ScaleVeda takes on, from operations triage to internal research support.",
};

const useCases = [
  {
    tag: "Operations",
    title: "Exception-handling agent for order operations",
    outcome: "Routes and resolves the routine 70% of exceptions before a person sees them",
    description:
      "Order exceptions — mismatched addresses, failed payments, inventory conflicts — usually queue up for a person to triage one by one. An agent grounded in the order system and business rules can resolve the routine cases directly and hand the ambiguous ones to a person with full context attached.",
  },
  {
    tag: "Research & analysis",
    title: "Internal research agent for analyst teams",
    outcome: "Turns a multi-hour research pull into a sourced first draft",
    description:
      "Analysts spend real time assembling context from internal docs, tickets, and past decisions before they can even start the actual analysis. An agent that retrieves from those sources directly and drafts a structured brief lets the analyst start from a draft instead of a blank page.",
  },
  {
    tag: "Customer operations",
    title: "Support triage agent for a multi-product team",
    outcome: "Classifies, prioritizes, and drafts a first response in seconds",
    description:
      "Support volume across several products makes manual triage the bottleneck, not the actual resolution. An agent that reads the ticket, checks account and product context, and drafts a response lets the team review and send instead of writing from scratch.",
  },
  {
    tag: "Compliance & review",
    title: "Document review agent for contract intake",
    outcome: "Flags non-standard terms before a human review pass",
    description:
      "Reviewing incoming contracts for non-standard clauses is repetitive and error-prone under volume. An agent that compares each document against your standard terms and flags deviations gives reviewers a shorter, sharper list to work through.",
  },
];

export default function WorkPage() {
  return (
    <main className="overflow-x-clip">
      <section className="mx-auto w-[min(1120px,calc(100%-2rem))] py-16 sm:py-20">
        <Reveal>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent dark:text-dark-accent">Work</p>
          <h1 className="max-w-[22ch] text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl">
            The shape of problems worth automating.
          </h1>
          <p className="mt-6 max-w-[42rem] text-base leading-relaxed text-ink-soft dark:text-dark-muted sm:text-lg">
            We&apos;re a young studio, so these are illustrative use cases — the kind of well-bounded,
            data-grounded problem an agent is actually good at — rather than a client roster. If one of
            these looks like your problem, that&apos;s a good sign we&apos;re a fit.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto w-[min(1120px,calc(100%-2rem))] pb-20 sm:pb-28">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {useCases.map((useCase, i) => (
            <Reveal key={useCase.title} delay={i * 0.08} as="article" className="rounded-2xl border border-ink/10 bg-paper p-7 dark:border-dark-text/10 dark:bg-dark-card">
              <span className="mb-4 inline-block rounded-full border border-ink/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.06em] text-ink-soft dark:border-dark-text/15 dark:text-dark-muted">
                {useCase.tag}
              </span>
              <h3 className="mb-2 text-lg font-semibold leading-snug">{useCase.title}</h3>
              <p className="text-sm leading-relaxed text-ink-soft dark:text-dark-muted">{useCase.description}</p>
              <p className="mt-4 text-lg font-semibold tracking-tight">{useCase.outcome}</p>
              <p className="mt-5 border-t border-ink/10 pt-4 text-xs italic text-ink-soft/70 dark:border-dark-text/10 dark:text-dark-muted/70">
                Illustrative example — not a completed client engagement.
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto w-[min(1120px,calc(100%-2rem))] pb-24 text-center sm:pb-32">
        <Reveal className="mx-auto max-w-[36rem]">
          <h2 className="text-2xl font-medium tracking-tight sm:text-3xl lg:text-4xl">See your problem in this list?</h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft dark:text-dark-muted sm:text-lg">
            Tell us what the workflow looks like today and we&apos;ll tell you honestly if it&apos;s a fit.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-6 font-semibold text-cream transition hover:-translate-y-0.5 dark:bg-dark-text dark:text-dark-bg"
          >
            Start a conversation
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
