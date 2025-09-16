"use client";

import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top container">
        {/* Know Us */}
        <div className="footer__col">
          <h4 className="footer__title">Know Us</h4>
          <ul>
            <li><Link href="/about-us">About Us</Link></li>
            <li><Link href="/our-products">Our Products</Link></li>
            <li><Link href="/blogs">Blogs</Link></li>
            <li><Link href="/contact-us">Contact Us</Link></li>
          </ul>
        </div>

        {/* Policies */}
        <div className="footer__col">
          <h4 className="footer__title">Product Categories</h4>
          <ul>
            <li><Link href="/our-products">Diabetes</Link></li>
            <li><Link href="/our-products">Fitness & Health</Link></li>
            <li><Link href="/our-products">Immunity Boosters</Link></li>
            <li><Link href="/our-products">Vitamins & Nutritions</Link></li>
          </ul>
        </div>

        {/* Connect */}
        <div className="footer__col">
          <h4 className="footer__title">Connect</h4>
          <p>Social Links</p>
          <div className="footer__social">
            <Link
               href="#"
              aria-label="Facebook"
              className="footer__social-icon"
            >
              <FaFacebookF />
            </Link>
            <Link
              href="#"
              aria-label="LinkedIn"
              className="footer__social-icon"
            >
              <FaLinkedinIn />
            </Link>
          </div>
        </div>

        {/* Location */}
        <div className="footer__col">
          <h4 className="footer__title">Location</h4>
          <p>
            Medinovis Pharma Private Limited <br />
            M P M Employees Layout, Kengunte, Mallathahalli, <br />
            Bengaluru, Karnataka 560056
          </p>
        </div>
      </div>

      <hr className="footer__divider" />

      {/* Badges */}
      <div className="footer__badges container">
        <div className="footer__badge">
          <div className="footer__badge-icon" aria-hidden="true">
            <Image src="/images/badge (1).png" alt="" width={72} height={72} />
          </div>
          <div>
            <h5>Manufacturer-Backed Knowledge</h5>
            <p>
              All details are sourced directly from Medinovis’ R&amp;D and
              manufacturing teams, ensuring 100% authenticity.
            </p>
          </div>
        </div>

        <div className="footer__badge">
          <div className="footer__badge-icon" aria-hidden="true">
            <Image src="/images/cyber-security.png" alt="" width={72} height={72} />
          </div>
          <div>
            <h5>Safe &amp; Transparent</h5>
            <p>
              We publish verified product details, formulation breakdowns, and
              ingredient information for doctors, pharmacists, and distributors.
            </p>
          </div>
        </div>

        <div className="footer__badge">
          <div className="footer__badge-icon" aria-hidden="true">
            <Image src="/images/target (1).png" alt="" width={72} height={72} />
          </div>
          <div>
            <h5>Industry-Focused</h5>
            <p>
              Medinovis supports B2B visibility by making technical and product
              information publicly accessible to healthcare professionals and
              distributors.
            </p>
          </div>
        </div>
      </div>

      <div className="footer__bottom container">
        <p>© {new Date().getFullYear()} Medinovis. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
