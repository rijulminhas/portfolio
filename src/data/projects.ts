export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  capabilities: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "balancebuddy",
    title: "BalanceBuddy",
    subtitle: "Group Expense & Shared-Living Platform",
    description:
      "An expense-sharing platform for shared-living groups, with real-time chat, notifications, reminders and settlements — built and independently deployed end to end.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Drizzle ORM",
      "NextAuth.js",
      "WebSockets",
    ],
    capabilities: [
      "Group expense management & splitting",
      "Settlements between members",
      "Real-time chat with seen-by tracking",
      "Notifications & reminders",
      "Chore assignment",
      "Shared shopping lists",
      "Personal financial tracking",
    ],
    liveUrl: "https://balancebuddy-eight.vercel.app",
    githubUrl: "https://github.com/rijulminhas/balancebuddy",
    featured: true,
  },
  {
    slug: "briteside",
    title: "Briteside.app",
    subtitle: "Event Management Platform",
    description:
      "Responsive, production-grade frontend interfaces for a live event management platform, built as the frontend developer on the project.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    capabilities: [
      "Responsive interfaces",
      "Production deployment",
      "Frontend architecture",
    ],
    liveUrl: "https://briteside.app",
  },
  {
    slug: "pixelfex",
    title: "Pixelfex",
    subtitle: "Canvas Paintings E-Commerce Platform",
    description:
      "Responsive frontend interfaces for a live canvas paintings e-commerce platform, built with Next.js as the frontend developer.",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    capabilities: [
      "E-commerce UI",
      "Responsive design",
      "Frontend development",
    ],
    liveUrl: "https://www.pixelfex.com",
  },
  {
    slug: "site-audit-tool",
    title: "Site Audit Tool",
    subtitle: "Web Auditing Application",
    description:
      "A site auditing tool built with Next.js using a modern, component-driven frontend architecture.",
    technologies: ["Next.js", "React", "TypeScript"],
    capabilities: [
      "Component-driven architecture",
      "Modern frontend tooling",
    ],
    liveUrl: "https://site-audit-tool-jet.vercel.app",
  },
  {
    slug: "admin-panels",
    title: "Admin Panels",
    subtitle: "Multiple Client Projects",
    description:
      "Dashboard and data-management interfaces built for real-world client workflows, featuring dynamic tables, forms and role-based access controls.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    capabilities: [
      "Dynamic tables",
      "Role-based access control",
      "Forms & data management",
      "Reusable component systems",
    ],
  },
];

export const featuredProject = projects.find((p) => p.featured)!;
export const otherProjects = projects.filter((p) => !p.featured);
