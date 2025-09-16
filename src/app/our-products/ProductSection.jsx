// app/components/ProductsSection.jsx
"use client";

import ProductCard from "./ProductCard";   // keep your path
import { PRODUCTS } from "../data/Products"; // keep your path
import styles from "./productsection.module.css"; // <-- module, not .css

export default function ProductsSection() {
  return (
    <section className={styles.productsSection} id="products">
      <h6 className={styles.kicker}>Our Products</h6>
      <h3 className={styles.heading}>
        High-Quality Medicines, Equipment &amp; Wellness Essentials
      </h3>

      <div className={styles.productsContainer} data-aos="fade-up">
        {PRODUCTS.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
