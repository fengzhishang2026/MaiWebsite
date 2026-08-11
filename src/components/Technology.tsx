import type { Dictionary } from "@/app/[lang]/dictionaries";

export default function Technology({
  dict,
}: {
  dict: Dictionary["technology"];
}) {
  return (
    <section className="technology" id="technology">
      <div className="container">
        <div className="section-header reveal" data-reveal>
          <span className="section-tag">{dict.tag}</span>
          <h2 className="section-title">{dict.title}</h2>
          <p className="section-desc">{dict.desc}</p>
        </div>

        <div className="tech-timeline">
          {dict.steps.map((step) => (
            <div className="tech-step reveal" data-reveal key={step.number}>
              <div className="tech-number">{step.number}</div>
              <div className="tech-content">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
              <div className="tech-line" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
