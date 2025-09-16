"use client";

import React from "react";
import "./FeaturesSection.css";

const features = [
  {
    img: "/images/order-tracking.png",
    alt: "Comprehensive Product Information",
    title: "Comprehensive Product Information",
    text: "Access detailed, doctor-reviewed medicine profiles with clear explanations of their uses, dosage forms, and safety guidelines. Every medicine page is designed to make complex details easy to understand.",
  },
  {
    img: "/images/ingredient (1).png",
    alt: "Ingredient Based Research",
    title: "Ingredient Based Research",
    text: "Dive deep into the science behind every medicine. Learn how each active ingredient works, its benefits, possible side effects, and interactions — giving you a complete picture of what you’re taking.",
  },
  {
    img: "/images/prevention.png",
    alt: "Disease & Condition Library",
    title: "Disease & Condition Library",
    text: "Explore a growing library of health conditions and symptoms, with structured information on causes, treatments, and preventive measures — all connected to relevant medicines and ingredients.",
  },
  {
    img: "/images/idea.png",
    alt: "Smart Cross Referencing",
    title: "Smart Cross Referencing",
    text: "Every page is interlinked — ingredients connect to medicines, and medicines link to diseases. This smart navigation helps you understand your health better and explore reliable, trusted medical knowledge without confusion.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="features-section">
      <div className="features-container">
        {features.map((feature, i) => (
          <div key={i} className="feature-card">
            <div className="feature-img">
              <img src={feature.img} alt={feature.alt} />
            </div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-text">{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
