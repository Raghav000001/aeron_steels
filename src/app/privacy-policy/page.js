import PageHero from "@/components/shared/PageHero";
import AnimatedSection from "@/components/shared/AnimatedSection";

export const metadata = {
  title: "Privacy Policy | Aeron Steels",
  description: "Privacy policy for Aeron Steels website. Learn how we collect, use, and protect your personal information.",
};

const SECTIONS = [
  {
    title: "Information We Collect",
    content: "We collect information you provide directly when you fill out our contact forms, including your name, email address, phone number, and company name. We also collect technical information automatically when you visit our website, such as your IP address, browser type, and pages visited.",
  },
  {
    title: "How We Use Your Information",
    content: "We use the information we collect to respond to your inquiries, provide quotes, improve our website, send relevant communications about our products and services, and comply with legal obligations.",
  },
  {
    title: "Information Sharing",
    content: "We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating our website and business, subject to confidentiality agreements.",
  },
  {
    title: "Data Security",
    content: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
  },
  {
    title: "Cookies",
    content: "Our website uses cookies to enhance your browsing experience and analyze site traffic. You can control cookie preferences through your browser settings.",
  },
  {
    title: "Your Rights",
    content: "You have the right to access, correct, or delete your personal information held by us. You may also opt out of marketing communications at any time by contacting us.",
  },
  {
    title: "Contact Us",
    content: "If you have any questions about this privacy policy or our data practices, please contact us at sales@aeronsteels.com or call +91 98182 23471.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your personal information."
        breadcrumbs={[{ label: "Privacy Policy" }]}
      />
      <AnimatedSection>
        <div className="max-w-3xl mx-auto">
          <p className="text-body leading-relaxed mb-8 animate-on-scroll">
            Last updated: January 2026. Aeron Steels is committed to protecting your privacy. This policy explains how we handle your personal information.
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
