import { HeroBanner } from "@/components/sections/HeroBanner";
import { ClientCarousel } from "@/components/sections/ClientCarousel";
import { StatsSection } from "@/components/sections/StatsSection";
import { ValuesSection } from "@/components/sections/ValuesSection";
import { MediaPressSection } from "@/components/sections/MediaPressSection";
import { ProductSpecsSection } from "@/components/sections/ProductSpecsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <ClientCarousel />
      <StatsSection />
      <ValuesSection />
      <MediaPressSection />
      <ProductSpecsSection />
      <TestimonialsSection />
    </>
  );
}
