export const site = {
  name: "Rijul Minhas",
  role: "Full-Stack Developer",
  location: "Una, Himachal Pradesh, India",
  email: "rajputrijul220@gmail.com",
  linkedin: "https://linkedin.com/in/rijul-minhas-3ab281236",
  github: "https://github.com/rijulminhas",
  resumeUrl: "/Rijul-Minhas-Resume.docx",
  photo: "/rijul-minhas.jpg",
  tagline:
    "I build scalable, responsive and production-ready web applications with Next.js, React, TypeScript and modern backend technologies.",
  // TODO: replace with the real production domain once deployed
  siteUrl: "https://rijulminhas.dev",
} as const;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;

export const stats = [
  { value: "01+", label: "Years Experience" },
  { value: "05+", label: "Projects Shipped" },
  { value: "Full-Stack", label: "Development" },
  { value: "Production", label: "Applications" },
] as const;
