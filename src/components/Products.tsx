import type { ReactNode } from "react";

type Product = {
  title: string;
  description: string;
  features: string[];
  icon: ReactNode;
};

const PRODUCTS: Product[] = [
  {
    title: "Implant Solutions",
    description:
      "Bar overdentures, Malo implant bridges, custom abutments, and surgical guides — engineered for precision and longevity.",
    features: [
      "Screw-retained superstructures",
      "All-on-4 / All-on-6 concepts",
      "Digital implant planning",
    ],
    icon: (
      <path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19" />
    ),
  },
  {
    title: "Removable Dentures",
    description:
      "Full and partial dentures crafted with premium materials for natural aesthetics and superior comfort.",
    features: [
      "Complete & partial dentures",
      "Immediate & temporary options",
      "Flexible nylon frameworks",
    ],
    icon: (
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.3 1.5 4.05 3 5.5l7 7z" />
    ),
  },
  {
    title: "Precision Frameworks",
    description:
      "Co-Cr, titanium, and gold-electroformed frameworks produced with high precision for exceptional fit and durability.",
    features: [
      "CAD/CAM milled frameworks",
      "Metal-free alternatives",
      "3D-printed options available",
    ],
    icon: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </>
    ),
  },
  {
    title: "Fixed Restorations",
    description:
      "Zirconia crowns and bridges with lifelike aesthetics and strength for long-span restorations in any position.",
    features: [
      "Full-contour zirconia",
      "Long-span bridge solutions",
      "Excellent for implant cases",
    ],
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" />
      </>
    ),
  },
  {
    title: "Attachments & Precision Parts",
    description:
      "Reliable attachment systems for every clinical scenario — ball, magnetic, hinge, and spring solutions.",
    features: [
      "Ball & socket attachments",
      "Magnetic retention systems",
      "Versatile placement options",
    ],
    icon: (
      <>
        <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
      </>
    ),
  },
  {
    title: "Orthodontic & Protective",
    description:
      "Sports mouthguards, night guards, anti-snoring appliances, and orthodontic retainers — customized for every patient.",
    features: [
      "Sports & night guards",
      "Anti-snoring devices",
      "Post-orthodontic retainers",
    ],
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  },
];

export default function Products() {
  return (
    <section className="products" id="products">
      <div className="container">
        <div className="section-header reveal" data-reveal>
          <span className="section-tag">Our Products</span>
          <h2 className="section-title">Comprehensive Dental Solutions</h2>
          <p className="section-desc">
            From full arch restorations to precision attachments, explore our
            complete range of dental prosthetic products.
          </p>
        </div>

        <div className="product-grid">
          {PRODUCTS.map((product) => (
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
                    {product.icon}
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
                  Learn more
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
