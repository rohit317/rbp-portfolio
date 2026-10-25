import type { ReactNode } from "react";
import { ChevronDown } from "lucide-react";

import { HeroCtas } from "./hero-ctas";
import { FadeIn, ScaleUnblur } from "@/components/ui/motion-primitives";
import { PortraitMorph } from "./portrait-morph";
import TextType from "../ui/text-type";

const PORTRAIT_SRC = "/rohit-linkedin.jpg";
const PORTRAIT_HOVER_SRC = "/rohit-linkedin.jpg";

export function Hero(): ReactNode {
  return (
    <section className="relative flex min-h-svh w-full items-center">
      <div className="mx-auto w-full max-w-275 px-6 pt-24 pb-24 sm:px-10 sm:pt-28 sm:pb-28">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-8">
            <FadeIn className="flex flex-col gap-4">
              <p className="font-serif text-[22px] font-medium leading-tight tracking-[-0.01em] text-foreground sm:text-[24px]">
                Hi
                <span aria-hidden="true" className="mx-1">
                  👋
                </span>
                , I&rsquo;m Rohit
              </p>

              <h1 className="font-serif text-[clamp(1.9rem,10vw_-_5px,3.25rem)] font-medium leading-[1.02] tracking-[-0.02em] text-foreground md:text-[clamp(2rem,5vw_-_6px,3.25rem)]">
                <span className="inline-block whitespace-nowrap [&>*]:whitespace-nowrap!">
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
                </span>
              </h1>

              <p className="max-w-[40ch] text-[17px] leading-[1.6] text-pretty text-foreground/70">
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
                    alt="Rohit Totlani portrait"
                  />
                </div>
              </div>
            </ScaleUnblur>
          </div>
        </div>

      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-5 left-1/2 z-10 -translate-x-1/2"
      >
        <a
          href="#about"
          aria-label="Scroll to the next section"
          className="focus-ring scroll-cue inline-flex rounded-full p-2 text-foreground/50 transition-colors hover:text-foreground"
        >
          <ChevronDown className="h-5 w-5" aria-hidden="true" />
        </a>
      </span>

    </section>
  );
}
