"use client";
import React from "react";
import "./EnquiryForm.css";
import {
  FaEnvelope,
  FaRegFileAlt,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaUserAlt,
} from "react-icons/fa";

const EnquiryForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: send form data to your API
    // const data = Object.fromEntries(new FormData(e.currentTarget));
    // console.log(data);
    alert("Thanks! We’ll get back to you shortly.");
  };

  return (
    <section className="enquiry">
      <div className="enquiry__container">
        {/* Left Side: Enquiry Form */}
        <div className="enquiry__left">
          <h2 className="enquiry__title">Send Us an Enquiry</h2>
          <p className="enquiry__subtitle">
            Our team will get back to you as soon as possible.
          </p>

          <form className="enquiry__form" onSubmit={handleSubmit} noValidate>
            {/* Row 1: Name + Email */}
            <div className="enquiry__row">
              <div className="form-group input-with-icon">
                <FaUserAlt className="field-icon" aria-hidden="true" />
                <label className="sr-only" htmlFor="fullName">Full Name</label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Full name *"
                  required
                  autoComplete="name"
                />
              </div>

              <div className="form-group input-with-icon">
                <FaEnvelope className="field-icon" aria-hidden="true" />
                <label className="sr-only" htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email address *"
                  required
                  autoComplete="email"
                />
              </div>
            </div>

            {/* Row 2: Phone */}
            <div className="form-group input-with-icon">
              <FaPhoneAlt className="field-icon" aria-hidden="true" />
              <label className="sr-only" htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Phone number"
                autoComplete="tel"
              />
            </div>
            <br />

            {/* Row 3: Message */}
            <div className="form-group input-with-icon textarea">
              <FaRegFileAlt className="field-icon" aria-hidden="true" />
              <label className="sr-only" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>
    <br />
            <button type="submit" className="btn-submit">
              <FaEnvelope className="btn-icon" aria-hidden="true" />
              SUBMIT ENQUIRY
            </button>
          </form>
        </div>

        {/* Right Side: Contact Details */}
        <aside className="enquiry__right">
          <h3 className="contact__title">Corporate Details</h3>

          <div className="contact__item">
            <div className="contact__icon">
              <FaEnvelope />
            </div>
            <div>
              <div className="contact__label">Email</div>
              <div className="contact__value">
                support@medinovis.com
              </div>
            </div>
          </div>

         

          <div className="contact__item">
            <div className="contact__icon">
              <FaMapMarkerAlt />
            </div>
            <div>
              <div className="contact__label">Address</div>
              <div className="contact__value">
                Medinovis Pharma Private Limited M P M Empyloyees Layout, Kengunte, Mallathahalli, Bengaluru, Karnataka 560056
              </div>
            </div>
          </div>

          <div className="contact__item">
            <div className="contact__icon">
              <FaPhoneAlt />
            </div>
            <div>
              <div className="contact__label">Phone</div>
              <div className="contact__value">+91 99869 75323</div>
              <div className="contact__value">+91 95354 13739</div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default EnquiryForm;
