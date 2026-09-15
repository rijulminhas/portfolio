"use client";

import { motion } from "framer-motion";
import { Database, GitBranch, Radio, Terminal } from "lucide-react";

const nodes = [
  { icon: Terminal, label: "Next.js App", top: "6%", left: "8%", depth: 18 },
  { icon: Radio, label: "API Layer", top: "2%", left: "58%", depth: 30 },
  { icon: Database, label: "PostgreSQL", top: "56%", left: "66%", depth: -20 },
  { icon: GitBranch, label: "Real-time", top: "62%", left: "4%", depth: -14 },
];

export function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md lg:max-w-lg">
      <svg
        className="absolute inset-0 h-full w-full opacity-40"
        viewBox="0 0 400 400"
        fill="none"
        aria-hidden
      >
        <motion.path
          d="M60 60 L220 40 L340 140 L280 300 L60 260 Z"
          stroke="url(#heroLineGradient)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease: "easeInOut", delay: 0.4 }}
        />
        <line x1="60" y1="60" x2="340" y2="140" stroke="rgba(148,163,184,0.18)" />
        <line x1="220" y1="40" x2="280" y2="300" stroke="rgba(148,163,184,0.18)" />
        <defs>
          <linearGradient id="heroLineGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
      </svg>

      {/* central glass panel */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="absolute left-1/2 top-1/2 w-56 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-border-strong bg-card-elevated/80 p-4 shadow-2xl shadow-black/40 backdrop-blur-sm sm:w-64"
        style={{
          transform:
            "translate3d(calc(-50% + var(--px, 0) * 10px), calc(-50% + var(--py, 0) * 10px), 0)",
        }}
      >
        <div className="mb-3 flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-text-muted/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-text-muted/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-text-muted/40" />
        </div>
        <div className="space-y-2 font-mono text-[11px] leading-relaxed text-text-secondary">
          <p><span className="text-accent-2">const</span> stack = {"{"}</p>
          <p className="pl-3">frontend: <span className="text-accent-highlight">&quot;Next.js&quot;</span>,</p>
          <p className="pl-3">backend: <span className="text-accent-highlight">&quot;Node.js&quot;</span>,</p>
          <p className="pl-3">db: <span className="text-accent-highlight">&quot;PostgreSQL&quot;</span>,</p>
          <p>{"}"}</p>
        </div>
      </motion.div>

      {nodes.map((node, i) => {
        const Icon = node.icon;
        return (
          <motion.div
            key={node.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 + i * 0.12, ease: "easeOut" }}
            className="absolute flex items-center gap-2 rounded-full border border-border-strong bg-card/90 px-3 py-2 shadow-lg shadow-black/30 backdrop-blur-sm"
            style={{
              top: node.top,
              left: node.left,
              transform: `translate3d(calc(var(--px, 0) * ${node.depth}px), calc(var(--py, 0) * ${node.depth}px), 0)`,
            }}
          >
            <Icon size={14} className="text-accent-2" />
            <span className="text-xs font-medium text-text-secondary">{node.label}</span>
          </motion.div>
        );
      })}
    </div>
  );
}
