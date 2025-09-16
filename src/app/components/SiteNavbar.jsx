"use client"; // Needed if you use hooks like usePathname

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./site-navbar.css";

export default function SiteNavbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/our-products", label: "Our Products" },
    { href: "/blogs", label: "Blog" },
    { href: "/contact-us", label: "Contact Us" },
  ];

  return (
    <header className="siteHeader">
      <div className="mainBar">
        <div className="container mainRow">
          {/* Brand */}
          <div className="brandWrap">
            <Link href="/" className="brand" aria-label="Medinovis home">
              Medinovis
            </Link>
          </div>

          {/* Navigation */}
          <nav className="navTabs" aria-label="Primary">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`tabLink ${pathname === link.href ? "active" : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
