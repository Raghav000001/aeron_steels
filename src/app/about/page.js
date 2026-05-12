import { AboutHero } from "@/components/sections/AboutHero";
import { AboutVisionMission } from "@/components/sections/AboutVisionMission";
import { AboutTimeline } from "@/components/sections/AboutTimeline";
import { AboutFacilities } from "@/components/sections/AboutFacilities";
import { AboutImpact } from "@/components/sections/AboutImpact";

export const metadata = {
  title: "About Us | Aeron Steels",
  description:
    "Aeron Steels — defining the global standard in high-performance metallurgy through autonomous engineering and visionary industrial design.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutVisionMission />
      <AboutTimeline />
      <AboutFacilities />
      <AboutImpact />
    </>
  );
}
