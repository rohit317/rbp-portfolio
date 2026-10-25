"use client";

import Particles from "@/components/ui/particles";
import { useReducedMotion } from "@/lib/motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";

const DARK_COLORS = ["#f8fafc", "#e5e7eb", "#cbd5e1"];
const LIGHT_COLORS = ["#a8a29e", "#78716c", "#57534e"];

export function BackgroundParticles(): ReactNode {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div aria-hidden="true" className="hidden md:block">
      <Particles
        particleCount={320}
        particleSpread={14}
        speed={reducedMotion ? 0 : 0.08}
        particleColors={resolvedTheme === "light" ? LIGHT_COLORS : DARK_COLORS}
        moveParticlesOnHover={!reducedMotion}
        alphaParticles={true}
        particleBaseSize={90}
        sizeRandomness={0.9}
        cameraDistance={12}
        className="opacity-80"
      />
    </div>
  );
}
