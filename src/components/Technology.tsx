const STEPS = [
  {
    number: "01",
    title: "Digital Scan & Diagnosis",
    desc: "Receive intraoral scan data or traditional impressions. Our technicians perform digital diagnosis and treatment planning.",
  },
  {
    number: "02",
    title: "3D Design & Planning",
    desc: "Virtual tooth arrangement, implant position planning, and surgical guide design using advanced CAD software.",
  },
  {
    number: "03",
    title: "Precision Manufacturing",
    desc: "5-axis milling, 3D printing, and gold electroforming — each restoration crafted with sub-millimeter precision.",
  },
  {
    number: "04",
    title: "Quality Check & Delivery",
    desc: "Rigorous quality inspection, try-in verification, and secure worldwide shipping to your clinic.",
  },
];

export default function Technology() {
  return (
    <section className="technology" id="technology">
      <div className="container">
        <div className="section-header reveal" data-reveal>
          <span className="section-tag">Our Technology</span>
          <h2 className="section-title">Digital Workflow, End to End</h2>
          <p className="section-desc">
            From digital impression to final delivery, our fully digital pipeline
            ensures accuracy, speed, and consistency in every case.
          </p>
        </div>

        <div className="tech-timeline">
          {STEPS.map((step) => (
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
