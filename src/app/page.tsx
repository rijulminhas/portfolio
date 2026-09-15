import { Navbar } from "@/components/navigation/navbar";
import { Background3D } from "@/components/background/background-3d";
import { Hero } from "@/components/hero/hero";
import { AboutSection } from "@/components/about/about-section";
import { SkillsGrid } from "@/components/skills/skills-grid";
import { ExperienceTimeline } from "@/components/experience/experience-timeline";
import { ProjectsSection } from "@/components/projects/projects-section";
import { BalanceBuddyCaseStudy } from "@/components/projects/balancebuddy-case-study";
import { DevelopmentProcess } from "@/components/philosophy/development-process";
import { ArchitectureDiagram } from "@/components/architecture/architecture-diagram";
import { ResumeCTA } from "@/components/resume/resume-cta";
import { ContactSection } from "@/components/contact/contact-section";
import { Footer } from "@/components/footer/footer";

export default function Home() {
  return (
    <>
      <Background3D />
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <SkillsGrid />
        <ExperienceTimeline />
        <ProjectsSection />
        <BalanceBuddyCaseStudy />
        <DevelopmentProcess />
        <ArchitectureDiagram />
        <ResumeCTA />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
