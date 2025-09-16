"use client";

import React from "react";
import "./FaqSection.css";

export default function FaqSection() {
  const faqs = [
  {
    question: "What is Medinovis?",
    answer:
      "Medinovis is a trusted medical knowledge hub offering in-depth information on medicines, ingredients, and health conditions. We are not a pharmacy, clinic, or e-commerce store — our focus is purely educational."
  },
  {
    question: "How is Medinovis different from other medical sites?",
    answer:
      "Unlike marketplaces or consultation apps, Medinovis provides research-backed, unbiased information. We don’t sell medicines or services. Instead, we offer comprehensive, interlinked content about products, ingredients, and diseases to help users make informed decisions."
  },
  {
    question: "Where does Medinovis get its medical information?",
    answer:
      "Our data is curated from trusted medical references, verified research studies, and product inserts. Each page is carefully structured and regularly reviewed to ensure accuracy and reliability."
  },
  {
    question: "Can I use Medinovis for self-diagnosis?",
    answer:"No. Medinovis is designed for awareness and education only. It’s important to consult a licensed doctor or pharmacist for diagnosis, prescriptions, and treatment decisions.  "
  
  },
  {
    question: "What kind of content can I find on Medinovis?",
    answer:
      "On Medinovis, you’ll find clear medicine pages covering uses, dosage, and precautions; ingredient insights with scientific information on active compounds; disease guides outlining symptoms, causes, and treatments; and linked references that connect related pages for easy understanding."
  },
  {
    question: "Do you provide product recommendations?",
    answer:
      "We don’t promote or sell specific products. Instead, we give neutral, verified information so you can discuss the right choices with your healthcare provider."
  },

  ];

  return (
    <section className="faq-wrapper">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <div className="faq-question">{faq.question}</div>
            <div className="faq-answer">{faq.answer}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
