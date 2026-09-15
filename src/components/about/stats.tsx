"use client";

import { motion } from "framer-motion";
import { stats } from "@/data/site";

export function Stats() {
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
          className="flex flex-col gap-1 bg-card px-4 py-6 transition-colors duration-300 hover:bg-card-elevated sm:px-5"
        >
          <span className="wrap-break-word text-xl font-semibold tracking-tight text-text-primary sm:text-2xl lg:text-3xl">
            {stat.value}
          </span>
          <span className="text-xs text-text-muted sm:text-sm">{stat.label}</span>
        </motion.div>
      ))}
    </div>
  );
}
