import { ContactCard } from "@/components/contact/contact-card";
import { Education } from "@/components/about/education";
import { Experience } from "@/components/about/experience";
import { Hero } from "@/components/hero/hero";
import { PolaroidStrip } from "@/components/about/polaroid-strip";
import { Projects } from "@/components/projects/projects";
import { Stack } from "@/components/about/stack";
import { FadeIn } from "@/components/ui/motion-primitives";
import { createMetadata, siteConfig } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import SpotlightCard from "@/components/ui/spotlight-card";

export const metadata: Metadata = createMetadata({
  title: "Home",
  description: `Welcome to ${siteConfig.name}. ${siteConfig.description}`,
  path: "/",
});

export default function HomePage(): ReactNode {
  return (
    <main id="top" className="flex flex-1 flex-col gap-20 sm:gap-28">
      <Hero />

      <section id="about" className="mx-auto w-full max-w-312 pt-10 sm:pt-24">
        <FadeIn triggerOnce amount={0.25}>
          <PolaroidStrip />
        </FadeIn>
      </section>

      <section className="mx-auto w-full max-w-160 px-6 pt-14 pb-0 sm:px-10 sm:pt-0 sm:pb-0">
        <SpotlightCard className="w-full p-0">
          <FadeIn delay={0.5} triggerOnce amount={0.25}>
            <div className="rounded-4xl border border-foreground/5 bg-foreground/1.5 p-8 sm:p-12 dark:bg-foreground/3">
              <h1 className="font-serif text-[1.75rem] font-medium tracking-tight text-foreground sm:text-[2rem]">
                Hello! I&rsquo;m <span className="border-b border-foreground/30 pb-0.5">Rohit Totlani</span>.
              </h1>
              <div className="mt-8 space-y-6 text-[17px] leading-[1.7] tracking-tight text-foreground/75 sm:text-[18px]">
                <p>
                  I build <strong className="font-semibold text-foreground">full-stack</strong> products that combine polished <strong className="font-semibold text-foreground">frontend</strong> experiences with reliable <strong className="font-semibold text-foreground">backend architecture</strong>, <strong className="font-semibold text-foreground">cloud-native infrastructure</strong>, and <strong className="font-semibold text-foreground">AI-enhanced workflows</strong>. I focus on making real-world systems easier to use while maintaining strong <strong className="font-semibold text-foreground">performance</strong> and <strong className="font-semibold text-foreground">scalability</strong>.
                </p>
                <p>
                  My work spans <strong className="font-semibold text-foreground">serverless</strong> and <strong className="font-semibold text-foreground">containerized deployments</strong>, <strong className="font-semibold text-foreground">CI/CD pipelines</strong>, <strong className="font-semibold text-foreground">automated testing</strong>, and <strong className="font-semibold text-foreground">API-driven integrations</strong> so teams can ship faster with confidence. I enjoy solving complex problems by aligning product goals with pragmatic engineering.
                </p>
                <p>
                  Whether it&rsquo;s designing <strong className="font-semibold text-foreground">intuitive interfaces</strong>, building <strong className="font-semibold text-foreground">resilient cloud services</strong>, or integrating <strong className="font-semibold text-foreground">intelligent automation</strong>, I help teams deliver meaningful software that feels seamless and stays robust.
                </p>
              </div>
            </div>
          </FadeIn>
        </SpotlightCard>
      </section>

      <section className="mx-auto w-full max-w-[40rem] px-6 pb-0 sm:px-10 sm:pb-0">
        <FadeIn delay={0.1}>
          <div className="flex flex-col gap-10">
            <Experience />
            <Education />
            <Stack />
          </div>
        </FadeIn>
      </section>

      <div id="projects" className="relative w-full">
        <FadeIn triggerOnce amount={0.05}>
          <Projects withHeadline />
        </FadeIn>
      </div>

      <ContactCard />
      <div className="h-12 sm:h-16" />
    </main>
  );
}
