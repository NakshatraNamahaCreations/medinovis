// app/components/AboutBanner.jsx
import React from "react";
import "./AboutBanner.css";
import BreadcrumbBar from "../components/BreadcrumbBar";

export default function AboutBanner() {
  return (
    <>
     <BreadcrumbBar items={[{ label: "Home", href: "/" }, { label: "About Us" }]} />
    <div className="aboutbanner">
      <div className="aboutbanner__overlay">
        <div className="aboutbanner__content">
          <h2 className="aboutbanner__title">About Us</h2>
          <p className="aboutbanner__subtitle">
            Genuine medicines and healthcare essentials, delivered with care and
            backed by verified partners and reliable service.  
            We are committed to building trust and ensuring better health
            for every family we serve.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}
