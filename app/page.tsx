import Image from "next/image";
import { ContactForm } from "./components/ContactForm";

const email = "yeshthalapaneni@gmail.com";
const address = "8213 Amos Hunter Way, Ellicott City, Maryland";

const services = [
  {
    eyebrow: "01",
    title: "Organize",
    description:
      "We audit the systems you already have, clean the definitions that teams depend on, and design models, ownership, governance, and quality checks that make data trustworthy.",
    points: ["Source-system assessment", "Data modeling and metric definitions", "Quality controls and governance"],
  },
  {
    eyebrow: "02",
    title: "Build",
    description:
      "We design and ship the platform layer: pipelines, warehouses or lakehouses, orchestration, observability, and deployment practices that hold up in production.",
    points: ["Batch and streaming pipelines", "Warehouse and lakehouse architecture", "Production orchestration and monitoring"],
  },
  {
    eyebrow: "03",
    title: "Integrate",
    description:
      "We connect analytics, ML, and AI workflows to the platform so teams can use reliable data inside the decisions and products that matter most.",
    points: ["Analytics-ready semantic layers", "ML feature and model integrations", "Decision workflows and enablement"],
  },
];

const process = [
  ["Discover", "Clarify the business goals, data sources, pain points, and operating constraints before recommending technology."],
  ["Design", "Translate the findings into a pragmatic roadmap, architecture, and delivery plan that teams can understand."],
  ["Build", "Implement the highest-value platform pieces with clean documentation, testing, monitoring, and handoff."],
  ["Scale", "Strengthen governance, reliability, and adoption so the platform keeps improving as the company grows."],
];

const outcomes = [
  "A trusted source of truth for core metrics and operating data.",
  "Data pipelines and platforms that are observable, documented, and maintainable.",
  "Analytics and ML initiatives grounded in clean, production-ready data.",
  "A delivery partner who can work with founders, operators, analysts, and engineers.",
];

const faqs = [
  {
    question: "What kinds of companies do you work with?",
    answer:
      "We work with growing companies that have outgrown spreadsheets, one-off dashboards, or fragile data scripts and need a more reliable data foundation.",
  },
  {
    question: "Do you only advise, or do you implement?",
    answer:
      "Both. We can define the roadmap and architecture, then build the pipelines, data models, orchestration, and integration layers needed to put the platform into production.",
  },
  {
    question: "Which tools do you use?",
    answer:
      "We choose tools around the client’s environment and constraints. Common patterns include modern warehouses or lakehouses, orchestration, transformation frameworks, BI layers, and ML services.",
  },
  {
    question: "Can you help with AI initiatives?",
    answer:
      "Yes, but we start with the data foundation. We help connect ML and AI models to governed, reliable data so those systems can be used safely in real workflows.",
  },
];

export default function Home() {
  return (
    <>
      <header className="site-header">
        <a className="logo-link" href="#top" aria-label="scaleveda home">
          <Image src="/scaleveda-logo.svg" alt="scaleveda" width={690} height={170} priority />
        </a>
        <nav className="nav" aria-label="Primary navigation">
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#faq">FAQ</a>
          <a href="#contact" className="nav-cta">Book a call</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Data platform consulting for growing companies</p>
            <h1 id="hero-title">From messy data to production-grade platforms.</h1>
            <p className="hero-lede">
              ScaleVeda helps teams organize scattered data, build scalable platform foundations,
              and integrate analytics, ML, and AI into the business decisions that matter.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#contact">Book a call</a>
              <a className="button button-light" href="#services">Explore services</a>
            </div>
          </div>
          <div className="hero-panel" aria-label="ScaleVeda platform outcomes">
            <div className="panel-topline">
              <span>Clean foundation</span>
              <span>Production ready</span>
            </div>
            <div className="data-card primary-card">
              <span className="card-label">Current state</span>
              <strong>Messy tools, duplicate metrics, fragile pipelines</strong>
            </div>
            <div className="platform-arrow" aria-hidden="true">→</div>
            <div className="data-card">
              <span className="card-label">ScaleVeda platform</span>
              <strong>Governed models, reliable pipelines, integrated intelligence</strong>
            </div>
          </div>
        </section>

        <section className="section-shell split-intro" aria-label="ScaleVeda positioning">
          <p className="kicker">What changes when data scales cleanly</p>
          <h2>Teams stop debating the numbers and start using them.</h2>
          <p>
            Growth adds tools, customers, processes, and complexity. Without a strong data platform,
            decision-making slows down. We bring structure to that complexity, then build the systems
            that make reliable data available across the company.
          </p>
        </section>

        <section className="section-shell" id="services" aria-labelledby="services-title">
          <div className="section-heading">
            <p className="eyebrow">Services</p>
            <h2 id="services-title">Three connected pillars for a stronger data foundation.</h2>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <span className="service-number">{service.eyebrow}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>
                  {service.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="process-section" id="process" aria-labelledby="process-title">
          <div className="section-shell">
            <div className="section-heading inverted">
              <p className="eyebrow">How we work</p>
              <h2 id="process-title">A practical path from discovery to scale.</h2>
            </div>
            <div className="process-grid">
              {process.map(([title, description], index) => (
                <article className="process-card" key={title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell outcomes" aria-labelledby="outcomes-title">
          <div>
            <p className="eyebrow">Why ScaleVeda</p>
            <h2 id="outcomes-title">Senior data-platform judgment without unnecessary complexity.</h2>
          </div>
          <div className="outcome-list">
            {outcomes.map((outcome) => (
              <p key={outcome}>{outcome}</p>
            ))}
          </div>
        </section>

        <section className="section-shell faq" id="faq" aria-labelledby="faq-title">
          <div className="section-heading">
            <p className="eyebrow">FAQ</p>
            <h2 id="faq-title">Common questions.</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="section-shell contact-grid">
            <div className="contact-copy">
              <p className="eyebrow">Contact</p>
              <h2 id="contact-title">Ready to clean up the data layer?</h2>
              <p>
                Tell us what is slowing your team down. We will respond with a practical next step,
                whether that is an audit, architecture plan, or focused build engagement.
              </p>
              <div className="contact-details">
                <a href={`mailto:${email}`}>{email}</a>
                <span>{address}</span>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <Image src="/scaleveda-logo-light.svg" alt="scaleveda" width={690} height={170} />
          <div>
            <a href={`mailto:${email}`}>{email}</a>
            <p>{address}</p>
            <p>© {new Date().getFullYear()} ScaleVeda. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
