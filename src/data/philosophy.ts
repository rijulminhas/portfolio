export const philosophy = [
  {
    number: "01",
    title: "Understand",
    description: "Understand the requirement and user flow before writing code.",
  },
  {
    number: "02",
    title: "Build",
    description: "Create reusable and maintainable components.",
  },
  {
    number: "03",
    title: "Integrate",
    description: "Connect APIs, databases and external services.",
  },
  {
    number: "04",
    title: "Optimize",
    description: "Improve performance, responsiveness and reliability.",
  },
  {
    number: "05",
    title: "Refine",
    description: "Test, debug and polish the final experience.",
  },
] as const;

export const architectureLayers = [
  { label: "Frontend", detail: "React / Next.js / Tailwind" },
  { label: "API Layer", detail: "Route Handlers / Server Actions / REST APIs" },
  { label: "Business Logic", detail: "Validation / Authentication / Authorization" },
  { label: "Database", detail: "PostgreSQL / Drizzle ORM" },
  { label: "Real-Time", detail: "WebSockets" },
  { label: "Deployment", detail: "Vercel / Render / Railway" },
] as const;
