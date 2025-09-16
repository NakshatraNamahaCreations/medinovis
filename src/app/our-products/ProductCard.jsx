// app/components/ProductCard.jsx
"use client";

import Link from "next/link";
import { Card, Button, Badge } from "react-bootstrap";

const pctOff = (mrp, price) =>
  mrp && price ? Math.max(0, Math.round(((mrp - price) / mrp) * 100)) : 0;

export default function ProductCard({ product }) {
  const off = pctOff(product?.mrp, product?.price);

  const RatingStars = ({ rating = 0 }) => {
    const full = Math.floor(rating);
    const half = rating - full >= 0.5;
    const empty = 5 - full - (half ? 1 : 0);
    return (
      <span aria-label={`rating ${rating}`}>
        {"★".repeat(full)}
        {half ? "☆" : ""}
        {"✩".repeat(empty)}
      </span>
    );
  };

  return (
    <Card className="h-100 shadow-sm position-relative">
      {/* Tag badge */}
      {product?.tag && (
        <Badge
          bg={product.tag === "BEST_SELLER" ? "warning" : "success"}
          className="position-absolute m-2"
          
        >
          {product.tag === "BEST_SELLER" ? "BEST SELLER" : "SALE"}
        </Badge>
      )}

      {/* Image */}
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: 180, paddingTop: 16 }}
      >
        <Card.Img
          variant="top"
          src={product?.image}
          alt={product?.name || product?.title || "Product image"}
          style={{ width: "auto", maxHeight: 220, objectFit: "contain" }}
        />
      </div>

      <Card.Body className="d-flex flex-column">
        {/* Title */}
        <Card.Title
          style={{ fontSize: 16, lineHeight: 1.4 }}
        >
          {product?.name || product?.title}
        </Card.Title>

        {/* Price row (optional) */}
        {(product?.price || product?.mrp) && (
          <div className="mb-2 d-flex align-items-center gap-2">
            {product?.price && (
              <span style={{ fontWeight: 700 }}>₹{product.price}</span>
            )}
            {product?.mrp && product?.mrp > product?.price && (
              <span className="text-muted text-decoration-line-through">
                ₹{product.mrp}
              </span>
            )}
            {off > 0 && (
              <Badge bg="danger" pill>
                {off}% OFF
              </Badge>
            )}
          </div>
        )}

        {/* Ratings */}
        <div className="d-flex align-items-center gap-2 mb-2" style={{ fontSize: 13 }}>
          {product?.rating != null && (
            <Badge bg="success" >
              {Number(product.rating).toFixed(1)}
            </Badge>
          )}
          <span>
            <RatingStars rating={product?.rating ?? 0} />
          </span>
          {product?.ratingsCount != null && (
            <span className="text-muted" >
              ({product.ratingsCount} ratings)
            </span>
          )}
        </div>

        {/* Description */}
        {product?.description && (
          <p
            className="mb-0"
            style={{
              
              fontSize: 14,
              color: "#555",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {product.description}
          </p>
        )}

        {/* CTA */}
        <Link href={`/product/${product.id}`} className="mt-auto">
          <Button
            className="mt-3 w-100"
            style={{ backgroundColor: "#0077b6" }}
          >
            View more
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
