"use client";

import { useState, type FormEvent } from "react";

const FORM_ENDPOINT = "https://formsubmit.co/ajax/info@intogreathousing.co.uk";

export default function PropertyForm() {
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
          Details Submitted
        </h3>
        <p className="text-sm text-green-700">
          Thank you. A member of our team will be in touch within 24 hours to
          discuss your guaranteed rent quote.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="hidden" name="_subject" value="New Property Submission" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 border border-grey-mid rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-periwinkle focus:border-transparent"
          placeholder="Your full name"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-1">
          Phone Number *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          className="w-full px-4 py-3 border border-grey-mid rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-periwinkle focus:border-transparent"
          placeholder="Your phone number"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 border border-grey-mid rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-periwinkle focus:border-transparent"
          placeholder="Your email address"
        />
      </div>

      <div>
        <label htmlFor="postcode" className="block text-sm font-medium text-charcoal mb-1">
          Property Postcode or Area *
        </label>
        <input
          type="text"
          id="postcode"
          name="postcode"
          required
          className="w-full px-4 py-3 border border-grey-mid rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-periwinkle focus:border-transparent"
          placeholder="e.g. B10 9PF or Sparkbrook"
        />
      </div>

      <div>
        <label htmlFor="bedrooms" className="block text-sm font-medium text-charcoal mb-1">
          Number of Bedrooms
        </label>
        <select
          id="bedrooms"
          name="bedrooms"
          className="w-full px-4 py-3 border border-grey-mid rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-periwinkle focus:border-transparent bg-white"
        >
          <option value="">Select</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6+">6+</option>
        </select>
      </div>

      <div>
        <label htmlFor="status" className="block text-sm font-medium text-charcoal mb-1">
          Property Status
        </label>
        <select
          id="status"
          name="property_status"
          className="w-full px-4 py-3 border border-grey-mid rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-periwinkle focus:border-transparent bg-white"
        >
          <option value="">Select</option>
          <option value="Empty">Empty</option>
          <option value="Tenanted">Tenanted</option>
          <option value="Available from a specific date">
            Available from a specific date
          </option>
        </select>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-periwinkle hover:bg-periwinkle-dark text-white font-semibold py-3.5 px-6 rounded-lg transition-colors disabled:opacity-60 disabled:cursor-not-allowed text-sm"
      >
        {status === "submitting" ? "Submitting..." : "Get My Guaranteed Rent Quote"}
      </button>

      {status === "error" && (
        <p className="text-red-600 text-sm text-center">
          Something went wrong. Please try again or call us directly.
        </p>
      )}
    </form>
  );
}
