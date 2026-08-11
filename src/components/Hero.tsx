export default function Hero() {
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
            Trusted by 500+ Dental Clinics Worldwide
          </div>
          <h1 className="hero-title">
            Precision Dental
            <br />
            Restorations, <span className="gradient-text">Delivered Globally</span>
          </h1>
          <p className="hero-subtitle">
            From implant bridges to flexible partials, we craft high-quality,
            custom dental prosthetics using cutting-edge CAD/CAM technology —
            serving overseas dental clinics with speed, precision, and care.
          </p>
          <div className="hero-actions">
            <a href="#products" className="btn btn-primary">
              Explore Products
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
              Request a Quote
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Clinics Served</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-number">30k+</span>
              <span className="stat-label">Cases Delivered</span>
            </div>
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
              <span className="card-title">CAD/CAM Powered</span>
              <span className="card-desc">Digital precision manufacturing</span>
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
              <span className="card-title">Global Shipping</span>
              <span className="card-desc">Fast &amp; secure worldwide delivery</span>
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
              <span className="card-title">ISO Certified</span>
              <span className="card-desc">FDA &amp; CE compliant products</span>
            </div>
          </div>

          <div className="floating-element fe-1" />
          <div className="floating-element fe-2" />
          <div className="floating-element fe-3" />
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
