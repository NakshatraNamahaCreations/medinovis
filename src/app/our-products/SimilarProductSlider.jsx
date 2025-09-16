// app/components/SimilarProductSlider.jsx
"use client";

import { useRef, useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ProductCard from "./ProductCard"; // adjust path if needed
import styles from "./SimilarProductSlider.module.css";

export default function SimilarProductSlider({
  title = "Similar Products",
  products = [],
}) {
  const scrollerRef = useRef(null);

  const scrollByCards = (direction = 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.9 * direction;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  // optional: enable mouse wheel horizontal scroll
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onWheel = (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        el.scrollBy({ left: e.deltaY, behavior: "smooth" });
      }
    };
    el.addEventListener("wheel", onWheel, { passive: true });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  if (!Array.isArray(products) || products.length === 0) return null;

  return (
    <Container className="px-0 mb-5 mt-5">
      <div className={styles.productSlider}>
        <div className={styles.productSliderHead}>
          <h3 className={styles.productSliderTitle}>{title}</h3>
          <div className={styles.productSliderControls}>
            <Button
              variant="light"
              className={styles.productSliderNav}
              onClick={() => scrollByCards(-1)}
              aria-label="Previous"
            >
              <FaChevronLeft />
            </Button>
            <Button
              variant="light"
              className={styles.productSliderNav}
              onClick={() => scrollByCards(1)}
              aria-label="Next"
            >
              <FaChevronRight />
            </Button>
          </div>
        </div>

        <div className={styles.productSliderViewport} ref={scrollerRef}>
          <div className={styles.productSliderSpacer} aria-hidden="true" />
          {products.map((p) => (
            <div key={p.id} className={styles.productSliderItem}>
              {/* All content (badge, title, description, ratings, etc.) comes from ProductCard */}
              <ProductCard product={p} />
            </div>
          ))}
          <div className={styles.productSliderSpacer} aria-hidden="true" />
        </div>
      </div>
    </Container>
  );
}
