// app/product/[id]/ProductDetailsClient.jsx
"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Container, Row, Col, Button, Form, Badge } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight, FaCheckCircle } from "react-icons/fa";

// Adjust these import paths to your project structure
import { PRODUCTS } from "../data/Products";
import { PRODUCT_NAME_DATA } from "./ProductName";

import SimilarProductSlider from "./SimilarProductSlider";
import Footer from "../components/Footer";

const slugify = (s = "") =>
  s
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[\s_]+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-");

export default function ProductDetails({ id }) {
  const product = useMemo(
    () => PRODUCTS.find((p) => String(p.id) === String(id)),
    [id]
  );

  if (!product) {
    return (
      <>
        <Container style={{ marginTop: 80 }}>
          <h3>Product not found</h3>
          <Link href="/" className="btn btn-outline-primary mt-3">
            Back to Home
          </Link>
        </Container>
        <Footer />
      </>
    );
  }

  const richer = useMemo(() => {
    const byId = PRODUCT_NAME_DATA?.find((p) => String(p.id) === String(id));
    if (byId) return byId;

    const baseSlug = slugify(product.name ?? product.title ?? "");
    return PRODUCT_NAME_DATA?.find(
      (p) => slugify(p.title ?? p.name ?? "") === baseSlug
    );
  }, [id, product.name, product.title]);

  const displayName =
    (richer?.title || richer?.name || product.name || product.title || "").trim();

  const displayDesc =
    (richer?.description?.trim()) || (product.description?.trim()) || "";

  const displayHighlights = useMemo(() => {
    if (Array.isArray(richer?.highlights) && richer.highlights.length) {
      return richer.highlights;
    }
    if (Array.isArray(product?.highlights) && product.highlights.length) {
      return product.highlights;
    }
    return [];
  }, [richer, product]);

  const images = useMemo(() => {
    const list =
      (Array.isArray(richer?.images) && richer.images.length && richer.images) ||
      (Array.isArray(product?.images) && product.images.length && product.images) ||
      [richer?.image || product.image].filter(Boolean);
    return list.filter(Boolean);
  }, [richer, product]);

  const displayUses = useMemo(() => {
    return (
      richer?.uses || product?.uses || [
        "Used to relieve pain, inflammation, and swelling in conditions that affect muscles",
      ]
    );
  }, [richer, product]);

  // gallery state
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length);
  const next = () => setIdx((i) => (i + 1) % images.length);

  // enquiry form state
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    alert(`Enquiry submitted for ${displayName}`);
    console.log({ productId: product.id, ...form });
  };

  const relatedProducts = useMemo(() => {
    return PRODUCTS.filter((p) => String(p.id) !== String(id));
  }, [id]);

  return (
    <>
      <Container style={{ marginTop: 40 }}>
        {/* Breadcrumb */}
        <div className="text-muted small mb-3" >
          <Link href="/" className="text-decoration-none">
            Home
          </Link>{" "}
          › {displayName}
        </div>

        <Row className="g-4">
          {/* LEFT: Image gallery */}
          <Col md={4} className="text-center">
            <div className="position-relative d-inline-block w-100" style={{ maxWidth: 520 }}>
              <img
                src={images[idx]}
                alt={displayName}
                style={{
                  width: "100%",
                  borderRadius: 8,
                  objectFit: "contain",
                
                }}
              />

              {images.length > 1 && (
                <>
                  <Button
                    variant="light"
                    onClick={prev}
                    className="position-absolute d-flex align-items-center justify-content-center shadow"
                    style={{
                      top: "50%",
                      left: -20,
                      transform: "translateY(-50%)",
                      width: 38,
                      height: 38,
                      borderRadius: "50%",
                      border: "1px solid #ddd",
                    }}
                    aria-label="Previous image"
                  >
                    <FaChevronLeft />
                  </Button>

                  <Button
                    variant="light"
                    onClick={next}
                    className="position-absolute d-flex align-items-center justify-content-center shadow"
                    style={{
                      top: "50%",
                      right: -20,
                      transform: "translateY(-50%)",
                      width: 38,
                      height: 38,
                      borderRadius: "50%",
                      border: "1px solid #ddd",
                    }}
                    aria-label="Next image"
                  >
                    <FaChevronRight />
                  </Button>
                </>
              )}
            </div>

            {images.length > 1 && (
              <div className="d-flex justify-content-center gap-2 mt-3 flex-wrap">
                {images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`Thumbnail ${i + 1}`}
                    onClick={() => setIdx(i)}
                    style={{
                      width: 70,
                      height: 70,
                      borderRadius: 8,
                      objectFit: "cover",
                      cursor: "pointer",
                      border: i === idx ? "2px solid #888" : "1px solid #ddd",
                    }}
                  />
                ))}
              </div>
            )}
          </Col>

          {/* MIDDLE: Details */}
          <Col
            md={5}
            className="d-flex align-items-start justify-content-center flex-column"
            style={{ padding: "30px" }}
          >
            <h1
              style={{
                fontSize: "clamp(22px, 3vw, 32px)",
               
              }}
            >
              {displayName}
            </h1>

            {(product.rating || product.ratingsCount) && (
              <div className="d-flex align-items-center gap-2 mb-2">
                {product.rating && (
                  <Badge bg="success" >
                    {Number(product.rating).toFixed(1)}
                  </Badge>
                )}
                {product.ratingsCount && (
                  <span className="text-muted small" >
                    ({product.ratingsCount} ratings)
                  </span>
                )}
              </div>
            )}

            {displayDesc && (
              <p style={{ color: "#444", marginBottom: "1rem" }}>
                {displayDesc}
              </p>
            )}

            {displayHighlights.length > 0 && (
              <div className="mt-2 w-100">
                <h6 className="mb-2" >
                  Product highlights
                </h6>
                <ul className="list-unstyled m-0">
                  {displayHighlights.map((h, i) => (
                    <li
                      key={i}
                      className="d-flex align-items-start gap-2 mb-1"
                      
                    >
                      <FaCheckCircle className="text-success mt-1" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Col>

          {/* RIGHT: Enquiry form */}
          <Col md={3}>
            <div className="p-3  border rounded-3 shadow-sm bg-white"  >
              <h5 className="mb-3" >
                Enquire Now
              </h5>
              <Form onSubmit={onSubmit}>
                <Row className="g-2">
                  <Col sm={12}>
                    <Form.Control
                      name="name"
                      placeholder="Your Name"
                      value={form.name}
                      onChange={onChange}
                      required
                    />
                  </Col>
                  <Col sm={12}>
                    <Form.Control
                      name="phone"
                      type="tel"
                      placeholder="Phone Number"
                      value={form.phone}
                      onChange={onChange}
                      required
                    />
                  </Col>
                  <Col sm={12}>
                    <Form.Control
                      name="email"
                      type="email"
                      placeholder="Email"
                      value={form.email}
                      onChange={onChange}
                    />
                  </Col>
                  <Col sm={12}>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="message"
                      placeholder="Your enquiry"
                      value={form.message}
                      onChange={onChange}
                    />
                  </Col>
                </Row>
                <Button
                  type="submit"
                  className="w-100 mt-3"
                  style={{
                    backgroundColor: "#0077b6",
                    border: "none",
                  
                  }}
                >
                  Enquire Now
                </Button>
              </Form>
            </div>
          </Col>
        </Row>

        {/* Uses */}
        {displayUses && (
          <Row className="mt-5">
            <Col>
              <div className="p-3 border rounded-3 bg-light">
                <h5 >Uses</h5>
                <ul className="list-unstyled m-0">
                  {(Array.isArray(displayUses) ? displayUses : [displayUses]).map((use, i) => (
                    <li
                      key={i}
                      className="d-flex align-items-start gap-2 mb-1"
                      style={{ color: "#333" }}
                    >
                      <FaCheckCircle color="#0077b6" className="mt-1" />
                      <span>{use}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
        )}

        {/* FAQs */}
        {(richer?.faqs || product?.faqs)?.length > 0 && (
          <Row className="mt-4">
            <Col>
              <div className="p-3 border rounded-3 bg-white">
                <h5 >FAQs</h5>
                <div className="mt-2">
                  {(richer?.faqs || product?.faqs).map((item, i) => (
                    <details key={i} className="mb-2">
                      <summary style={{ cursor: "pointer" }}>
                        {item.q}
                      </summary>
                      <p className="mt-2 mb-0" style={{ color: "#444" }}>
                        {item.a}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        )}
      </Container>

      <SimilarProductSlider title="You may also like" products={relatedProducts.slice(0, 10)} />

   <Footer/>
    </>
  );
}
