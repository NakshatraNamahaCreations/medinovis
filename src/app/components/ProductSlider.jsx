"use client";
import React from "react";
import Slider from "react-slick";
import "./ProductSlider.css";

const ITEMS = [
  {
    title: "Citinovis 500",
    img: "/images/product1.png",
    pack: "bottle of 60.0 capsules",
    eta: "Get by Wed, 17 Sep",
  },
  {
    title: "Citicoline Sodium and Pirecetam Tablets",
    img: "/images/product2.png",
    pack: "bottle of 100.0 gm Dusting Powder",
    eta: "Get in 30 mins",
  },
 
  {
    title: "Alpha Ketonalogue and Essential Amino acids Tablets",
    img: "/images/product4.png",
    pack: "box of 100.0 gm Gel",
    eta: "Get by Tue, 16 Sep",
  },
   {
    title: "Citicoline Sodium and Pirecetam Tablets",
    img: "/images/product3.png",
    pack: "bottle of 100.0 ml Gargle",
    eta: "Get by Tomorrow",
  },
  {
    title: "Alpha Ketonalogue and Essential Amino acids Tablets",
    img: "/images/product5.png",
    pack: "jar of 250.0 gm Powder",
    eta: "Get by Mon, 15 Sep",
  },
  {
    title:  "Citinovis 500",
    img: "/images/product6.png",
    pack: "bottle of 200.0 ml Oral Solution",
    eta: "Get in 30 mins",
  },
  {
    title: "Citicoline Sodium and Pirecetam Tablets",
    img:  "/images/product3.png",
    pack: "tube of 100.0 gm Gel",
    eta: "Get in 30 mins",
  },
];

export default function ProductSlider() {
  const settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 450,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1400, settings: { slidesToShow: 5 } },
      { breakpoint: 1200, settings: { slidesToShow: 4 } },
      { breakpoint: 992,  settings: { slidesToShow: 3 } },
      { breakpoint: 768,  settings: { slidesToShow: 2 } },
      { breakpoint: 480,  settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="ps-section" style={{ backgroundColor: "#f6f6f6"}}>
      <div className="ps-container">
        <div className="ps-header">
          <h3>Our Products</h3>
          <a href="/our-products" className="ps-seeall">SEE ALL</a>
        </div>

        <Slider {...settings} className="ps-slider">
          {ITEMS.map((it, i) => (
            <div key={i} className="ps-slide">
              <div className="ps-card">
                <div className="ps-imgwrap">
                  <img src={it.img} alt={it.title} className="ps-img" />
                </div>

                <div className="ps-title" title={it.title}>{it.title}</div>

                {/* <div className="ps-meta">
                  <div className="ps-pack">{it.pack}</div>
                  <div className="ps-eta">{it.eta}</div>
                </div> */}

                <button href="/contact-us"  className="ps-btn">Enquire now</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>    
      <br />
    </section>
  );
}
