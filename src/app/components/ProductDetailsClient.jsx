// components/ProductDetailsClient.jsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaCheckCircle } from "react-icons/fa";
import { PRODUCT_NAME_DATA } from "@/data/productName";

export default function ProductDetailsClient({ product }) {
  const {
    id,
    title,
    description,
    images = [],
    image,
    highlights = [],
    uses = [],
    rating,
    ratingsCount,
    faqs = [],
  } = product || {};

  const gallery = images.length ? images : image ? [image] : [];
  const [idx, setIdx] = useState(0);
  const onPrev = () => setIdx((i) => (i - 1 + gallery.length) % gallery.length);
  const onNext = () => setIdx((i) => (i + 1) % gallery.length);

  const related = useMemo(
    () => PRODUCT_NAME_DATA.filter((p) => String(p.id) !== String(id)).slice(0, 10),
    [id]
  );

  return (
    <main className="container py-4">
      {/* Breadcrumb */}
      <div className="text-muted small mb-3" >
        <Link href="/" className="text-decoration-none">Home</Link> › {title}
      </div>

      <div className="row g-4">
        {/* LEFT — gallery */}
        <div className="col-lg-5 text-center">
          {gallery[0] && (
            <div className="position-relative d-inline-block w-100" style={{ maxWidth: 520 }}>
              {/* use next/image for perf */}
              <Image
                src={gallery[idx]}
                alt={title}
                width={900}
                height={900}
                className="img-fluid rounded"
                priority
              />
              {gallery.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={onPrev}
                    aria-label="Previous image"
                    className="position-absolute d-flex align-items-center justify-content-center shadow"
                    style={{
                      top: "50%", left: -20, transform: "translateY(-50%)",
                      width: 38, height: 38, borderRadius: "50%", border: "1px solid #ddd", background: "#fff"
                    }}
                  >
                    <FaChevronLeft />
                  </button>
                  <button
                    type="button"
                    onClick={onNext}
                    aria-label="Next image"
                    className="position-absolute d-flex align-items-center justify-content-center shadow"
                    style={{
                      top: "50%", right: -20, transform: "translateY(-50%)",
                      width: 38, height: 38, borderRadius: "50%", border: "1px solid #ddd", background: "#fff"
                    }}
                  >
                    <FaChevronRight />
                  </button>
                </>
              )}
            </div>
          )}

          {gallery.length > 1 && (
            <div className="d-flex justify-content-center gap-2 mt-3 flex-wrap">
              {gallery.map((src, i) => (
                <button
                  key={i}
                  aria-label={`Thumbnail ${i + 1}`}
                  onClick={() => setIdx(i)}
                  style={{ padding: 0, background: "transparent", border: 0 }}
                >
                  <Image
                    src={src}
                    alt={`${title} ${i + 1}`}
                    width={70}
                    height={70}
                    style={{
                      width: 70, height: 70, borderRadius: 8, objectFit: "cover",
                      border: i === idx ? "2px solid #888" : "1px solid #ddd"
                    }}
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* MIDDLE — details */}
        <div className="col-lg-5 d-flex align-items-start justify-content-center flex-column" style={{ padding: 30 }}>
          <h1 style={{ fontSize: "clamp(22px, 3vw, 32px)"}}>{title}</h1>

          {(rating || ratingsCount) && (
            <div className="d-flex align-items-center gap-2 mb-2">
              {rating && (
                <span className="badge bg-success" >
                  {Number(rating).toFixed(1)}
                </span>
              )}
              {ratingsCount && (
                <span className="text-muted small" >
                  ({ratingsCount} ratings)
                </span>
              )}
            </div>
          )}

          {description && (
            <p style={{ color: "#444", marginBottom: "1rem" }}>
              {description}
            </p>
          )}

          {highlights?.length > 0 && (
            <div className="mt-2 w-100">
              <h6 className="mb-2" >Product highlights</h6>
              <ul className="list-unstyled m-0">
                {highlights.map((h, i) => (
                  <li key={i} className="d-flex align-items-start gap-2 mb-1">
                    <FaCheckCircle className="text-success mt-1" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* RIGHT — enquiry (simple) */}
        <div className="col-lg-2">
          <div className="p-3 mt-3 border rounded-3 shadow-sm bg-white" >
            <h5 className="mb-3" >Enquire Now</h5>
            <form onSubmit={(e) => { e.preventDefault(); alert(`Enquiry submitted for ${title}`); }}>
              <input className="form-control mb-2" placeholder="Your Name" required />
              <input className="form-control mb-2" placeholder="Phone Number" type="tel" required />
              <input className="form-control mb-2" placeholder="Email" type="email" />
              <textarea className="form-control mb-2" rows={3} placeholder="Your enquiry" />
              <button type="submit" className="btn btn-primary w-100">Enquire Now</button>
            </form>
          </div>
        </div>
      </div>

      {/* Uses */}
      {Array.isArray(uses) && uses.length > 0 && (
        <div className="row mt-5">
          <div className="col">
            <div className="p-3 border rounded-3 bg-light">
              <h5 >Uses</h5>
              <ul className="list-unstyled m-0">
                {uses.map((use, i) => (
                  <li key={i} className="d-flex align-items-start gap-2 mb-1" style={{ color: "#333" }}>
                    <FaCheckCircle color="#0077b6" className="mt-1" />
                    <span>{use}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* FAQs */}
      {faqs?.length > 0 && (
        <div className="row mt-4">
          <div className="col">
            <div className="p-3 border rounded-3 bg-white">
              <h5 >FAQs</h5>
              <div className="mt-2">
                {faqs.map((item, i) => (
                  <details key={i} className="mb-2">
                    <summary style={{  cursor: "pointer" }}>{item.q}</summary>
                    <p className="mt-2 mb-0" style={{ color: "#444"}}>{item.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Simple related strip */}
      {related.length > 0 && (
        <div className="mt-5">
          <h5 className="mb-3" >You may also like</h5>
          <div className="row g-3">
            {related.map((r) => (
              <div key={r.id} className="col-6 col-sm-4 col-md-3">
                <Link href={`/products/${(r.slug ?? "").toString()}`}>
                  <div className="card h-100">
                    <div className="p-2">
                      <Image
                        src={r.image}
                        alt={r.title}
                        width={400}
                        height={400}
                        className="img-fluid rounded"
                      />
                    </div>
                    <div className="card-body">
                      <div className="small">{r.title}</div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
