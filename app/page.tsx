import { ContactCard } from "@/components/contact/contact-card";
import { Education } from "@/components/about/education";
import { Experience } from "@/components/about/experience";
import { Hero } from "@/components/hero/hero";
import { PolaroidStrip } from "@/components/about/polaroid-strip";
import { Projects } from "@/components/projects/projects";
import { Stack } from "@/components/about/stack";
import { FadeIn } from "@/components/ui/motion-primitives";
import BorderGlow from "@/components/ui/border-glow";
import { createMetadata, siteConfig } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

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
        <FadeIn
          delay={0.5}
          triggerOnce
          amount={0.25}
          className="mx-auto w-full max-w-[680px]"
        >
          <BorderGlow
            className="w-full p-0"
            backgroundColor="color-mix(in srgb, var(--foreground) 2.5%, var(--background))"
            borderRadius={28}
            animated
            animateOnInView
          >
            <div className="px-[34px] py-[38px]">
              <h1 className="font-serif text-[clamp(2rem,1.4rem_+_2vw,2.7rem)] font-medium leading-[1.08] tracking-[-0.02em] text-balance text-foreground">
                Hello! I&rsquo;m <span className="border-b border-foreground/30 pb-0.5">Rohit Totlani</span>.
              </h1>
              <div className="mt-[25px] grid max-w-[58ch] gap-[17px] text-[17px] leading-[1.7] tracking-[-0.005em] text-pretty text-foreground/75">
                <p>
                  I build full-stack products that pair polished frontend experiences with reliable backend architecture, cloud-native infrastructure, and AI-enhanced workflows.
                </p>
                <p>
                  I work across serverless and containerized deployments, CI/CD pipelines, automated testing, and API integrations to help teams ship faster with confidence.
                </p>
              </div>
            </div>
          </BorderGlow>
        </FadeIn>
      </section>

      <section className="-mt-9 mx-auto w-full max-w-[680px] px-3.5 pb-0 sm:-mt-15 sm:px-0 sm:pb-0">
        <div className="flex flex-col gap-10">
          <FadeIn triggerOnce amount={0.2}>
            <Experience />
          </FadeIn>
          <FadeIn triggerOnce amount={0.15} delay={0.05}>
            <Education />
          </FadeIn>
          <FadeIn triggerOnce amount={0.1}>
            <Stack />
          </FadeIn>
        </div>
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
