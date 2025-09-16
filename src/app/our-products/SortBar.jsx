// app/components/SortBar.jsx
"use client";

import { Row, Col, Form } from "react-bootstrap";

export const SORTS = [
  { value: "relevance", label: "Relevance" },
  { value: "price_asc", label: "Price: Low to High" },
  { value: "price_desc", label: "Price: High to Low" },
  { value: "rating_desc", label: "Rating" },
  { value: "discount_desc", label: "Discount" },
];

export default function SortBar({ sort, setSort, total }) {
  return (
    <Row className="align-items-center mb-3">
      <Col>
        <div className="fw-semibold" >
          {total} Products
        </div>
      </Col>
      <Col xs="auto">
        <div className="align-items-center justify-content-center gap-2">
          <span className="text-muted">
            Sort By
          </span>
          <Form.Select
            size="sm"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            
          >
            {SORTS.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </Form.Select>
        </div>
      </Col>
    </Row>
  );
}
