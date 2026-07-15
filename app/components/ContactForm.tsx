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
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="field-grid">
        <label>
          <span>Name</span>
          <input
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={(event) => updateField("name", event.target.value)}
            required
            aria-invalid={status.type === "error" && !values.name.trim()}
          />
        </label>
        <label>
          <span>Email</span>
          <input
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

      <label>
        <span>Company <em>(optional)</em></span>
        <input
          name="company"
          autoComplete="organization"
          value={values.company}
          onChange={(event) => updateField("company", event.target.value)}
        />
      </label>

      <label>
        <span>Message</span>
        <textarea
          name="message"
          rows={6}
          value={values.message}
          onChange={(event) => updateField("message", event.target.value)}
          required
          minLength={20}
          placeholder="Tell us where your data platform stands today and what you need to improve."
          aria-invalid={status.type === "error" && values.message.trim().length < 20}
        />
      </label>

      <label className="honeypot" aria-hidden="true" tabIndex={-1}>
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
        <p className={`form-status ${status.type}`} role={status.type === "error" ? "alert" : "status"}>
          {status.message}
        </p>
      ) : null}

      <button className="button button-dark" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending…" : "Send inquiry"}
      </button>
    </form>
  );
}
