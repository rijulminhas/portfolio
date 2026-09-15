import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/icons";
import { site } from "@/data/site";
import type { ReactNode, SVGProps } from "react";

export function Footer() {
  return (
    <footer className="relative border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 sm:flex-row sm:justify-between sm:px-8">
        <div className="text-center sm:text-left">
          <p className="text-sm font-semibold text-text-primary">{site.name}</p>
          <p className="text-xs text-text-muted">{site.role}</p>
        </div>

        <p className="text-xs font-medium tracking-widest text-text-muted uppercase">
          Next.js &bull; React &bull; TypeScript
        </p>

        <div className="flex items-center gap-3">
          <FooterLink href={site.github} label="GitHub" icon={GitHubIcon} />
          <FooterLink href={site.linkedin} label="LinkedIn" icon={LinkedInIcon} />
          <FooterLink href={`mailto:${site.email}`} label="Email" icon={Mail} />
        </div>
      </div>
      <p className="mt-8 text-center text-xs text-text-muted">
        &copy; {new Date().getFullYear()} {site.name}
      </p>
    </footer>
  );
}

function FooterLink({
  href,
  label,
  icon: Icon,
}: {
  href: string;
  label: string;
  icon: (props: SVGProps<SVGSVGElement>) => ReactNode;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={label}
      className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-secondary transition-colors duration-300 hover:border-accent-2/30 hover:text-accent-highlight"
    >
      <Icon className="h-3.75 w-3.75" />
    </a>
  );
}
