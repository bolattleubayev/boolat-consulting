"use client";

import { useActionState, useEffect, useRef } from "react";
import { submitContact } from "@/app/contact/actions";

function Input({
  label,
  name,
  placeholder,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: "text" | "email";
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-slate-700">
        {label}
        {required ? <span className="text-slate-400"> *</span> : null}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-slate-900/10 bg-white px-4 py-3 text-sm text-slate-950 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy/25"
      />
    </label>
  );
}

export function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, null);
  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    if (state?.ok) formRef.current?.reset();
  }, [state?.ok]);

  return (
    <form ref={formRef} action={action} className="mt-8 space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Input label="Name" name="name" placeholder="Jane Doe" required />
        <Input
          label="Email"
          name="email"
          placeholder="jane@company.com"
          type="email"
          required
        />
      </div>
      <Input label="Company" name="company" placeholder="Company Inc." />

      <label className="block">
        <span className="text-sm font-medium text-slate-700">
          Project description<span className="text-slate-400"> *</span>
        </span>
        <textarea
          name="projectDescription"
          required
          placeholder="A short description of goals, timeline, and constraints."
          rows={6}
          className="mt-2 w-full resize-none rounded-2xl border border-slate-900/10 bg-white px-4 py-3 text-sm text-slate-950 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy/25"
        />
      </label>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={pending}
          className="inline-flex w-full items-center justify-center rounded-full bg-navy px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-navy-2 disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy/30 sm:w-auto"
        >
          {pending ? "Sending..." : "Send message"}
        </button>

        {state?.message ? (
          <p
            className={`text-sm ${
              state.ok ? "text-emerald-700" : "text-rose-700"
            }`}
            role="status"
          >
            {state.message}
          </p>
        ) : null}
      </div>

      <p className="text-xs text-slate-500">
        By sending, you agree to be contacted about your inquiry.
      </p>
    </form>
  );
}

