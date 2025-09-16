// src/app/about-us/page.js

import Footer from "../components/Footer";
import SiteNavbar from "../components/SiteNavbar";
import ContactBanner from "./ContactBanner";
import EnquiryForm from "./EnquiryForm";



export const metadata = {
  title: "Contact Us | Medinovis",
  description:
    "Learn about Medinovis—our mission, quality standards, and the teams ensuring safe, verified healthcare essentials.",
};

export default function AboutUsPage() {
  return (
    <>
    <SiteNavbar/>
    <ContactBanner/>
    <EnquiryForm/>
    <Footer/>
    </>
  );
}
