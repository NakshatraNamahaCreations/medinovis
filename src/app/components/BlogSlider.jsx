"use client";
import React from "react";
import Slider from "react-slick";
import "./BlogSlider.css";
import Link from "next/link";

const BLOGS = [
  {
    title: "5 Natural Remedies for Better Sleep",
    desc: "Discover ancient herbal methods and modern tips to improve your sleep naturally.",
    img: "/images/sleepblogs.jpg",
    link: "#"
  },
  {
    title: "How to Boost Immunity This Winter",
    desc: "Practical health tips to keep you strong and healthy during the cold months.",
    img: "/images/immunity.jpg",
    link: "#"
  },
  {
    title: "Yoga Practices for Stress Relief",
    desc: "Simple yoga poses and breathing techniques to reduce stress and anxiety.",
    img: "/images/yoga.jpg",
    link: "#"
  },
  {
    title: "Ayurvedic Diet for Daily Wellness",
    desc: "Explore Ayurveda-inspired meal plans for holistic health and balance.",
    img: "/images/ayurvedic.jpg",
    link: "#"
  },
  {
    title: "Top 10 Medicinal Plants in India",
    desc: "Learn about India's most valued medicinal plants and their benefits.",
    img: "/images/ayurvedicplants.jpg",
    link: "#"
  },
];

export default function BlogSlider() {
  const settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 992,  settings: { slidesToShow: 2 } },
      { breakpoint: 576,  settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <>
    <section className="blog-section" style={{ backgroundColor: "#f6f6f6"}}>
      <div></div>
      <div className="blog-container">
        <div className="blog-header">
          <h3>Our Blogs</h3>
          <a href="/blogs" className="blog-seeall">SEE ALL</a>
        </div>

        <Slider {...settings}>
          {BLOGS.map((blog, i) => (
            <div key={i} className="blog-slide">
              <a href={blog.link} className="blog-card">
                <div className="blog-imgwrap">
                  <img src={blog.img} alt={blog.title} className="blog-img" />
                </div>
                <div className="blog-content">
                  <h4 className="blog-title">{blog.title}</h4>
                  <p className="blog-desc">{blog.desc}</p>
                </div>
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </section>
    <br /> <br />
    <section 
  style={{
    padding: "40px 0",
    textAlign: "center",
    backgroundColor: "#fff",
    border: "1px solid #eee",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    maxWidth: "1000px",
    margin: "0 auto"
  }}
>
  <h2 style={{ fontSize: "28px", fontWeight: "700", color: "#222" }}>
    Discover Medinovis Pharmaceuticals
  </h2>
  {/* <p style={{ fontSize: "18px", color: "#555", marginTop: "8px" }}>
    Starting at ₹49 — Trusted by thousands of customers
  </p> */}

  <div 
    style={{
      display: "flex",
      justifyContent: "center",
      gap: "50px",
      margin: "30px 0"
    }}
  >
    {/* Feature 1 */}
    <div style={{ textAlign: "center" }}>
      <img src="/images/order-tracking.png" alt="Fast Delivery" width="80" />
      <p style={{ marginTop: "10px", fontSize: "16px" }}>Comprehensive Product Listings</p>
    </div>

    {/* Feature 2 */}
    <div style={{ textAlign: "center" }}>
      <img src="/images/medical.png" alt="Authentic Products" width="80" />
      <p style={{ marginTop: "10px", fontSize: "16px" }}>Therapeutic Categories</p>
    </div>

    {/* Feature 3 */}
    <div style={{ textAlign: "center" }}>
      <img src="/images/best-product.png" alt="Discount Offers" width="80" />
      <p style={{ marginTop: "10px", fontSize: "16px" }}>Regulatory & Quality Assurance</p>
    </div>
  </div>
  
<Link
  href="/contact-us"
  style={{
    backgroundColor: "#0ea5e9",
    border: "none",
    padding: "12px 30px",
    color: "#fff",
    fontSize: "18px",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "600",
    display: "inline-block",   // so padding works like a button
    textDecoration: "none"
  }}
>
  Enquire Now
</Link>
  
</section>
  <br/>
    <br />

    </>
  );
}
