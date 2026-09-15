export type SkillGroup = {
  title: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML / CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Next.js API Routes", "PostgreSQL", "Drizzle ORM", "Prisma ORM"],
  },
  {
    title: "Real-Time / Auth",
    skills: ["WebSockets", "NextAuth.js"],
  },
  {
    title: "Tools & Workflow",
    skills: ["Git", "GitHub", "API Integration", "Responsive Design", "Admin Panel Development"],
  },
];
