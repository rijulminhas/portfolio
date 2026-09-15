"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroVisual } from "@/components/hero/hero-visual";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center pt-28 pb-20"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 px-6 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-6 inline-block text-xs font-medium tracking-[0.25em] text-accent-2 uppercase"
          >
            Full-Stack Developer
          </motion.span>

          <h1 className="text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-text-primary sm:text-5xl md:text-6xl lg:text-[3.75rem]">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className="block"
            >
              Building digital products
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              className="block bg-gradient-to-r from-text-primary via-text-primary to-accent-2 bg-clip-text text-transparent"
            >
              that actually work.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.35 }}
            className="mt-6 max-w-xl text-base text-text-secondary sm:text-lg"
          >
            {site.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.45 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button href="#projects">View My Work</Button>
            <Button href="#contact" variant="outline">
              Let&rsquo;s Connect
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-14 flex items-center gap-3 text-xs font-medium tracking-widest text-text-muted uppercase"
          >
            <span>Next.js</span>
            <span className="h-1 w-1 rounded-full bg-text-muted" />
            <span>React</span>
            <span className="h-1 w-1 rounded-full bg-text-muted" />
            <span>TypeScript</span>
          </motion.div>
        </div>

        <div className="hidden lg:block">
          <HeroVisual />
        </div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="focus-ring absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-text-muted sm:flex"
        aria-label="Scroll to About section"
      >
        <span className="text-[10px] font-medium tracking-widest uppercase">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </motion.a>
    </section>
  );
}
