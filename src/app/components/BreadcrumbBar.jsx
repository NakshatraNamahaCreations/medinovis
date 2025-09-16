"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./BreadcrumbBar.css";

/**
 * If you want full control, pass `items` like:
 * <BreadcrumbBar items={[{label:"Home", href:"/"},{label:"About Us"}]} />
 * Otherwise it auto-builds from the URL.
 */
export default function BreadcrumbBar({ items }) {
  const pathname = usePathname();

  // Auto-build from URL if not provided
  const autoItems =
    items ||
    pathname
      .split("?")[0]
      .split("#")[0]
      .split("/")
      .filter(Boolean)
      .map((seg, idx, arr) => {
        const href = "/" + arr.slice(0, idx + 1).join("/");
        const label = decodeURIComponent(seg)
          .replace(/-/g, " ")
          .replace(/\b\w/g, (c) => c.toUpperCase());
        return { label, href: idx < arr.length - 1 ? href : undefined };
      });

  // Always prepend Home
  const finalItems =
    autoItems?.[0]?.label?.toLowerCase() === "home"
      ? autoItems
      : [{ label: "Home", href: "/" }, ...autoItems];

  return (
    <div className="crumb" style={{backgroundColor:"#e6edf7"}}>
    <div className="crumbbar">
      <nav className="crumbbar__inner" aria-label="Breadcrumb">
        <ol className="crumbbar__list">
          {finalItems.map((item, i) => {
            const isLast = i === finalItems.length - 1;
            return (
              <li key={i} className="crumbbar__item" aria-current={isLast ? "page" : undefined}>
                {item.href && !isLast ? (
                  <Link href={item.href} className="crumbbar__link">
                    {item.label}
                  </Link>
                ) : (
                  <span className="crumbbar__current">{item.label}</span>
                )}
                {!isLast && <Chevron />}
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
    </div>
  );
}

function Chevron() {
  return (
    <svg className="crumbbar__chev" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
      <path d="M3 1l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
