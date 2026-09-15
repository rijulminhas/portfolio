"use client";

import { useState, type FormEvent, type ReactNode, type SVGProps } from "react";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

type IconComponent = (props: SVGProps<SVGSVGElement>) => ReactNode;

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || "a visitor"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="relative py-28 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Have something worth building?"
              description="Let&rsquo;s turn the idea into something real."
            />

            <Reveal delay={0.15} className="mt-10 flex flex-col gap-3">
              <ContactLink icon={Mail} label={site.email} href={`mailto:${site.email}`} />
              <ContactLink
                icon={LinkedInIcon}
                label="LinkedIn"
                href={site.linkedin}
                external
              />
              <ContactLink icon={GitHubIcon} label="GitHub" href={site.github} external />
            </Reveal>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-8"
          >
            <p className="text-xs text-text-muted">
              This form opens your email client with the message pre-filled — it isn&rsquo;t
              wired to a backend.
            </p>
            <Field
              id="name"
              label="Name"
              value={name}
              onChange={setName}
              required
            />
            <Field
              id="email"
              label="Email"
              type="email"
              value={email}
              onChange={setEmail}
              required
            />
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-xs font-medium text-text-secondary">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="focus-ring resize-none rounded-xl border border-border bg-bg-secondary px-4 py-3 text-sm text-text-primary placeholder:text-text-muted"
                placeholder="Tell me about the project..."
              />
            </div>
            <Button type="submit" className="self-start">
              <Send size={16} />
              Send Message
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  type = "text",
  required,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-xs font-medium text-text-secondary">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="focus-ring rounded-xl border border-border bg-bg-secondary px-4 py-3 text-sm text-text-primary placeholder:text-text-muted"
      />
    </div>
  );
}

function ContactLink({
  icon: Icon,
  label,
  href,
  external,
}: {
  icon: IconComponent;
  label: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="focus-ring group flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 text-sm text-text-secondary transition-colors duration-300 hover:border-accent-2/30 hover:text-text-primary"
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-bg-secondary text-accent-2 transition-transform duration-300 group-hover:scale-105">
        <Icon className="h-3.75 w-3.75" />
      </span>
      {label}
    </a>
  );
}
