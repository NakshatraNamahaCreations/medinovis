"use client";

import React, { useMemo, useRef } from "react";
import Slider from "react-slick";
import "./TestimonialsSection.css";

/** ====== TOP STATS (like 30L+ / 3k+ / 22+) ====== */
const STATS = [
  { value: "100K+", label: "Happy Customers" },
  { value: "200+", label: "Cities Served" },
  { value: "99%", label: "Customer Satisfaction" },
];

/** ====== TESTIMONIALS ====== */
const TESTIMONIALS = [
  {
    quote:
      "“Medinovis has consistently delivered high-quality formulations with complete transparency in ingredient details. Their product catalog is a reliable resource for healthcare professionals like us.",
    name: "Dr. Priya Nair",
    avatar: "/images/woman (3).png",
  },
  {
    quote:
      "We’ve been sourcing medicines from Medinovis for over three years. Their dedication to maintaining accurate product data and regulatory compliance makes them one of the most dependable manufacturers in the market.",
    name: "Ankit Verma, Pharmacist",
    avatar: "/images/man (4).png",
  },
  {
    quote:
      "What stands out about Medinovis is their commitment to innovation without compromising on quality. Every product page gives detailed insight into formulations, which helps us recommend confidently",
    name: "Dr. Kavitha S",
    avatar:"/images/woman (3).png",
  },
  {
    quote:
      "This platform is more than a catalog — it’s a knowledge hub. The ingredient breakdowns and therapeutic details make it a go-to reference for our entire pharmacy team",
    name: "Suresh Menon",
    avatar:"/images/man (4).png",
  },
  {
    quote:
      "Medinovis is setting new benchmarks in the pharma industry with their transparent approach. Their documentation and product profiles reflect international quality standards.",
    name: "Dr. Rajesh Khanna",
    avatar: "/images/man (4).png",
  },
];

export default function TestimonialsSection() {
  const sliderRef = useRef(null);

  const settings = useMemo(
    () => ({
      dots: true,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: true,
      adaptiveHeight: true,
      // custom classes handled in CSS
    }),
    []
  );

  return (
    <section className="t-wrap">
     
      <div className="t-stats container">
        {STATS.map((s, i) => (
          <div className="t-stat" key={i}>
            <div className="t-stat-value">{s.value}</div>
            <div className="t-stat-label">{s.label}</div>
            {i < STATS.length - 1 && <div className="t-divider" />}
          </div>
        ))}
      </div>

          <br />
          <br />
      <div className="t-sliderWrap">
        <h3 className="t-heading">Our Happy Customers</h3>

        <Slider ref={sliderRef} {...settings} className="t-slider">
          {TESTIMONIALS.map((t, i) => (
            <div key={i}>
              <figure className="t-quoteCard">
                <blockquote className="t-quote">
                  {t.quote}
                </blockquote>
                <figcaption className="t-person">
                  <img
                    className="t-avatar"
                    src={t.avatar}
                    alt={`${t.name} avatar`}
                    loading="lazy"
                  />
                  <span className="t-name">{t.name}</span>
                </figcaption>
              </figure>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
