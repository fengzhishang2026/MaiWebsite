import type { ReactNode } from "react";
import type { Dictionary } from "@/app/[lang]/dictionaries";

const WHY_ICONS: ReactNode[] = [
  <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" />,
  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />,
  <path d="M12 8v4l3 3M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
  <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />,
];

const CERT_ICONS: ReactNode[] = [
  <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />,
  <path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4" />,
  <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" />,
];

export default function WhyUs({ dict }: { dict: Dictionary["whyUs"] }) {
  return (
    <section className="why-us" id="about">
      <div className="container">
        <div className="why-grid">
          <div className="why-left">
            <span className="section-tag">{dict.tag}</span>
            <h2 className="section-title">{dict.title}</h2>
            <p className="section-desc">{dict.desc}</p>

            <div className="why-list">
              {dict.items.map((item, i) => (
                <div className="why-item reveal" data-reveal key={item.title}>
                  <div className="why-icon">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      {WHY_ICONS[i]}
                    </svg>
                  </div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="why-right">
            {dict.certs.map((cert, i) => (
              <div className="cert-card reveal" data-reveal key={cert.title}>
                <div className="cert-badge">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    {CERT_ICONS[i]}
                  </svg>
                </div>
                <div>
                  <h4>{cert.title}</h4>
                  <p>{cert.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
