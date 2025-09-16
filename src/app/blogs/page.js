// src/app/about-us/page.js


import BlogSlider from "../components/BlogSlider";
import Footer from "../components/Footer";
import SiteNavbar from "../components/SiteNavbar";
import BlogBanner from "./BlogBanner";
import BlogCardSlider from "./BlogCardSlider";


export const metadata = {
  title: "Blogs | Medinovis",
  description:
    "Learn about Medinovis—our mission, quality standards, and the teams ensuring safe, verified healthcare essentials.",
};

export default function BlogsPage() {
  return (
    <>
    <SiteNavbar/>
    <BlogBanner/>
   {/* <BlogCards/> */}
   <BlogCardSlider/>
   <br/>
     <br/>
    <Footer/>
    </>
  );
}
