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

      <section id="about" className="-mt-6 mx-auto w-full max-w-312 pt-10 sm:-mt-10 sm:pt-24">
        <FadeIn triggerOnce amount={0.25}>
          <PolaroidStrip />
        </FadeIn>
      </section>

      <section className="mx-auto w-full max-w-275 px-3.5 pt-8 pb-0 sm:px-10 sm:pt-0 sm:pb-0">
        <SpotlightCard className="w-full p-0">
          <FadeIn delay={0.5} triggerOnce amount={0.25}>
            <div className="rounded-4xl border border-foreground/5 bg-foreground/1.5 px-12 py-10 sm:px-[52px] sm:py-[44px] dark:bg-foreground/3">
              <div className="grid gap-7 sm:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] sm:items-start sm:gap-16">
                <h1 className="font-serif text-[clamp(1.9rem,1.5rem_+_1.5vw,2.4rem)] font-medium leading-[1.1] tracking-[-0.02em] text-balance text-foreground">
                  Hello! I&rsquo;m <span className="border-b border-foreground/30 pb-0.5">Rohit Totlani</span>.
                </h1>
                <div className="grid gap-5 text-[17px] leading-[1.7] tracking-[-0.005em] text-pretty text-foreground/75">
                  <p>
                    I build full-stack products that pair polished frontend experiences with reliable backend architecture, cloud-native infrastructure, and AI-enhanced workflows.
                  </p>
                  <p>
                    I work across serverless and containerized deployments, CI/CD pipelines, automated testing, and API integrations to help teams ship faster with confidence.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </SpotlightCard>
      </section>

      <section className="-mt-9 mx-auto w-full max-w-275 px-3.5 pb-0 sm:-mt-15 sm:px-10 sm:pb-0">
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
