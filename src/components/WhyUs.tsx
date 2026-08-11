const WHY_ITEMS = [
  {
    title: "State-of-the-Art Facility",
    desc: "15,000+ sq.ft. digital dental lab equipped with the latest CAD/CAM systems.",
    icon: <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" />,
  },
  {
    title: "Dedicated Support",
    desc: "Direct line to our technicians via WhatsApp, email, or video call — no middlemen.",
    icon: <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />,
  },
  {
    title: "Fast Turnaround",
    desc: "Standard cases delivered in 5–7 working days. Rush service available.",
    icon: <path d="M12 8v4l3 3M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
  },
  {
    title: "Quality Guarantee",
    desc: "ISO 13485 certified manufacturing with strict quality control at every step.",
    icon: (
      <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    ),
  },
];

const CERTS = [
  {
    title: "ISO 13485 Certified",
    desc: "Medical device quality management system",
    icon: (
      <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    ),
  },
  {
    title: "FDA Registered",
    desc: "Compliant with US FDA regulations",
    icon: <path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4" />,
  },
  {
    title: "CE Marked",
    desc: "Conforms to EU safety standards",
    icon: <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" />,
  },
];

export default function WhyUs() {
  return (
    <section className="why-us" id="about">
      <div className="container">
        <div className="why-grid">
          <div className="why-left">
            <span className="section-tag">Why DentaCraft</span>
            <h2 className="section-title">Built for Overseas Dental Clinics</h2>
            <p className="section-desc">
              We understand the unique challenges of sourcing dental restorations
              internationally. Here&apos;s why clinics across the globe trust us.
            </p>

            <div className="why-list">
              {WHY_ITEMS.map((item) => (
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
                      {item.icon}
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
            {CERTS.map((cert) => (
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
                    {cert.icon}
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
