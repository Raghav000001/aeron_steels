import { HeroBanner } from "@/components/sections/HeroBanner";
import { StatsSection } from "@/components/sections/StatsSection";
import { ValuesSection } from "@/components/sections/ValuesSection";
import { ProductSpecsSection } from "@/components/sections/ProductSpecsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { GlobeSection } from "@/components/sections/GlobeSectionWrapper";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <StatsSection />
      <ProductSpecsSection />
      <ValuesSection />
      <TestimonialsSection />
      <GlobeSection />
    </>
  );
}
