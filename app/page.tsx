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

      <section id="about" className="mx-auto w-full max-w-312 pt-8 sm:pt-12">
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
              <h2 className="font-serif text-[clamp(2rem,1.4rem_+_2vw,2.7rem)] font-medium leading-[1.08] tracking-[-0.02em] text-balance text-foreground">
                From idea to{" "}
                <span className="border-b border-foreground/30 pb-0.5">
                  production
                </span>
                .
              </h2>
              <div className="mt-[25px] grid max-w-[58ch] gap-[17px] text-[17px] leading-[1.7] tracking-[-0.005em] text-pretty text-foreground/75">
                <p>
                  I build full-stack products that are fast on the front, solid in the back, and smart throughout — with AI agents that do real work.
                </p>
                <p>
                  Good software isn&rsquo;t just built — it&rsquo;s operated. I sweat the pipelines, the tests, and the deploys so what ships on Friday is still boring by Monday.
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
