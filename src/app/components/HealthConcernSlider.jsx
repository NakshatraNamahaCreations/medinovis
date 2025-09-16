"use client";
import React from "react";
import Slider from "react-slick";
import "./HealthConcernSlider.css";

const DATA = [
  { title: "Diabetes", img: "/images/diabetes.jpg", link: "#" },
  { title: "Heart Care", img: "/images/heart.png", link: "#" },
  { title: "Stomach Care", img: "/images/stomach.png", link: "#" },
  { title: "Liver Care", img: "/images/liver.png", link: "#" },
  { title: "Bone, Joint & Muscle Care", img: "/images/bone.png", link: "#" },
  { title: "Kidney Care", img: "/images/kidney.png", link: "#" },
  { title: "Derma Care", img: "/images/derma.png", link: "#" },
];

export default function HealthConcernSlider() {
  const settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 5 } },
      { breakpoint: 992, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 576, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <>
  
    <section className="hc-section">
      <div className="container">
        <h2 className="hc-heading">Our health concerns</h2>
        <Slider {...settings} className="hc-slider">
          {DATA.map((item, i) => (
            <div key={i} className="hc-card">
              <a href={item.link} className="hc-link">
                <div className="hc-img-wrap">
                  <img src={item.img} alt={item.title} className="hc-img" />
                </div>
                <div className="hc-title">{item.title}</div>
              </a>
            </div>
          ))}
        </Slider>
      </div>
      <br />
    </section>
    </>
  );
}
