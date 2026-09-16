import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Stats } from "@/components/about/stats";
import { site } from "@/data/site";

const capabilities = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "APIs",
  "Real-time systems",
  "Authentication",
  "Performance optimization",
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-28 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          <Reveal className="relative mx-auto w-full max-w-xs lg:mx-0">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-card">
              <Image
                src={site.photo}
                alt={site.name}
                fill
                sizes="(min-width: 1024px) 320px, 80vw"
                className="object-cover grayscale-[15%]"
                priority={false}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 60%, var(--color-bg) 100%)",
                }}
              />
            </div>
            {/* <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl border border-accent-2/20" /> */}
          </Reveal>

          <div className="flex flex-col gap-10">
            <SectionHeading
              eyebrow="About"
              title="Engineering with a product mindset."
              description="Full-Stack Developer experienced in building scalable and responsive applications — comfortable owning features end-to-end, from database schema and API design to polished, responsive UI."
            />

            <Reveal delay={0.1} className="flex flex-wrap gap-2">
              {capabilities.map((cap) => (
                <span
                  key={cap}
                  className="rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-text-secondary"
                >
                  {cap}
                </span>
              ))}
            </Reveal>

            <Stats />
          </div>
        </div>
      </div>
    </section>
  );
}
