import CapstersSection from "@/components/specifics/CapsterSection";
import FacilitiesSection from "@/components/specifics/FacilitiesSection";
import FeatureSection from "@/components/specifics/FeatureSection";
import HeroSection from "@/components/specifics/HeroSection";
import InfoLocationSection from "@/components/specifics/InfoLocationSection";
import ServiceSection from "@/components/specifics/ServiceSection";
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
