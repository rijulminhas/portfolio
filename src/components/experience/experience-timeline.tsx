"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { experience } from "@/data/experience";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="relative py-28 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Where the work happened."
          className="mb-16"
        />

        <div className="relative">
          <div
            className="absolute left-[7px] top-2 bottom-2 w-px bg-border sm:left-[9px]"
            aria-hidden
          />
          <ol className="flex flex-col gap-12">
            {experience.map((entry, i) => (
              <motion.li
                key={entry.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: "easeOut" }}
                className="relative pl-8 sm:pl-10"
              >
                <span
                  className={
                    "absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 sm:h-[18px] sm:w-[18px] " +
                    (entry.current
                      ? "border-accent-highlight bg-accent-highlight/20"
                      : "border-border-strong bg-card")
                  }
                  aria-hidden
                />

                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-lg font-semibold text-text-primary">
                    {entry.role}{" "}
                    <span className="text-text-secondary font-normal">
                      — {entry.company}
                    </span>
                  </h3>
                  <span className="text-sm text-text-muted whitespace-nowrap">
                    {entry.period}
                  </span>
                </div>
                {entry.location && (
                  <p className="mt-1 text-sm text-text-muted">{entry.location}</p>
                )}
                <ul className="mt-4 flex flex-col gap-2">
                  {entry.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2.5 text-sm text-text-secondary sm:text-base"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-2" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
