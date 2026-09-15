"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GitHubIcon } from "@/components/ui/icons";
import type { Project } from "@/data/projects";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: (index % 4) * 0.08, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors duration-300 hover:border-accent-2/30"
    >
      {/* browser mockup preview */}
      <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-bg-secondary">
        <div className="flex items-center gap-1.5 border-b border-border/60 bg-card px-3 py-2.5">
          <span className="h-2 w-2 rounded-full bg-text-muted/40" />
          <span className="h-2 w-2 rounded-full bg-text-muted/40" />
          <span className="h-2 w-2 rounded-full bg-text-muted/40" />
          <span className="ml-2 truncate rounded-full bg-bg-secondary px-2.5 py-0.5 text-[10px] text-text-muted">
            {project.liveUrl ? project.liveUrl.replace("https://", "") : `${project.slug}.local`}
          </span>
        </div>
        <div className="relative flex h-[calc(100%-33px)] items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 opacity-80 transition-transform duration-500 ease-out group-hover:scale-105"
            style={{
              background:
                "radial-gradient(120% 100% at 20% 20%, rgba(124,58,237,0.18), transparent 55%), radial-gradient(120% 100% at 85% 80%, rgba(6,182,212,0.16), transparent 55%)",
            }}
          />
          <span className="relative text-4xl font-semibold tracking-tight text-text-primary/15 transition-colors duration-300 group-hover:text-text-primary/25">
            {project.title}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="font-mono text-xs text-text-muted transition-colors duration-300 group-hover:text-accent-2">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-1 text-xl font-semibold text-text-primary">{project.title}</h3>
            <p className="text-sm text-text-muted">{project.subtitle}</p>
          </div>
          <div className="flex shrink-0 items-center gap-1">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} source on GitHub`}
                className="focus-ring rounded-full p-1.5 text-text-muted transition-colors duration-300 hover:text-text-primary"
              >
                <GitHubIcon className="h-4 w-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} live project`}
                className="focus-ring rounded-full p-1.5 text-text-muted transition-colors duration-300 hover:text-accent-highlight"
              >
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            )}
          </div>
        </div>

        <p className="text-sm text-text-secondary">{project.description}</p>

        <ul className="flex flex-wrap gap-1.5">
          {project.capabilities.slice(0, 4).map((cap) => (
            <li
              key={cap}
              className="rounded-full border border-border bg-bg-secondary px-2.5 py-1 text-[11px] text-text-secondary"
            >
              {cap}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="text-[11px] font-medium text-text-muted">
              {tech}
              <span className="ml-1.5 text-border-strong last:hidden">·</span>
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
