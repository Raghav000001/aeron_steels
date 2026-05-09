import PageHero from "@/components/shared/PageHero";
import AnimatedSection from "@/components/shared/AnimatedSection";

export const metadata = {
  title: "Terms of Service | Aeron Steels",
  description: "Terms and conditions for using the Aeron Steels website and services.",
};

const SECTIONS = [
  {
    title: "Acceptance of Terms",
    content: "By accessing and using this website, you accept and agree to be bound by these terms of service. If you do not agree with any part of these terms, you should not use this website.",
  },
  {
    title: "Intellectual Property",
    content: "All content on this website, including text, graphics, logos, images, and software, is the property of Aeron Steels and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our prior written consent.",
  },
  {
    title: "Product Information",
    content: "We make every effort to ensure product descriptions and specifications are accurate. However, specifications may vary and we reserve the right to make changes without prior notice. Please confirm specifications with our sales team before placing orders.",
  },
  {
    title: "Pricing and Orders",
    content: "Prices are subject to change without notice. All orders are subject to acceptance and availability. We reserve the right to refuse or cancel any order at our discretion.",
  },
  {
    title: "Limitation of Liability",
    content: "Aeron Steels shall not be liable for any indirect, incidental, or consequential damages arising from the use of this website or the products purchased through it. Our total liability is limited to the amount paid for the products in question.",
  },
  {
    title: "Third-Party Links",
    content: "This website may contain links to third-party websites. We are not responsible for the content or practices of these websites and encourage you to review their terms and policies.",
  },
  {
    title: "Changes to Terms",
    content: "We reserve the right to update these terms of service at any time. Changes will be posted on this page with an updated date. Continued use of the website after changes constitutes acceptance of the new terms.",
  },
  {
    title: "Contact Information",
    content: "For questions about these terms, please contact us at sales@aeronsteels.com or call +91 98182 23471.",
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms of Service"
        subtitle="Terms and conditions governing the use of our website and services."
        breadcrumbs={[{ label: "Terms of Service" }]}
      />
      <AnimatedSection>
        <div className="max-w-3xl mx-auto">
          <p className="text-body leading-relaxed mb-8 animate-on-scroll">
            Last updated: January 2026. Please read these terms carefully before using our website or services.
          </p>
          <div className="space-y-8">
            {SECTIONS.map((section, i) => (
              <div key={i} className="animate-on-scroll">
                <h2 className="text-xl font-heading font-bold text-heading mb-3">{section.title}</h2>
                <p className="text-body leading-relaxed text-sm">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
