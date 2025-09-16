"use client"; 
import dynamic from "next/dynamic";
import SiteNavbar from "./components/SiteNavbar";
import ClientBanner from "./components/ClientBanner";
import PromoBanner from "./components/PromoBanner";
import HealthConcernSlider from "./components/HealthConcernSlider";
import ProductSlider from "./components/ProductSlider";
import BlogSlider from "./components/BlogSlider";
import FeaturesSection from "./components/FeaturesSection";
import FaqSection from "./components/FaqSection";
import TestimonialsSection from "./components/TestimonialsSection";
import Footer from "./components/Footer";



export default function Home() {
  return (
    <>
      <SiteNavbar />
      <ClientBanner />
      <PromoBanner/>
      <HealthConcernSlider/>
    
      <ProductSlider/>
        <FeaturesSection/>
      <BlogSlider/>
      <TestimonialsSection/>
      <FaqSection/>
      <Footer/>
    </>
  );
}
