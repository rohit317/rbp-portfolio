import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { ContactCardCtas } from "./contact-card-ctas";
import { FadeIn } from "@/components/ui/motion-primitives";
import { ShaderFlow } from "../shaders/shader-flow";

const CARD_FADE_MASK =
  "radial-gradient(ellipse 90% 110% at 50% 50%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.92) 40%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0.4) 90%, rgba(0,0,0,0.15) 100%)";

export function ContactCard(): ReactNode {
  return (
    <section className="mx-auto my-12 w-full max-w-275 px-3.5 sm:my-20 sm:px-10">
      <FadeIn>
        <div className="relative w-full overflow-hidden rounded-4xl border border-foreground/8 bg-background p-1.5 shadow-sm">
          <div className="relative w-full overflow-hidden rounded-[1.6rem]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-45 dark:opacity-25"
              style={{
                WebkitMaskImage: CARD_FADE_MASK,
                maskImage: CARD_FADE_MASK,
              }}
            >
              <ShaderFlow scale={5} brightness={3}/>
            </div>

            <div className="relative flex flex-col items-center px-5 py-10 text-center sm:px-8 sm:py-14">
              <h2 className="font-serif text-[2.25rem] font-medium leading-[1.05] tracking-tight text-balance text-foreground sm:text-[2.75rem]">
                Let&rsquo;s connect
              </h2>
              <p className="mt-4 max-w-[46ch] text-[16px] leading-[1.55] tracking-tight text-foreground/65 sm:text-[18px]">
                I&rsquo;m always open to discussing new projects, creative
                ideas, or opportunities to be part of your visions. Just reach out!
              </p>
              <div className="mt-7 flex justify-center">
                <ContactCardCtas />
              </div>

              <div className="mt-9 flex flex-col items-center gap-4">
                <span aria-hidden="true" className="h-px w-14 bg-foreground/15" />
                <div className="flex items-center gap-3">
                  <SocialIcon
                    href="mailto:rohit.totlani.317@gmail.com"
                    label="Email"
                    lucideIcon={Mail}
                  />
                  <SocialIcon
                    href="https://www.linkedin.com"
                    label="LinkedIn"
                    imageSrc="/linkedin.svg"
                  />
                </div>
                <p className="text-[12.5px] tracking-tight text-foreground/45">
                  2026 &copy; Built with Next.js
                </p>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

function SocialIcon({
  href,
  label,
  lucideIcon: LucideIcon,
  imageSrc,
}: {
  href: string;
  label: string;
  lucideIcon?: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  imageSrc?: string;
}): ReactNode {
  const isExternal = href.startsWith("http");
  const props = isExternal
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
  return (
    <Link
      href={href}
      aria-label={label}
      className="border-foreground/8 hover:border-foreground/15 focus-ring inline-flex h-11 w-11 items-center justify-center rounded-xl border bg-background text-foreground/70 transition-colors hover:text-foreground"
      {...props}
    >
      {LucideIcon ? (
        <LucideIcon className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
      ) : imageSrc ? (
        <Image
          src={imageSrc}
          alt=""
          width={14}
          height={14}
          aria-hidden="true"
          className="max-h-[14px] max-w-[14px] object-contain dark:invert"
        />
      ) : null}
    </Link>
  );
}
