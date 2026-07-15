import type { Metadata } from "next";
import { ContactForm } from "../components/ContactForm";
import { Reveal } from "../components/Reveal";

export const metadata: Metadata = {
  title: "Contact | ScaleVeda",
  description: "Tell ScaleVeda about the workflow you want to automate. A real engineer responds within 24 hours.",
};

const email = "yeshthalapaneni@gmail.com";

export default function ContactPage() {
  return (
    <main className="overflow-x-clip">
      <section className="mx-auto w-[min(1120px,calc(100%-2rem))] py-16 sm:py-20">
        <Reveal>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent dark:text-dark-accent">Contact</p>
          <h1 className="max-w-[20ch] text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl">
            Tell us what you need to build.
          </h1>
          <p className="mt-6 max-w-[42rem] text-base leading-relaxed text-ink-soft dark:text-dark-muted sm:text-lg">
            Describe the workflow as it runs today — who does it, what it depends on, what&apos;s slow
            or error-prone about it. A real engineer responds within 24 hours, not a sales queue.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1fr] lg:gap-16">
          <Reveal delay={0.1}>
            <h2 className="mb-4 text-xl font-semibold">Reach us directly</h2>
            <div className="grid gap-1 font-medium">
              <a href={`mailto:${email}`} className="underline underline-offset-4">{email}</a>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
