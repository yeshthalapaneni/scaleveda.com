"use client";

import { FormEvent, useMemo, useState } from "react";

type FormValues = {
  name: string;
  email: string;
  company: string;
  message: string;
  website: string;
};

type FormStatus = {
  type: "idle" | "success" | "error";
  message: string;
};

const initialValues: FormValues = {
  name: "",
  email: "",
  company: "",
  message: "",
  website: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const inputClasses =
  "w-full rounded-xl border border-ink/15 bg-cream px-4 py-3 text-ink outline-none transition focus:border-ink/40 dark:border-dark-text/15 dark:bg-dark-bg dark:text-dark-text dark:focus:border-dark-text/40 aria-[invalid=true]:border-red-500";

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [status, setStatus] = useState<FormStatus>({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validationError = useMemo(() => {
    if (!values.name.trim()) return "Please enter your name.";
    if (!emailPattern.test(values.email.trim())) return "Please enter a valid email address.";
    if (values.message.trim().length < 20) return "Please share a little more context in your message.";
    return "";
  }, [values.email, values.message, values.name]);

  function updateField(field: keyof FormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    if (status.type !== "idle") {
      setStatus({ type: "idle", message: "" });
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (validationError) {
      setStatus({ type: "error", message: validationError });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message ?? "The message could not be sent. Please try again.");
      }

      setStatus({
        type: "success",
        message: "Thanks — your message has been sent. We will get back to you shortly.",
      });
      setValues(initialValues);
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "The message could not be sent. Please try again or email us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      className="grid gap-4 rounded-2xl border border-ink/10 bg-paper p-6 shadow-[0_22px_70px_rgba(23,22,15,0.09)] dark:border-dark-text/10 dark:bg-dark-surface sm:p-8"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold">
          <span>Name</span>
          <input
            className={inputClasses}
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={(event) => updateField("name", event.target.value)}
            required
            aria-invalid={status.type === "error" && !values.name.trim()}
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold">
          <span>Email</span>
          <input
            className={inputClasses}
            type="email"
            name="email"
            autoComplete="email"
            value={values.email}
            onChange={(event) => updateField("email", event.target.value)}
            required
            aria-invalid={status.type === "error" && !emailPattern.test(values.email.trim())}
          />
        </label>
      </div>

      <label className="grid gap-2 text-sm font-semibold">
        <span>Company <em className="font-medium not-italic text-ink-soft dark:text-dark-muted">(optional)</em></span>
        <input
          className={inputClasses}
          name="company"
          autoComplete="organization"
          value={values.company}
          onChange={(event) => updateField("company", event.target.value)}
        />
      </label>

      <label className="grid gap-2 text-sm font-semibold">
        <span>Message</span>
        <textarea
          className={`${inputClasses} resize-y`}
          name="message"
          rows={6}
          value={values.message}
          onChange={(event) => updateField("message", event.target.value)}
          required
          minLength={20}
          placeholder="Tell us about the workflow you want to automate and what's slow or error-prone about it today."
          aria-invalid={status.type === "error" && values.message.trim().length < 20}
        />
      </label>

      <label className="absolute left-[-10000px] h-px w-px overflow-hidden" aria-hidden="true" tabIndex={-1}>
        <span>Website</span>
        <input
          name="website"
          value={values.website}
          onChange={(event) => updateField("website", event.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </label>

      {status.message ? (
        <p
          className={`rounded-xl px-4 py-3 text-sm font-semibold ${
            status.type === "success"
              ? "bg-green-600/10 text-green-700 dark:text-green-400"
              : "bg-red-600/10 text-red-700 dark:text-red-400"
          }`}
          role={status.type === "error" ? "alert" : "status"}
        >
          {status.message}
        </p>
      ) : null}

      <button
        className="inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-6 font-semibold text-cream transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 dark:bg-dark-text dark:text-dark-bg"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending…" : "Send inquiry"}
      </button>
    </form>
  );
}
