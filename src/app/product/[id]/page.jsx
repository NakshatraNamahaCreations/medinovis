// app/product/[id]/page.jsx
import { notFound } from "next/navigation";
import { getProductById, productsData } from "../ProductName";
import ProductDetailsClient from "./ProductDetailsClient";
import Footer from "@/app/components/Footer";
import SiteNavbar from "@/app/components/SiteNavbar";
import BreadcrumbBar from "@/app/components/BreadcrumbBar";

export async function generateStaticParams() {
  return productsData.map((p) => ({ id: String(p.id) }));
}

export const revalidate = 0; // optional

export default function ProductByIdPage({ params }) {
  const product = getProductById(params.id);
  if (!product) return notFound();

  // ✅ Your client component expects `id`, not `product`
  return (
  
  <>
  <SiteNavbar/>
  <BreadcrumbBar
  items={[
    { label: "Home", href: "/" },
    { label: "Our Products", href: "/our-product" },
    { label: "Product Info" }   // no href = current page
  ]}
/>

  <ProductDetailsClient id={params.id} />
  
  
  </>);
}


