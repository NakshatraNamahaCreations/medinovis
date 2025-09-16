"use client";
import dynamic from "next/dynamic";

const BannerSlider = dynamic(() => import("./BannerSlider"), { ssr: false });

export default function ClientBanner() {
  return <BannerSlider />;
}
