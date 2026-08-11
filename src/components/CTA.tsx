"use client";

import { useState } from "react";
import type { Dictionary } from "@/app/[lang]/dictionaries";

export default function CTA({ dict }: { dict: Dictionary["cta"] }) {
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
            <h2>{dict.heading}</h2>
            <p>{dict.desc}</p>
          </div>
          <form className="cta-form" onSubmit={handleSubmit} noValidate={false}>
            <div className="form-row">
              <input type="text" placeholder={dict.name} required />
              <input type="email" placeholder={dict.email} required />
            </div>
            <div className="form-row">
              <input type="text" placeholder={dict.company} />
              <select defaultValue="">
                <option value="" disabled>
                  {dict.productInterest}
                </option>
                {dict.productOptions.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            </div>
            <textarea placeholder={dict.message} rows={4} />
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
                  {dict.sendInquiry}
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
              {status === "sending" && dict.sending}
              {status === "sent" && dict.sent}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
