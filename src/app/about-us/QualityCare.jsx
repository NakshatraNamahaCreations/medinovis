    import React from "react";
    import "./QualityCare.css";

    export default function QualityCare() {
    return (
        <section className="qc-wrap">
        {/* Left: info card with illustration */}
        <div className="qc-card qc-left">
            <div className="qc-copy">
            <h3 className="qc-title">Did you know?</h3>
            <p className="qc-text">
                Quality isn’t just about making medicines it’s about{" "}
                <strong>how they are researched, formulated, and verified before reaching healthcare providers.</strong>.
                At Medinovis, every product undergoes a rigorous multi-step quality assurance process to ensure safety, consistency, and regulatory compliance.
            </p>
            </div>

            {/* Simple, copyright-safe inline SVG (lamp) */}
          <div className="qc-illustration" aria-hidden="true">
  <picture>
    <source src="/images/badge.png" />
    <img
      src="/images/badge.png"
      alt=""
      width="240"
      height="240"
      loading="lazy"
      className="qc-illustration-img"
    />
  </picture>
</div>

        </div>

        {/* Right: quality statement + CTA */}
        <div className="qc-card qc-right">
            <p className="qc-right-text">
            At <strong>Medinovis</strong>, we are committed to the highest standards of pharmaceutical excellence.
            We use only pharma-grade raw materials sourced from trusted and certified suppliers, and every formulation is developed by our dedicated R&D team with a strong focus on efficacy and innovation. Each product undergoes stringent batch-wise testing to ensure potency, safety, and stability before release, while maintaining strict compliance with national and international pharmaceutical regulations. To uphold complete transparency, every product is fully documented with manufacturing details, batch numbers, and expiry dates, ensuring 100% traceability and trust at every stage.
            </p>

            <a className="qc-cta" href="/quality" aria-label="Learn how Medinovis ensures quality">
            Learn how we ensure quality
            </a>
        </div>
        </section>
    );
    }
