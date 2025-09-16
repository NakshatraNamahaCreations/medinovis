// app/components/ContactBanner.jsx
import React from "react";
import "../about-us/AboutBanner.css";
import BreadcrumbBar from "../components/BreadcrumbBar";

export default function ContactBanner() {
  return (
    <>
      <BreadcrumbBar items={[{ label: "Home", href: "/" }, { label: "Contact Us" }]} />

      <div className="aboutbanner">
        <div className="aboutbanner__overlay">
          <div className="aboutbanner__content" style={{ textAlign: "left" }}>
            <h2 className="aboutbanner__title">Contact Us</h2>
            <p className="aboutbanner__subtitle">
              We’re here to help with product inquiries, distribution support, and partnerships.
              Reach out and our Medinovis team will get back to you promptly.
            </p>

            
          </div>
        </div>
      </div>
    </>
  );
}
