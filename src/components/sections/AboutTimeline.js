import { Timeline } from "@/components/ui/timeline";

const TIMELINE_DATA = [
  {
    title: "1995",
    content: (
      <div className="glass-panel p-8 md:p-10 hover:neon-border transition-all duration-300 neon-border bg-white/5 rounded-[4px] relative shadow-[0_0_15px_rgba(255,84,81,0.2),inset_0_0_1px_rgba(255,84,81,0.5)]">
        <h3 className="font-heading text-[20px] md:text-[24px] text-white mb-4">The Spark</h3>
        <p className="font-sans text-[14px] md:text-[16px] text-on-surface-variant leading-relaxed">
          Aeron Steels initiates operations with a revolutionary thermal processing technique for specialized heavy industrial alloys.
        </p>
      </div>
    ),
  },
  {
    title: "2012",
    content: (
      <div className="glass-panel p-8 md:p-10 hover:neon-border transition-all duration-300 neon-border bg-white/5 rounded-[4px] relative shadow-[0_0_15px_rgba(255,84,81,0.2),inset_0_0_1px_rgba(255,84,81,0.5)]">
        <h3 className="font-heading text-[20px] md:text-[24px] text-white mb-4">Autonomous Integration</h3>
        <p className="font-sans text-[14px] md:text-[16px] text-on-surface-variant leading-relaxed">
          Global deployment of AI-orchestrated smelting chains, achieving unprecedented uniformity in structural steel components.
        </p>
      </div>
    ),
  },
  {
    title: "2024",
    content: (
      <div className="glass-panel p-8 md:p-10 transition-all duration-300 neon-border bg-white/5 shadow-[0_0_40px_rgba(255,84,81,0.8)] rounded-[4px] relative">
        <h3 className="font-heading text-[20px] md:text-[24px] text-white mb-4">Zero-Carbon Frontier</h3>
        <p className="font-sans text-[14px] md:text-[16px] text-on-surface-variant leading-relaxed">
          Pioneering the industry&apos;s first large-scale green hydrogen powered forge, redefining environmental responsibility in heavy industry.
        </p>
      </div>
    ),
  },
];

export function AboutTimeline() {
  return <Timeline data={TIMELINE_DATA} />;
}
