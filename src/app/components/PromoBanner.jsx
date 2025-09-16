"use client";
import React from "react";
import "./PromoBanner.css";

export default function PromoBanner() {
  return (
    <>
    <section className="promo-banner">
      <div className="promo-container">
        {/* LEFT: Image */}
        <div className="promo-img-wrap">
          <img
            src="/images/bannerw.png" // Replace with your image
            alt="Promo"
            className="promo-img"
          />
        </div>

        {/* CENTER: Text */}
        <div className="promo-text">
          <p className="promo-subtitle">Trusted by Thousands of Families<span></span></p>
          <h3 className="promo-title">
           Join thousands of informed users who rely on Medinovis for genuine medicine information, wellness essentials, and expert health tips. 
          </h3>
          <p className="promo-desc">We’re committed to helping you understand your medicines, ingredients, and treatment options — without the confusion or sales pressure.</p>
        </div>

        {/* RIGHT: CTA Button */}
        <div className="promo-cta">
          <a href="/contact-us" className="promo-btn">Know More</a>
        </div>
      </div>
    </section>
   
    </>
  );
}
