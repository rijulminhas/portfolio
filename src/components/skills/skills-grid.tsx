"use client";

import { motion } from "framer-motion";
import { Code2, Database, Radio, Wrench, type LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { skillGroups } from "@/data/skills";

const groupIcons: Record<string, LucideIcon> = {
  Frontend: Code2,
  Backend: Database,
  "Real-Time / Auth": Radio,
  "Tools & Workflow": Wrench,
};

export function SkillsGrid() {
  return (
    <section id="skills" className="relative py-28 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Tools built for production."
          description="A focused stack for shipping full-stack applications — from responsive interfaces to real-time backends."
          className="mb-14"
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => {
            const Icon = groupIcons[group.title] ?? Code2;
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                whileHover={{ y: -4 }}
                className="group rounded-2xl border border-border bg-card p-6 transition-colors duration-300 hover:border-accent-2/30 hover:bg-card-elevated"
              >
                <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-bg-secondary text-accent-2 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105">
                  <Icon size={18} />
                </div>
                <h3 className="mb-4 text-sm font-semibold tracking-wide text-text-primary uppercase">
                  {group.title}
                </h3>
                <ul className="flex flex-col gap-2">
                  {group.skills.map((skill) => (
                    <li key={skill} className="text-sm text-text-secondary">
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
