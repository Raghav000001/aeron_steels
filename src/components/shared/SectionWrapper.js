export default function SectionWrapper({ children, className = "", muted = false }) {
  return (
    <section className={`py-16 md:py-20 ${muted ? "bg-muted" : "bg-white"} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
