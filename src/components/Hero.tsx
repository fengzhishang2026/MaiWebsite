import type { Dictionary } from "@/app/[lang]/dictionaries";

export default function Hero({ dict }: { dict: Dictionary["hero"] }) {
  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <div className="hero-grid" />
        <div className="hero-glow glow-1" />
        <div className="hero-glow glow-2" />
        <div className="hero-glow glow-3" />
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot" />
            {dict.badge}
          </div>
          <h1 className="hero-title">
            {dict.titleLine1}
            <br />
            {dict.titleLine2}
            <span className="gradient-text">{dict.titleHighlight}</span>
          </h1>
          <p className="hero-subtitle">{dict.subtitle}</p>
          <div className="hero-actions">
            <a href="#products" className="btn btn-primary">
              {dict.exploreProducts}
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
            </a>
            <a href="#contact" className="btn btn-outline">
              {dict.requestQuote}
            </a>
          </div>
          <div className="hero-stats">
            {dict.stats.map((stat, i) => (
              <div className="stat-item" key={stat.label}>
                <span className="stat-number">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
                {i < dict.stats.length - 1 && <div className="stat-divider" />}
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card hero-card-1">
            <div className="card-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" />
              </svg>
            </div>
            <div className="card-text">
              <span className="card-title">{dict.cards[0].title}</span>
              <span className="card-desc">{dict.cards[0].desc}</span>
            </div>
          </div>
          <div className="hero-card hero-card-2">
            <div className="card-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
              </svg>
            </div>
            <div className="card-text">
              <span className="card-title">{dict.cards[1].title}</span>
              <span className="card-desc">{dict.cards[1].desc}</span>
            </div>
          </div>
          <div className="hero-card hero-card-3">
            <div className="card-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <div className="card-text">
              <span className="card-title">{dict.cards[2].title}</span>
              <span className="card-desc">{dict.cards[2].desc}</span>
            </div>
          </div>

          <div className="floating-element fe-1" />
          <div className="floating-element fe-2" />
          <div className="floating-element fe-3" />
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-line" />
        <span>{dict.scroll}</span>
      </div>
    </section>
  );
}
