import type { ReactNode } from "react";

import { HeroCtas } from "./hero-ctas";
import { FadeIn, ScaleUnblur } from "@/components/ui/motion-primitives";
import { PortraitMorph } from "./portrait-morph";
import TextType from "../ui/text-type";

const PORTRAIT_SRC = "/josh.webp";
const PORTRAIT_HOVER_SRC = "/josh_wave.webp";

export function Hero(): ReactNode {
  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 pt-44 pb-24 sm:px-10 sm:pt-56 sm:pb-32">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-8">
          <FadeIn className="flex flex-col gap-4">
            <p className="text-[20px] leading-tight tracking-tight font-medium text-foreground">
              Hi
              <span aria-hidden="true" className="mx-0.5">
                👋
              </span>
              , I&rsquo;m Rohit
            </p>

            <h1 className="text-[2.3rem] font-medium leading-[1.05] tracking-tight text-foreground md:text-[2.4rem] lg:text-[3.35rem]">
              <TextType
                text={["Full Stack Developer", "Software Engineer", "Tech Enthusiast"]}
                typingSpeed={85}
                pauseDuration={2500}
                showCursor
                cursorCharacter="_"
                deletingSpeed={50}
                variableSpeed={{ min: 60, max: 120 }}
                cursorBlinkDuration={0.75}
              />
            </h1>

            <p className="max-w-[34ch] text-[18px] leading-[1.4] tracking-tight text-foreground/65">
              I build full stack web apps with modern frontends, scalable backends, cloud services, and AI integrations for smooth, intelligent user experiences.
            </p>

            <HeroCtas />
          </FadeIn>

          <ScaleUnblur className="flex justify-stretch md:justify-end">
            <div className="relative aspect-square w-full md:max-w-105 overflow-hidden rounded-4xl border border-foreground/8 bg-background p-1.5 shadow-sm">
              <div className="relative h-full w-full overflow-hidden rounded-[1.6rem]">
                <PortraitMorph
                  srcA={PORTRAIT_SRC}
                  srcB={PORTRAIT_HOVER_SRC}
                  alt="Josh portrait"
                />
              </div>
            </div>
          </ScaleUnblur>
        </div>
      </div>
    </section>
  );
}
