import { Download } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { ResumeViewer } from "@/components/resume/resume-viewer";
import { getResumeHtml } from "@/lib/resume";
import { site } from "@/data/site";

export async function ResumeCTA() {
  const resumeHtml = await getResumeHtml();

  return (
    <section className="relative py-28 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <div className="rounded-3xl border border-border bg-card px-8 py-14 text-center sm:px-14">
          <SectionHeading
            eyebrow="Resume"
            title="Experience, condensed."
            align="center"
          />
          <Reveal delay={0.15} className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <ResumeViewer html={resumeHtml} triggerVariant="primary" />
            <Button href={site.resumeUrl} external variant="outline">
              <Download size={16} />
              Download Resume
            </Button>
            <Button href={site.linkedin} external variant="outline">
              <LinkedInIcon className="h-4 w-4" />
              View LinkedIn
            </Button>
            <Button href={site.github} external variant="outline">
              <GitHubIcon className="h-4 w-4" />
              View GitHub
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
