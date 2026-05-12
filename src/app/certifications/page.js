import { CertificationsHero } from "@/components/sections/CertificationsHero";
import { CertificationsGrid } from "@/components/sections/CertificationsGrid";
import { CertificationsTimeline } from "@/components/sections/CertificationsTimeline";
import CertificationsRemaining from "./certifications-remaining";

export const metadata = {
  title: "Certifications & Compliance | Aeron Steels",
  description:
    "Aeron Steels is ISO 9001:2015 certified. Explore our certifications, quality accreditations, and compliance with international standards including IS, AISI, DIN, JIS, and ASTM.",
};

export default function CertificationsPage() {
  return (
    <>
      <CertificationsHero />
      <CertificationsGrid />
      <CertificationsTimeline />
      <CertificationsRemaining />
    </>
  );
}
