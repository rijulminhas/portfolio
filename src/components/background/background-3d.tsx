"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Full-viewport ambient background. Pointer position drives CSS custom
 * properties (--px / --py) directly via a rAF-throttled listener instead of
 * React state, so mouse movement never triggers a re-render.
 */
export function Background3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const frame = useRef<number | null>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const root = document.documentElement;

    let px = 0;
    let py = 0;

    const onPointerMove = (e: PointerEvent) => {
      if (frame.current !== null) return;
      frame.current = requestAnimationFrame(() => {
        px = e.clientX / window.innerWidth - 0.5;
        py = e.clientY / window.innerHeight - 0.5;
        root.style.setProperty("--px", px.toFixed(4));
        root.style.setProperty("--py", py.toFixed(4));
        frame.current = null;
      });
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      if (frame.current !== null) cancelAnimationFrame(frame.current);
    };
  }, [reduceMotion]);

  return (
    <div
      ref={containerRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-bg"
      style={{ ["--px" as string]: 0, ["--py" as string]: 0 }}
    >
      {/* mouse-reactive radial glow */}
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(600px circle at calc(50% + var(--px) * 120px) calc(40% + var(--py) * 120px), rgba(124,58,237,0.16), transparent 60%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(500px circle at calc(80% + var(--px) * -80px) calc(70% + var(--py) * -80px), rgba(6,182,212,0.12), transparent 60%)",
        }}
      />

      {/* perspective grid floor */}
      <div
        className="absolute inset-x-0 bottom-0 h-[60vh] opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(var(--bg3d-line) 1px, transparent 1px), linear-gradient(90deg, var(--bg3d-line) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          transform:
            "perspective(600px) rotateX(62deg) translate3d(calc(var(--px) * 20px), calc(var(--py) * 10px), 0)",
          maskImage: "linear-gradient(to top, black, transparent)",
          WebkitMaskImage: "linear-gradient(to top, black, transparent)",
        }}
      />

      {/* floating translucent geometric elements */}
      <FloatingOrb
        className="left-[12%] top-[18%] h-40 w-40 sm:h-56 sm:w-56"
        color="rgba(124,58,237,0.14)"
        depth={30}
        duration={9}
      />
      <FloatingOrb
        className="right-[10%] top-[52%] h-48 w-48 sm:h-72 sm:w-72"
        color="rgba(6,182,212,0.10)"
        depth={-40}
        duration={11}
      />
      <FloatingPanel
        className="hidden right-6 top-[10%] h-28 w-36 xl:block"
        depth={50}
        duration={13}
      />
      <FloatingPanel
        className="hidden left-6 bottom-[10%] h-24 w-32 xl:block"
        depth={-25}
        duration={10}
      />

      {/* dot pattern texture */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(var(--bg3d-dot) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* vignette to keep edges readable */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 100% at 50% 0%, transparent 40%, var(--color-bg) 100%)",
        }}
      />
    </div>
  );
}

function FloatingOrb({
  className,
  color,
  depth,
  duration,
}: {
  className: string;
  color: string;
  depth: number;
  duration: number;
}) {
  return (
    <div
      className={`absolute rounded-full blur-3xl ${className}`}
      style={{
        background: color,
        transform: `translate3d(calc(var(--px) * ${depth}px), calc(var(--py) * ${depth}px), 0)`,
      }}
    >
      <motion.div
        className="h-full w-full rounded-full"
        animate={{ y: [0, -18, 0] }}
        transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

function FloatingPanel({
  className,
  depth,
  duration,
}: {
  className: string;
  depth: number;
  duration: number;
}) {
  return (
    <div
      className={`absolute ${className}`}
      style={{
        transform: `translate3d(calc(var(--px) * ${depth}px), calc(var(--py) * ${depth}px), 0)`,
      }}
    >
      <motion.div
        className="h-full w-full rounded-xl border border-text-primary/5 bg-text-primary/[0.02]"
        animate={{ y: [0, 14, 0], rotate: [0, 1.5, 0] }}
        transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
