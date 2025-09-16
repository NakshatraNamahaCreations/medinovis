"use client";

import React, { useMemo, useRef, useEffect } from "react";
import Slider from "react-slick";
import "./BannerSlider.css";
import Link from "next/link";

const SLIDES = [
  { href: "https://example.com/one", alt: "online sales banner", src: "/images/banner18.png" },
  { href: "https://example.com/two", alt: "sales banner",        src: "/images/banner19.png" },
  { href: "https://example.com/three", alt: "category banner",   src: "/images/banner20.png" },
  { href: "https://example.com/four", alt: "labs banner",        src: "/images/banner21.png" },
];

const SIDE_OFFER = { href: "/contact-us", alt: "side promotion", src: "/images/banner14.png" };

export default function BannerSlider() {
  const sliderRef = useRef(null);

  const settings = useMemo(
    () => ({
      dots: true,
      arrows: false,
      infinite: true,
      speed: 600,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,           // <-- force autoplay
      autoplaySpeed: 10000,     // <-- 10s
      pauseOnHover: false,
      pauseOnFocus: false,
      pauseOnDotsHover: false,
      adaptiveHeight: false,
      appendDots: (dots) => <ul className="altDots">{dots}</ul>,
      customPaging: () => <button className="altDotBtn" aria-hidden="true" />,
      accessibility: true,
    }),
    []
  );

  const prev = () => sliderRef.current?.slickPrev();
  const next = () => sliderRef.current?.slickNext();

  useEffect(() => {
    sliderRef.current?.slickPlay?.(); // <-- kickstart
  }, []);

  return (
    <section className="alt-wrapper container-fluid" aria-label="Home Banners">
      <div className="alt-grid">
        <div className="alt-left">
          <div className="alt-shell" role="region" aria-label="Banner Slider">
            <Slider ref={sliderRef} {...settings}>
              {SLIDES.map((s, i) => (
                <div className="alt-slide" key={i}>
                  <div className="alt-frame">
                    <img src={s.src} alt={s.alt} className="alt-img" />
                    <div className="alt-grad" /> {/* ensure pointer-events:none in CSS */}
                  </div>
                </div>
              ))}
            </Slider>

            <button className="alt-nav alt-prev" onClick={prev} aria-label="Previous slide">
              <svg width="22" height="22" viewBox="0 0 24 24"><path d="M15.5 4l-8 8 8 8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button className="alt-nav alt-next" onClick={next} aria-label="Next slide">
              <svg width="22" height="22" viewBox="0 0 24 24"><path d="M8.5 4l8 8-8 8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </div>

        <div className="alt-right">
          <Link className="alt-sideLink" href={SIDE_OFFER.href} target="_blank" rel="noopener" title={SIDE_OFFER.alt}>
            <img className="alt-sideImg" src={SIDE_OFFER.src} alt={SIDE_OFFER.alt} />
          </Link>
        </div>
      </div>
    </section>
  );
}
