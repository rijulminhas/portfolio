"use client";

import { motion } from "framer-motion";
import {
  Cloud,
  Database,
  Layout,
  Radio,
  ShieldCheck,
  Webhook,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { architectureLayers } from "@/data/philosophy";

const icons: LucideIcon[] = [Layout, Webhook, ShieldCheck, Database, Radio, Cloud];

export function ArchitectureDiagram() {
  return (
    <section className="relative py-28 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="Beyond the UI"
          title="Full-stack, from request to response."
          description="Every screen is backed by a real system — validated inputs, authenticated requests, a relational schema and a deployment pipeline."
          align="center"
          className="mb-16"
        />

        <div className="relative flex flex-col items-center">
          <div
            className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-border to-accent-2/40"
            aria-hidden
          />
          <ol className="flex w-full flex-col gap-4">
            {architectureLayers.map((layer, i) => {
              const Icon = icons[i];
              return (
                <motion.li
                  key={layer.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                  className="relative z-10 mx-auto flex w-full max-w-md items-center gap-4 rounded-xl border border-border bg-card px-5 py-4 shadow-lg shadow-black/20"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-bg-secondary text-accent-2">
                    <Icon size={16} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-text-primary">{layer.label}</p>
                    <p className="text-xs text-text-muted">{layer.detail}</p>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
