export type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  location?: string;
  points: string[];
  current?: boolean;
};

export const experience: ExperienceEntry[] = [
  {
    company: "Fabcode IT Solutions LLP",
    role: "Full-Stack Developer",
    period: "Aug 2025 — Present",
    location: "Mohali, Punjab",
    current: true,
    points: [
      "Build and maintain scalable Next.js web applications with third-party API integrations for multiple client projects.",
      "Develop responsive, modern frontend interfaces and admin panels, improving usability and workflow efficiency for end clients.",
      "Collaborate on backend logic, database integration, and performance improvements across the full application stack.",
      "Contribute directly to live, production-deployed projects actively used by real clients.",
    ],
  },
  {
    company: "QServices Inc.",
    role: "Intern, .NET Development",
    period: "Dec 2023 — Jun 2024",
    points: [
      "Worked on web applications and backend logic, debugging issues and improving application performance.",
    ],
  },
  {
    company: "Solitaire Infosys",
    role: "Intern, Full-Stack Development (Java)",
    period: "Jan 2023 — Jun 2023",
    points: [
      "Worked on full-stack fundamentals and built small web modules as part of a collaborative team environment.",
    ],
  },
];
