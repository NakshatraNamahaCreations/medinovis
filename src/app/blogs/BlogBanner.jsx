// app/components/AboutBanner.jsx
import React from "react";
import "../about-us/AboutBanner.css";
import BreadcrumbBar from "../components/BreadcrumbBar";

export default function BlogBanner() {
  return (
    <>
      <BreadcrumbBar items={[{ label: "Home", href: "/" }, { label: "Blogs" }]} />
      <div className="aboutbanner">
        <div className="aboutbanner__overlay">
          <div className="aboutbanner__content">
            <h2 className="aboutbanner__title">Medinovis Blog</h2>
            <p className="aboutbanner__subtitle">
              Manufacturer verified insights on formulations, GMP & quality, and
              practical counseling written for doctors, pharmacists, and distributors.
              Short, evidence-based reads to support confident, everyday care.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
