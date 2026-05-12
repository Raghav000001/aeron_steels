"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] },
  }),
};

export function AboutFacilities() {
  return (
    <section className="py-[160px]">
      <div className="max-w-[1440px] mx-auto px-5 md:px-[64px] mb-[32px]">
        <motion.h2
          className="font-heading text-[40px] text-white font-semibold"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Our <span className="text-primary" style={{ textShadow: "0 0 20px rgba(255, 179, 173, 0.4)" }}>Facilities</span>
        </motion.h2>
        <motion.p
          className="font-mono text-[12px] text-on-surface-variant font-medium tracking-[0.1em] uppercase mt-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={1}
        >
          PRECISION AT SCALE
        </motion.p>
      </div>

      {/* Horizontal scroll */}
      <div className="flex gap-[24px] overflow-x-auto pb-[32px] snap-x px-5 md:px-[64px] no-scrollbar">
        {/* Facility 1 */}
        <motion.div
          className="min-w-[300px] md:min-w-[600px] aspect-video relative snap-center group rounded-[4px] overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
        >
          <img
            className="w-full h-full object-cover"
            alt="The Molten Forge"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSz3BkIqh57BK69RqDb_3SrjuFlp-TSWmFhLR1xbs05Y4dIVzasI7JDNOTTxmEbqY9ALBabwKMUkZgQ9pn1wpWo6vr-N_c2xJJOeP5IZjOqVMJjLUN5DITAJfZi2oLZhw0SQcmNiq2xiiTCBV_rUgvJXi0J6Tu3sWXt678nnM9vu0zaIyJi-wS6ECsZUfXI9ALYQIGYpPlCcNOtDzDvSGz3jSb9mW0SvvYulK47uU6mFSCNfjjhxIE_hOtI6njM38njitizZIj6eMG"
          />
          <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/80 to-transparent">
            <span className="font-mono text-[12px] text-primary tracking-[0.1em] font-medium block mb-2 uppercase">Facility Alpha</span>
            <h4 className="font-heading text-[20px] md:text-[24px] text-white">The Molten Forge</h4>
          </div>
        </motion.div>

        {/* Facility 2 */}
        <motion.div
          className="min-w-[300px] md:min-w-[600px] aspect-video relative snap-center group rounded-[4px] overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={1}
        >
          <img
            className="w-full h-full object-cover"
            alt="Nano-Alloy Research"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMeL1B_CK2SdsU3PPUQ6LgZMdkldL6L-f7EJtpzBiPWeHaoOTXgrPjsN6_zKMUO7AZIqjzcqOYmeayAC05ZRKfAnL08Awuj7u8fZiGRzhJSFaHtMAh3AKtuUusGofxg3G2Ryz6cvmp9ke9fT075fpVBAquxl1F4UkDtamPVK3zLGwXSeo--0pk-c6ha0b2sSAoW1eF3DrqZwINU9Z_IzKmnPp9APC3Za9ti-xRAd8T6NIprj3BXjOtvGEKkWUBVRi3TjLkDGXSAWVS"
          />
          <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/80 to-transparent">
            <span className="font-mono text-[12px] text-primary tracking-[0.1em] font-medium block mb-2 uppercase">R&amp;D Lab 04</span>
            <h4 className="font-heading text-[20px] md:text-[24px] text-white">Nano-Alloy Research</h4>
          </div>
        </motion.div>

        {/* Facility 3 */}
        <motion.div
          className="min-w-[300px] md:min-w-[600px] aspect-video relative snap-center group rounded-[4px] overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={2}
        >
          <img
            className="w-full h-full object-cover"
            alt="The Distribution Grid"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8hYeYE4uIBC97DWgWl1ZBHgWyqGBNFbeZ5XqYLkmWDtwYKM7EeBecj1jXXDp25e85yEp8XHEbe5BO2cNXjuFQpD5a8dhF0OdDfkE7P_mo-i5CgHXyobQ3ObBLXRF0UZyiX1srVINnK9QYlBW3Byz7o6XbSJzMcVl5fPUY3E8g8g51iD-QcQP6qYaRvoMD6P_7QIWDM-W3en9WJJVv-aDfrWRPWP0YOiwhJ7dKQTol6yQ6hvYyBHALuZk2KnE-a_SToVaXowT7Aybm"
          />
          <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/80 to-transparent">
            <span className="font-mono text-[12px] text-primary tracking-[0.1em] font-medium block mb-2 uppercase">Global Logistics Hub</span>
            <h4 className="font-heading text-[20px] md:text-[24px] text-white">The Distribution Grid</h4>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
