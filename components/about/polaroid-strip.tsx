"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, useSyncExternalStore, type ReactNode } from "react";

import { useReducedMotion } from "@/lib/motion";

type Clip = {
  id: string;
  src: string;
  poster: string;
  rotate: number;
};

const CLIPS: Clip[] = [
  { id: "a", src: "/polaroids/polaroid-1.mp4", poster: "/polaroids/polaroid-1.jpg", rotate: -8 },
  { id: "b", src: "/polaroids/polaroid-2.mp4", poster: "/polaroids/polaroid-2.jpg", rotate: 6 },
  { id: "c", src: "/polaroids/polaroid-3.mp4", poster: "/polaroids/polaroid-3.jpg", rotate: -4 },
  { id: "d", src: "/polaroids/polaroid-4.mp4", poster: "/polaroids/polaroid-4.jpg", rotate: 7 },
  { id: "e", src: "/polaroids/polaroid-5.mp4", poster: "/polaroids/polaroid-5.jpg", rotate: -6 },
  { id: "f", src: "/polaroids/polaroid-6.mp4", poster: "/polaroids/polaroid-6.jpg", rotate: 5 },
];

const EASE = [0.22, 1, 0.36, 1] as const;

function PolaroidCard({
  clip,
  index,
}: {
  clip: Clip;
  index: number;
}): ReactNode {
  const ref = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const reducedMotion = useReducedMotion();

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 220, damping: 18, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 220, damping: 18, mass: 0.6 });
  const tx = useTransform(sx, (v) => `${v}px`);
  const ty = useTransform(sy, (v) => `${v}px`);

  // Play only while the frame is on screen; pause the moment it leaves.
  useEffect(() => {
    const holder = ref.current;
    const video = videoRef.current;
    if (!holder || !video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(holder);

    return () => {
      observer.disconnect();
      video.pause();
    };
  }, []);

  const handleMove = (e: React.PointerEvent<HTMLDivElement>): void => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const max = 18;
    const k = 0.25;
    mx.set(Math.max(-max, Math.min(max, dx * k)));
    my.set(Math.max(-max, Math.min(max, dy * k)));
  };

  const handleLeave = (): void => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      initial={{ opacity: 0, y: -120, filter: "blur(18px)", rotate: clip.rotate }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)", rotate: clip.rotate }}
      transition={{
        duration: 0.9,
        delay: 0.05 + index * 0.08,
        ease: EASE,
      }}
      style={{
        x: tx,
        y: ty,
        rotate: clip.rotate,
      }}
      className="relative aspect-[3/4] w-[clamp(7rem,13vw,11rem)] shrink-0 overflow-hidden rounded-2xl border border-foreground/8 shadow-sm"
    >
      {reducedMotion ? (
        <img
          src={clip.poster}
          alt=""
          width={270}
          height={480}
          className="h-full w-full object-cover"
          draggable={false}
          loading="lazy"
        />
      ) : (
        <video
          ref={videoRef}
          src={clip.src}
          poster={clip.poster}
          muted
          loop
          playsInline
          preload="metadata"
          disablePictureInPicture
          aria-hidden="true"
          className="h-full w-full object-cover"
          draggable={false}
        />
      )}
    </motion.div>
  );
}

export function PolaroidStrip(): ReactNode {
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  if (!mounted) {
    return <div aria-hidden="true" className="h-[clamp(9.5rem,17.5vw,14.75rem)] w-full" />;
  }

  return (
    <div className="flex flex-wrap w-full items-start justify-center gap-1 px-3.5 sm:gap-1.5 sm:px-8">
      {CLIPS.map((clip, i) => (
        <PolaroidCard key={clip.id} clip={clip} index={i} />
      ))}
    </div>
  );
}
