import React from "react";
import "./MissionVision.css";

export default function MissionVision() {
  return (
    <section className="mv-section">
      <h2 className="mv-heading">Our Mission & Vision</h2>
      <p className="mv-subheading">
        At Medinovis, we aim to simplify healthcare for every individual. From 
        trusted medicines to expert guidance, our goal is to make health 
        solutions accessible, reliable, and stress-free for all.
      </p>

      <div className="mv-cards">
        <div className="mv-card">
          <div className="mv-icon">
            <img
              src="/images/target (1).png"
              alt="Mission"
            />
          </div>
          <div className="mv-text">
            <h3 className="mv-title">Our Mission</h3>
            <p className="mv-desc">
              At Medinovis, our mission is to redefine trust and transparency in pharmaceuticals by providing clear, verified, and science-backed product information. We are committed to manufacturing high-quality medicines and formulations that meet strict industry standards. Through this platform, we aim to make technical details, ingredient profiles, and therapeutic information easily accessible to healthcare professionals, distributors, and patients.
               </p>
          </div>
        </div>

        <div className="mv-card">
          <div className="mv-icon">
            <img
              src="/images/light-bulb.png"
              alt="Vision"
            />
          </div>
          <div className="mv-text">
            <h3 className="mv-title">Our Vision</h3>
            <p className="mv-desc">
             We envision Medinovis as a leading name in the pharmaceutical industry — a brand known for quality manufacturing, research excellence, and accessible product knowledge. Our goal is to create a digital knowledge ecosystem where every product we manufacture is accurately represented, fully compliant, and trusted by doctors, pharmacists, and global healthcare networks.
             </p>
          </div>
        </div>
      </div>
    </section>
  );
}
