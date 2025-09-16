import React from "react";
import "./AboutUsFeatures.css";

export default function AboutUsFeatures() {
  const features = [
    {
      img: "/images/team-management.png",
      title: "Who We Are",
      text: "We are Medinovis Pharmaceuticals, a trusted manufacturer of high-quality pharmaceutical products and formulations. Our platform is designed to provide detailed product information for healthcare professionals, distributors, and patients seeking transparency and trust."
    },
    {
      img: "/images/best-employee.png",
      title: "Our Expertise",
      text: "Backed by years of research, innovation, and strict quality control, Medinovis focuses on creating formulations that meet the highest industry standards. Every product is carefully developed to ensure safety, reliability, and effectiveness."
    },
    {
      img: "/images/convenience.png",
      title: "Our Platform",
      text: "This website is a central hub for our product catalog, offering clear information on medicines, ingredients, and therapeutic categories. It is built to support doctors, pharmacists, distributors, and patients in understanding our offerings."
    },
    {
      img: "/images/best-product.png",
      title: "Quality & Compliance",
      text: "At Medinovis, quality is at the core of everything we do. From R&D to packaging, each product undergoes rigorous testing and compliance checks to meet national and international standards."
    },
    // {
    //   img: "https://cdn-icons-png.flaticon.com/512/942/942748.png",
    //   title: "Customer Support",
    //   text: "Our customer care team is here to guide you through every step of your healthcare journey."
    // },
    {
      img: "https://cdn-icons-png.flaticon.com/512/1484/1484841.png",
      title: "Our Goal",
      text: "Our mission is to make accurate and verified product data easily accessible, empowering the healthcare ecosystem with transparent, research-backed information while enhancing brand visibility."
    },
  ];

  return (
    <section className="aboutus-section">
      <div className="container">
        <h1 className="aboutus-title">About Us</h1>
        <p className="aboutus-subtitle">
          Medinovis is committed to providing reliable medicines, healthcare products, and expert guidance. Here’s what makes us your trusted health partner:
        </p>
        <div className="features-grid">
          {features.map((item, index) => (
            <div key={index} className="feature-card">
              <div className="feature-image">
                <img src={item.img} alt={item.title} />
              </div>
              <h3 className="feature-title">{item.title}</h3>
              <p className="feature-text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
