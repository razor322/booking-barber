import CapstersSection from "@/components/specifics/home/CapsterSection";
import FacilitiesSection from "@/components/specifics/home/FacilitiesSection";
import FeatureSection from "@/components/specifics/home/FeatureSection";
import HeroSection from "@/components/specifics/home/HeroSection";
import InfoLocationSection from "@/components/specifics/home/InfoLocationSection";
import ServiceSection from "@/components/specifics/home/ServiceSection";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    document.title = "Home — Apex Grooming";
  }, []);

  return (
    <>
      <HeroSection />
      <FeatureSection />
      <ServiceSection />
      <CapstersSection />
      <FacilitiesSection />
      <InfoLocationSection
        address="Jl. Dr. Moh. Hatta No.5, Padang, Sumatera Barat 25152"
        hours="Senin–Minggu • 10.00–21.00 WIB"
        phone="0812-3456-7890"
        email="booking@apexgrooming.com"
      />
    </>
  );
}
