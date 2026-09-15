"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpDown } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { GitHubIcon } from "@/components/ui/icons";
import { featuredProject } from "@/data/projects";

const dataFlow = ["User", "Next.js", "API / Server Actions", "Drizzle ORM", "PostgreSQL"];
const realtimeFlow = ["Next.js", "WebSocket Server", "Real-time Chat"];

export function BalanceBuddyCaseStudy() {
  return (
    <section className="relative py-28 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="Case Study"
          title="Built for real-world collaboration."
          description={featuredProject.description}
          className="mb-14"
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="rounded-2xl border border-border bg-card p-8">
            <h3 className="mb-8 text-sm font-semibold tracking-wide text-text-muted uppercase">
              Request Architecture
            </h3>
            <div className="flex flex-col items-start">
              {dataFlow.map((step, i) => (
                <div key={step} className="flex flex-col items-start">
                  <FlowNode label={step} index={i} />
                  {i < dataFlow.length - 1 && <FlowArrow direction="down" delay={i * 0.1 + 0.15} />}
                </div>
              ))}
            </div>
          </Reveal>

          <div className="flex flex-col gap-6">
            <Reveal delay={0.1} className="rounded-2xl border border-border bg-card p-8">
              <h3 className="mb-8 text-sm font-semibold tracking-wide text-text-muted uppercase">
                Real-Time Layer
              </h3>
              <div className="flex flex-col items-start">
                {realtimeFlow.map((step, i) => (
                  <div key={step} className="flex flex-col items-start">
                    <FlowNode label={step} index={i} accent />
                    {i < realtimeFlow.length - 1 && (
                      <FlowArrow direction="both" delay={i * 0.1 + 0.15} />
                    )}
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.2} className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-8">
              <p className="text-sm text-text-secondary">
                Group expense management, settlements, chores and shared shopping lists
                are backed by a persistent PostgreSQL schema, while chat and presence
                run over a dedicated WebSocket layer for instant delivery and seen-by
                tracking.
              </p>
              <div className="flex flex-wrap gap-3">
                {featuredProject.liveUrl && (
                  <Button href={featuredProject.liveUrl} external className="self-start">
                    Explore Project
                  </Button>
                )}
                {featuredProject.githubUrl && (
                  <Button
                    href={featuredProject.githubUrl}
                    external
                    variant="outline"
                    className="self-start"
                  >
                    <GitHubIcon className="h-4 w-4" />
                    View Code
                  </Button>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function FlowNode({
  label,
  index,
  accent,
}: {
  label: string;
  index: number;
  accent?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.1, ease: "easeOut" }}
      className={
        "rounded-lg border px-4 py-2.5 text-sm font-medium " +
        (accent
          ? "border-accent-2/30 bg-accent-2/[0.06] text-accent-highlight"
          : "border-border bg-bg-secondary text-text-primary")
      }
    >
      {label}
    </motion.div>
  );
}

function FlowArrow({ direction, delay }: { direction: "down" | "both"; delay: number }) {
  const Icon = direction === "down" ? ArrowDown : ArrowUpDown;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay }}
      className="py-1.5 pl-5 text-text-muted"
    >
      <Icon size={14} />
    </motion.div>
  );
}
