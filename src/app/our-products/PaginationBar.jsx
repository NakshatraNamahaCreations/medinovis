// app/components/PaginationBar.jsx
"use client";

import { Pagination } from "react-bootstrap";

export default function PaginationBar({ page, setPage, total, perPage }) {
  const pages = Math.max(1, Math.ceil(total / perPage));
  if (pages <= 1) return null;

  const go = (p) => setPage(Math.min(pages, Math.max(1, p)));

  const items = [];
  for (let i = 1; i <= pages; i++) {
    if (i === 1 || i === pages || Math.abs(i - page) <= 1) {
      items.push(
        <Pagination.Item key={i} active={i === page} onClick={() => go(i)}>
          {i}
        </Pagination.Item>
      );
    } else if (items[items.length - 1]?.type !== Pagination.Ellipsis) {
      items.push(<Pagination.Ellipsis key={`e-${i}`} disabled />);
    }
  }

  return (
    <Pagination className="justify-content-center mt-4" aria-label="Pagination">
      <Pagination.Prev onClick={() => go(page - 1)} disabled={page === 1} />
      {items}
      <Pagination.Next onClick={() => go(page + 1)} disabled={page === pages} />
    </Pagination>
  );
}
