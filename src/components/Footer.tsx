import type { Dictionary } from "@/app/[lang]/dictionaries";

export default function Footer({ dict }: { dict: Dictionary["footer"] }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#home" className="nav-logo">
              <svg className="logo-icon" viewBox="0 0 40 40" fill="none">
                <path
                  d="M20 5C12 5 8 12 8 18c0 3 1 5 2 7-2 1-3 3-3 5 0 4 4 7 9 7h8c5 0 9-3 9-7 0-2-1-4-3-5 1-2 2-4 2-7 0-6-4-13-12-13z"
                  fill="url(#footerGrad)"
                />
                <defs>
                  <linearGradient
                    id="footerGrad"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" style={{ stopColor: "#00C6FF" }} />
                    <stop offset="100%" style={{ stopColor: "#0072FF" }} />
                  </linearGradient>
                </defs>
              </svg>
              <span className="logo-text">
                Denta<span className="logo-accent">Craft</span>
              </span>
            </a>
            <p>{dict.brand}</p>
            <div className="footer-contact">
              <a href={`mailto:${dict.contactEmail}`}>{dict.contactEmail}</a>
              <a
                href="https://wa.me/8613800000000"
                target="_blank"
                rel="noopener"
              >
                {dict.whatsapp}
              </a>
            </div>
          </div>

          {dict.columns.map((col) => (
            <div className="footer-links" key={col.title}>
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p>{dict.copyright}</p>
          <div className="footer-bottom-links">
            {dict.bottomLinks.map((link) => (
              <a href="#" key={link}>
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
