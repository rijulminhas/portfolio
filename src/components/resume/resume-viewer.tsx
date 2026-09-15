"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, FileText, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

export function ResumeViewer({
  html,
  triggerVariant = "outline",
}: {
  html: string;
  triggerVariant?: "primary" | "outline" | "ghost";
}) {
  const [open, setOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <Button variant={triggerVariant} onClick={() => setOpen(true)}>
        <FileText size={16} />
        View Resume
      </Button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="resume-viewer-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 z-100 flex items-start justify-center overflow-y-auto bg-bg/80 p-4 backdrop-blur-sm sm:items-center sm:p-6"
            onClick={(e) => {
              if (e.target === e.currentTarget) setOpen(false);
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative my-8 w-full max-w-2xl rounded-2xl border border-border bg-card text-left shadow-2xl shadow-black/40 sm:my-0"
            >
              <div className="flex items-center justify-between gap-4 border-b border-border px-6 py-4">
                <h2 id="resume-viewer-title" className="text-sm font-semibold text-text-primary">
                  {site.name} — Resume
                </h2>
                <div className="flex items-center gap-2">
                  <Button href={site.resumeUrl} external variant="ghost" className="px-3! py-1.5! text-xs">
                    <Download size={14} />
                    Download
                  </Button>
                  <button
                    ref={closeButtonRef}
                    type="button"
                    onClick={() => setOpen(false)}
                    aria-label="Close resume viewer"
                    className="focus-ring inline-flex h-8 w-8 items-center justify-center rounded-full border border-border text-text-secondary transition-colors duration-200 hover:text-text-primary"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>

              <div
                className="resume-content max-h-[70vh] overflow-y-auto px-6 py-6 sm:px-8 sm:py-8"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
