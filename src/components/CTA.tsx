"use client";

import { useState } from "react";

const PRODUCT_OPTIONS = [
  "Implant Solutions",
  "Removable Dentures",
  "Precision Frameworks",
  "Fixed Restorations",
  "Attachments",
  "Orthodontic & Protective",
];

export default function CTA() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [disabled, setDisabled] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status !== "idle") return;

    setStatus("sending");
    setDisabled(true);

    setTimeout(() => {
      setStatus("sent");
      setTimeout(() => {
        e.currentTarget.reset();
        setStatus("idle");
        setDisabled(false);
      }, 3000);
    }, 1500);
  };

  return (
    <section className="cta-section" id="contact">
      <div className="container">
        <div className="cta-box">
          <div className="cta-content">
            <h2>Ready to Partner With Us?</h2>
            <p>
              Send us your case details and we&apos;ll get back to you within 24
              hours with a quote and timeline.
            </p>
          </div>
          <form className="cta-form" onSubmit={handleSubmit} noValidate={false}>
            <div className="form-row">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Email Address" required />
            </div>
            <div className="form-row">
              <input type="text" placeholder="Clinic / Company Name" />
              <select defaultValue="">
                <option value="" disabled>
                  Product Interest
                </option>
                {PRODUCT_OPTIONS.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            </div>
            <textarea
              placeholder="Tell us about your case requirements..."
              rows={4}
            />
            <button
              type="submit"
              className="btn btn-primary btn-full"
              disabled={disabled}
              style={
                status === "sent"
                  ? {
                      background: "linear-gradient(135deg, #10B981, #059669)",
                      opacity: 1,
                    }
                  : undefined
              }
            >
              {status === "idle" && (
                <>
                  Send Inquiry
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </>
              )}
              {status === "sending" && "Sending..."}
              {status === "sent" && "✓ Message Sent!"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
