"use client";

import { useRef, useState } from "react";
import type { FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import type { ContactFormData, FormStatus } from "@/types";

const subjects = [
  "General question",
  "Technical support",
  "Pricing and billing",
  "Teams and cohorts",
  "Partnership",
  "Press",
] as const;

type FieldErrors = Partial<Record<keyof ContactFormData, string>>;

const emptyForm: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const labels: Record<keyof ContactFormData, string> = {
  name: "Name",
  email: "Email",
  subject: "Subject",
  message: "Message",
};

function validate(data: ContactFormData): FieldErrors {
  const errors: FieldErrors = {};

  if (!data.name.trim()) {
    errors.name = "Tell us who to reply to.";
  }

  if (!data.email.trim()) {
    errors.email = "We need an address to reply to.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email.trim())) {
    errors.email = "That address does not look complete.";
  }

  if (!data.subject) {
    errors.subject = "Pick the closest subject so this reaches the right desk.";
  }

  if (!data.message.trim()) {
    errors.message = "Add a short description of what you need.";
  } else if (data.message.trim().length < 20) {
    errors.message = "A little more detail will get you a better answer.";
  }

  return errors;
}

export function ContactForm() {
  const [form, setForm] = useState<ContactFormData>(emptyForm);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [submitted, setSubmitted] = useState(false);
  const summaryRef = useRef<HTMLDivElement>(null);

  function update<K extends keyof ContactFormData>(
    key: K,
    value: ContactFormData[K],
  ) {
    setForm((previous) => ({ ...previous, [key]: value }));
    if (errors[key]) {
      setErrors((previous) => ({ ...previous, [key]: undefined }));
    }
  }

  function handleBlur(key: keyof ContactFormData) {
    if (!submitted) return;
    const fieldErrors = validate(form);
    setErrors((previous) => ({ ...previous, [key]: fieldErrors[key] }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);

    const fieldErrors = validate(form);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }

    setErrors({});
    setStatus("loading");
    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setStatus("success");
      setForm(emptyForm);
      setSubmitted(false);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-purple-200 bg-purple-50/50 p-8 shadow-xl">
        <h2 className="text-xl font-bold text-[#0B1E3D]">Message sent!</h2>
        <p className="mt-2 max-w-md text-sm text-slate-600">
          Our team has received your message. We reply within one business day.
        </p>
        <Button
          variant="secondary"
          size="md"
          className="mt-6"
          onClick={() => setStatus("idle")}
        >
          Send another message
        </Button>
      </div>
    );
  }

  const errorEntries = (
    Object.entries(errors) as [keyof ContactFormData, string | undefined][]
  ).filter((entry): entry is [keyof ContactFormData, string] =>
    Boolean(entry[1]),
  );

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6 font-sans">
      {errorEntries.length > 0 && (
        <div
          ref={summaryRef}
          tabIndex={-1}
          role="alert"
          className="rounded-xl border border-red-200 bg-red-50 px-5 py-4"
        >
          <p className="text-sm font-bold text-red-600">
            {errorEntries.length === 1
              ? "One field needs attention"
              : `${errorEntries.length} fields need attention`}
          </p>
          <ul className="mt-2 space-y-1">
            {errorEntries.map(([key, message]) => (
              <li key={key} className="text-xs text-red-700">
                <a
                  href={`#contact-${key}`}
                  className="underline underline-offset-2"
                >
                  {labels[key]}
                </a>
                {" — "}
                {message}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <Input
          id="contact-name"
          name="name"
          label="Name"
          type="text"
          autoComplete="name"
          value={form.name}
          error={errors.name}
          onChange={(event) => update("name", event.target.value)}
          onBlur={() => handleBlur("name")}
        />
        <Input
          id="contact-email"
          name="email"
          label="Email"
          type="email"
          autoComplete="email"
          value={form.email}
          error={errors.email}
          onChange={(event) => update("email", event.target.value)}
          onBlur={() => handleBlur("email")}
        />
      </div>

      <Select
        id="contact-subject"
        name="subject"
        label="Subject"
        value={form.subject}
        error={errors.subject}
        onChange={(event) => update("subject", event.target.value)}
        onBlur={() => handleBlur("subject")}
      >
        <option value="" disabled className="bg-white text-slate-400">
          Choose a subject
        </option>
        {subjects.map((subject) => (
          <option key={subject} value={subject} className="bg-white text-slate-900">
            {subject}
          </option>
        ))}
      </Select>

      <Textarea
        id="contact-message"
        name="message"
        label="Message"
        rows={6}
        placeholder="What can we help you with?"
        hint="Specific details help us give you a faster answer."
        value={form.message}
        error={errors.message}
        onChange={(event) => update("message", event.target.value)}
        onBlur={() => handleBlur("message")}
      />

      {status === "error" && (
        <p role="alert" className="text-sm text-red-600">
          That did not send. Try again, or email us directly.
        </p>
      )}

      <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
        <Button
          type="submit"
          size="lg"
          loading={status === "loading"}
          loadingLabel="Sending..."
        >
          Send message
        </Button>
        <p className="text-xs text-slate-500">All fields are required.</p>
      </div>
    </form>
  );
}
