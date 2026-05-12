import { InfrastructureHero } from "@/components/sections/InfrastructureHero";
import { InfrastructureBento } from "@/components/sections/InfrastructureBento";
import { InfrastructureWorkflow } from "@/components/sections/InfrastructureWorkflow";
import { InfrastructureMap } from "@/components/sections/InfrastructureMap";

export const metadata = {
  title: "Infrastructure & Capabilities | Aeron Steels",
  description:
    "Aeron Steels' state-of-the-art manufacturing facility equipped with advanced rolling mills, precision slitting lines, and comprehensive quality testing laboratories. 10,000+ MT annual capacity.",
};

export default function InfrastructurePage() {
  return (
    <>
      <InfrastructureHero />
      <InfrastructureBento />
      <InfrastructureWorkflow />
      <InfrastructureMap />
    </>
  );
}
