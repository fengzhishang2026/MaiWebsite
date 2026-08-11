import type { ReactNode } from "react";
import type { Dictionary } from "@/app/[lang]/dictionaries";

const PRODUCT_ICONS: ReactNode[] = [
  <path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19" />,
  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.3 1.5 4.05 3 5.5l7 7z" />,
  <>,
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
  </>,
  <>
    <circle cx="12" cy="12" r="10" />
    <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" />
  </>,
  <>
    <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
  </>,
  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
];

export default function Products({ dict }: { dict: Dictionary["products"] }) {
  return (
    <section className="products" id="products">
      <div className="container">
        <div className="section-header reveal" data-reveal>
          <span className="section-tag">{dict.tag}</span>
          <h2 className="section-title">{dict.title}</h2>
          <p className="section-desc">{dict.desc}</p>
        </div>

        <div className="product-grid">
          {dict.items.map((product, i) => (
            <div className="product-card reveal" data-reveal key={product.title}>
              <div className="product-visual">
                <div className="product-icon-wrap">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    {PRODUCT_ICONS[i]}
                  </svg>
                </div>
                <div className="product-shape" />
              </div>
              <div className="product-info">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <ul className="product-features">
                  {product.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <a href="#" className="product-link">
                  {dict.learnMore}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
