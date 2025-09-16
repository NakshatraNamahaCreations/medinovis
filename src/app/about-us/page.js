// src/app/about-us/page.js

import BreadcrumbBar from "../components/BreadcrumbBar";
import Footer from "../components/Footer";
import SiteNavbar from "../components/SiteNavbar";
import AboutBanner from "./AboutBanner";
import AboutUsFeatures from "./AboutUsFeatures";
import MissionVision from "./MissionVision";
import QualityCare from "./QualityCare";

export const metadata = {
  title: "About Us | Medinovis",
  description:
    "Learn about Medinovis—our mission, quality standards, and the teams ensuring safe, verified healthcare essentials.",
};

export default function AboutUsPage() {
  return (
    <>
    <SiteNavbar/>
   
    <AboutBanner/>
    <AboutUsFeatures/>
    <MissionVision/>
    <QualityCare/>
    <Footer/>
    </>
  );
}
