"use client";

import { useState, type FormEvent } from "react";

const FORM_ENDPOINT = "https://formsubmit.co/ajax/info@intogreathousing.co.uk";

export default function ContactForm({
  showOrgFields = false,
  subject = "New Contact Enquiry",
}: {
  showOrgFields?: boolean;
  subject?: string;
}) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <h3 className="text-lg font-semibold text-green-800 mb-2">
          Message Sent
        </h3>
        <p className="text-sm text-green-700">
          Thank you for getting in touch. We&apos;ll respond within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="hidden" name="_subject" value={subject} />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />

      <div>
        <label htmlFor="contact-name" className="block text-sm font-medium text-charcoal mb-1">
          Name *
        </label>
        <input
          type="text"
          id="contact-name"
          name="name"
          required
          className="w-full px-4 py-3 border border-grey-mid rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-periwinkle focus:border-transparent"
          placeholder="Your full name"
        />
      </div>

      {showOrgFields && (
        <>
          <div>
            <label htmlFor="organisation" className="block text-sm font-medium text-charcoal mb-1">
              Organisation
            </label>
            <input
              type="text"
              id="organisation"
              name="organisation"
              className="w-full px-4 py-3 border border-grey-mid rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-periwinkle focus:border-transparent"
              placeholder="Your organisation"
            />
          </div>
          <div>
            <label htmlFor="role" className="block text-sm font-medium text-charcoal mb-1">
              Role
            </label>
            <input
              type="text"
              id="role"
              name="role"
              className="w-full px-4 py-3 border border-grey-mid rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-periwinkle focus:border-transparent"
              placeholder="Your role"
            />
          </div>
        </>
      )}

      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium text-charcoal mb-1">
          Email *
        </label>
        <input
          type="email"
          id="contact-email"
          name="email"
          required
          className="w-full px-4 py-3 border border-grey-mid rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-periwinkle focus:border-transparent"
          placeholder="Your email address"
        />
      </div>

      <div>
        <label htmlFor="contact-phone" className="block text-sm font-medium text-charcoal mb-1">
          Phone
        </label>
        <input
          type="tel"
          id="contact-phone"
          name="phone"
          className="w-full px-4 py-3 border border-grey-mid rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-periwinkle focus:border-transparent"
          placeholder="Your phone number"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="w-full px-4 py-3 border border-grey-mid rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-periwinkle focus:border-transparent resize-vertical"
          placeholder="How can we help?"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-periwinkle hover:bg-periwinkle-dark text-white font-semibold py-3.5 px-6 rounded-lg transition-colors disabled:opacity-60 disabled:cursor-not-allowed text-sm"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>

      {status === "error" && (
        <p className="text-red-600 text-sm text-center">
          Something went wrong. Please try again or call us directly.
        </p>
      )}
    </form>
  );
}
