    // app/product/[id]/ProductDetailsClient.jsx
    "use client";

    import Link from "next/link";
    import Image from "next/image";
    import { useMemo, useState } from "react";
    import { Container, Row, Col, Button, Form, Badge } from "react-bootstrap";
    import { FaChevronLeft, FaChevronRight, FaCheckCircle } from "react-icons/fa";

    // ✅ Use your single source of truth
    import { PRODUCT_NAME_DATA, getProductById, productsData } from "../ProductName";
    import SimilarProductSlider from "@/app/our-products/SimilarProductSlider";
    import Footer from "@/app/components/Footer";

    // (optional) if these live elsewhere, adjust to your actual paths:


    export default function ProductDetailsClient({ id }) {
    // ✅ Fetch by id from PRODUCT_NAME_DATA
    const product = useMemo(() => getProductById(id), [id]);

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

    const {
        title,
        description,
        images = [],
        image,
        highlights = [],
        uses = [],
        rating,
        ratingsCount,
        faqs = [],
    } = product;

    const gallery = images.length ? images : image ? [image] : [];

    // gallery state
    const [idx, setIdx] = useState(0);
    const prev = () => setIdx((i) => (i - 1 + gallery.length) % gallery.length);
    const next = () => setIdx((i) => (i + 1) % gallery.length);

    // enquiry form state
    const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
    const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
    const onSubmit = (e) => {
        e.preventDefault();
        alert(`Enquiry submitted for ${title}`);
        console.log({ productId: product.id, ...form });
    };

    const relatedProducts = useMemo(
        () => productsData.filter((p) => String(p.id) !== String(id)).slice(0, 10),
        [id]
    );

    return (
        <>
        <Container style={{ marginTop: 40 }}>
        
        <Row className=" align-items-center justify-content-center">
            {/* LEFT: Image gallery */}
            <Col md={4} className="text-center">
                <div className="position-relative d-inline-block w-100" style={{ maxWidth: 520 }}>
                {gallery[0] && (
                    <Image
                    src={gallery[idx]}
                    alt={title}
                    width={900}
                    height={900}
                    className="img-fluid"
                    style={{ borderRadius: 8, objectFit: "contain" }}
                    priority
                    />
                )}

                {gallery.length > 1 && (
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

                {gallery.length > 1 && (
                <div className="d-flex justify-content-center gap-2 mt-3 flex-wrap">
                    {gallery.map((img, i) => (
                    <button
                        key={i}
                        onClick={() => setIdx(i)}
                        aria-label={`Thumbnail ${i + 1}`}
                        style={{ padding: 0, border: 0, background: "transparent" }}
                    >
                        <Image
                        src={img}
                        alt={`Thumbnail ${i + 1}`}
                        width={70}
                        height={70}
                        style={{
                            width: 70,
                            height: 70,
                            borderRadius: 8,
                            objectFit: "cover",
                            cursor: "pointer",
                            border: i === idx ? "2px solid #888" : "1px solid #ddd",
                        }}
                        />
                    </button>
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
                {title}
                </h1>

                {(rating || ratingsCount) && (
                <div className="d-flex align-items-center gap-2 mb-2">
                    {rating && (
                    <Badge bg="success">
                        {Number(rating).toFixed(1)}
                    </Badge>
                    )}
                    {ratingsCount && (
                    <span className="text-muted small" >
                        ({ratingsCount} ratings)
                    </span>
                    )}
                </div>
                )}

                {description && (
                <p style={{ color: "#444", marginBottom: "1rem"}}>
                    {description}
                </p>
                )}

                {highlights?.length > 0 && (
                <div className="mt-2 w-100">
                    <h6 className="mb-2" >
                    Product highlights
                    </h6>
                    <ul className="list-unstyled m-0">
                    {highlights.map((h, i) => (
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
                <div className="p-3 mt-3 border rounded-3 shadow-sm bg-white">
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
            {Array.isArray(uses) && uses.length > 0 && (
            <Row className="mt-5">
                <Col>
                <div className="p-3 border rounded-3 bg-light">
                    <h5 >Uses</h5>
                    <ul className="list-unstyled m-0">
                    {uses.map((use, i) => (
                        <li
                        key={i}
                        className="d-flex align-items-start gap-2 mb-1"
                        style={{  color: "#333" }}
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
            {faqs?.length > 0 && (
            <Row className="mt-4">
                <Col>
                <div className="p-3 border rounded-3 bg-white">
                    <h5 >FAQs</h5>
                    <div className="mt-2">
                    {faqs.map((item, i) => (
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

        {/* Related products (simple) */}
        {relatedProducts.length > 0 && (
            <SimilarProductSlider title="You may also like" products={relatedProducts} />
        )}

    <Footer/>
        </>
    );
    }
