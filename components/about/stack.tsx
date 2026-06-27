"use client";

import { RotateCcw } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";

type Chip = {
  label: string;
  slug?: string;
  bg: string;
  fg: string;
  iconUrl?: string;
};

type Category = {
  key: string;
  label: string;
  chips: Chip[];
};

const CATEGORIES: Category[] = [
  {
    key: "all",
    label: "All",
    chips: [
      { label: "Figma", slug: "figma", bg: "#1f1f1f", fg: "#ffffff", iconUrl: "https://svgl.app/library/figma.svg" },
      { label: "React", slug: "react", bg: "#1FB6CB", fg: "#ffffff" },
      { label: "Next.js", slug: "nextdotjs", bg: "#1f1f1f", fg: "#ffffff" },
      { label: "TypeScript", slug: "typescript", bg: "#2F74C0", fg: "#ffffff" },
      { label: "Tailwind CSS", slug: "tailwindcss", bg: "#2BBCF5", fg: "#ffffff" },
      { label: "shadcn/ui", slug: "shadcnui", bg: "#5b54ff", fg: "#ffffff" },
      { label: "Framer Motion", slug: "framermotion", bg: "#0a84ff", fg: "#ffffff" },
      { label: "GSAP", slug: "gsap", bg: "#0AE448", fg: "#0a0a0a" },
      { label: "Java", slug: "java", bg: "#007396", fg: "#ffffff" },
      { label: "Spring Boot", slug: "springboot", bg: "#6DB33F", fg: "#ffffff" },
      { label: "Node.js", slug: "nodedotjs", bg: "#3C873A", fg: "#ffffff" },
      { label: "Express", slug: "express", bg: "#000000", fg: "#ffffff" },
      { label: "NestJS", slug: "nestjs", bg: "#E0234E", fg: "#ffffff" },
      { label: "MongoDB", slug: "mongodb", bg: "#47A248", fg: "#ffffff" },
      { label: "PostgreSQL", slug: "postgresql", bg: "#336791", fg: "#ffffff" },
      { label: "Kafka", slug: "apachekafka", bg: "#231f20", fg: "#ffffff" },
      { label: "Redis", slug: "redis", bg: "#D82C20", fg: "#ffffff" },
      { label: "Docker", slug: "docker", bg: "#2496ED", fg: "#ffffff" },
      { label: "Kubernetes", slug: "kubernetes", bg: "#326CE5", fg: "#ffffff" },
      { label: "AWS", slug: "aws", bg: "#FF9900", fg: "#111111" },
      { label: "TensorFlow", slug: "tensorflow", bg: "#FF6F00", fg: "#ffffff" },
      { label: "PyTorch", slug: "pytorch", bg: "#EE4C2C", fg: "#ffffff" },
      { label: "MLOps", bg: "#3730A3", fg: "#ffffff" },
      { label: "Accessibility", bg: "#047857", fg: "#ffffff" },
      { label: "Design Systems", bg: "#8B5CF6", fg: "#ffffff" },
      { label: "Prototyping", bg: "#FB7185", fg: "#111111" },
      { label: "Wireframing", bg: "#F59E0B", fg: "#111111" },
      { label: "CI/CD", bg: "#0F172A", fg: "#ffffff" },
      { label: "Prompt Engineering", bg: "#4338CA", fg: "#ffffff" },
    ],
  },
  {
    key: "design",
    label: "Design",
    chips: [
      { label: "Figma", slug: "figma", bg: "#1f1f1f", fg: "#ffffff", iconUrl: "https://svgl.app/library/figma.svg" },
      { label: "Adobe XD", slug: "adobexd", bg: "#FF61F6", fg: "#111111" },
      { label: "Design Systems", bg: "#8B5CF6", fg: "#ffffff" },
      { label: "Wireframing", bg: "#F59E0B", fg: "#111111" },
      { label: "Prototyping", bg: "#FB7185", fg: "#111111" },
      { label: "Accessibility", bg: "#047857", fg: "#ffffff" },
      { label: "Motion Design", bg: "#22C55E", fg: "#111111" },
    ],
  },
  {
    key: "frontend",
    label: "Frontend",
    chips: [
      { label: "React", slug: "react", bg: "#1FB6CB", fg: "#ffffff" },
      { label: "Next.js", slug: "nextdotjs", bg: "#1f1f1f", fg: "#ffffff" },
      { label: "TypeScript", slug: "typescript", bg: "#2F74C0", fg: "#ffffff" },
      { label: "Tailwind CSS", slug: "tailwindcss", bg: "#2BBCF5", fg: "#ffffff" },
      { label: "shadcn/ui", slug: "shadcnui", bg: "#5b54ff", fg: "#ffffff" },
      { label: "Framer Motion", slug: "framermotion", bg: "#0a84ff", fg: "#ffffff" },
      { label: "GSAP", slug: "gsap", bg: "#0AE448", fg: "#0a0a0a" },
      { label: "Vite", slug: "vite", bg: "#646cff", fg: "#ffffff" },
    ],
  },
  {
    key: "backend",
    label: "Backend",
    chips: [
      { label: "Java", slug: "java", bg: "#007396", fg: "#ffffff" },
      { label: "Spring Boot", slug: "springboot", bg: "#6DB33F", fg: "#ffffff" },
      { label: "Node.js", slug: "nodedotjs", bg: "#3C873A", fg: "#ffffff" },
      { label: "Express", slug: "express", bg: "#000000", fg: "#ffffff" },
      { label: "NestJS", slug: "nestjs", bg: "#E0234E", fg: "#ffffff" },
      { label: "MongoDB", slug: "mongodb", bg: "#47A248", fg: "#ffffff" },
      { label: "PostgreSQL", slug: "postgresql", bg: "#336791", fg: "#ffffff" },
      { label: "Kafka", slug: "apachekafka", bg: "#231f20", fg: "#ffffff" },
      { label: "Redis", slug: "redis", bg: "#D82C20", fg: "#ffffff" },
    ],
  },
  {
    key: "devops",
    label: "DevOps",
    chips: [
      { label: "Docker", slug: "docker", bg: "#2496ED", fg: "#ffffff" },
      { label: "Kubernetes", slug: "kubernetes", bg: "#326CE5", fg: "#ffffff" },
      { label: "AWS", slug: "aws", bg: "#FF9900", fg: "#111111" },
      { label: "CI/CD", bg: "#0F172A", fg: "#ffffff" },
      { label: "Terraform", slug: "terraform", bg: "#6D7A8D", fg: "#ffffff" },
      { label: "GitHub Actions", slug: "githubactions", bg: "#222222", fg: "#ffffff" },
    ],
  },
  {
    key: "ai",
    label: "AI",
    chips: [
      { label: "Python", slug: "python", bg: "#3776AB", fg: "#ffffff" },
      { label: "TensorFlow", slug: "tensorflow", bg: "#FF6F00", fg: "#ffffff" },
      { label: "PyTorch", slug: "pytorch", bg: "#EE4C2C", fg: "#ffffff" },
      { label: "MLOps", bg: "#3730A3", fg: "#ffffff" },
      { label: "Prompt Engineering", bg: "#4338CA", fg: "#ffffff" },
      { label: "Data Pipelines", bg: "#0F766E", fg: "#ffffff" },
    ],
  },
];

const CHIP_RADIUS = 14;
const ICON_RADIUS = 10;
const WALL_PAD = 16;

type ChipState = {
  chip: Chip;
  body: Matter.Body;
  width: number;
  height: number;
};

export function Stack(): ReactNode {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const measureRef = useRef<HTMLDivElement | null>(null);
  const chipRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [resetKey, setResetKey] = useState(0);
  const [activeCategory, setActiveCategory] = useState("all");

  const activeChips =
    CATEGORIES.find((category) => category.key === activeCategory)?.chips ??
    CATEGORIES[0]?.chips ?? [];

  useEffect(() => {
    const container = containerRef.current;
    const measure = measureRef.current;
    if (!container || !measure) return;

    let cancelled = false;
    let cleanup: (() => void) | undefined;

    void (async () => {
      const Matter = await import("matter-js");
      if (cancelled) return;

      const {
        Engine,
        Runner,
        World,
        Bodies,
        Body,
        Mouse,
        MouseConstraint,
        Events,
      } = Matter;

      const measureChildren = Array.from(measure.children) as HTMLElement[];
      const dims = measureChildren.map((el) => {
        const r = el.getBoundingClientRect();
        return { w: Math.max(80, r.width), h: Math.max(28, r.height) };
      });

      let width = container.clientWidth;
      let height = container.clientHeight;

      const engine = Engine.create();
      engine.gravity.y = 1;
      const world = engine.world;

      const wallThickness = 400;
      const floor = Bodies.rectangle(
        width / 2,
        height - WALL_PAD + wallThickness / 2,
        width * 3,
        wallThickness,
        { isStatic: true }
      );
      const leftWall = Bodies.rectangle(
        WALL_PAD - wallThickness / 2,
        height / 2,
        wallThickness,
        height * 4,
        { isStatic: true }
      );
      const rightWall = Bodies.rectangle(
        width - WALL_PAD + wallThickness / 2,
        height / 2,
        wallThickness,
        height * 4,
        { isStatic: true }
      );
      World.add(world, [floor, leftWall, rightWall]);

      const states: ChipState[] = activeChips.map((chip, i) => {
        const dim = dims[i] ?? { w: 120, h: 36 };
        const { w, h } = dim;
        const halfW = w / 2;
        const minX = WALL_PAD + halfW + 4;
        const maxX = width - WALL_PAD - halfW - 4;
        const x = minX + Math.random() * Math.max(1, maxX - minX);
        const y = -80 - i * 60 - Math.random() * 120;
        const body = Bodies.rectangle(x, y, w, h, {
          chamfer: { radius: CHIP_RADIUS },
          restitution: 0.35,
          friction: 0.5,
          frictionAir: 0.025,
          density: 0.0018,
          angle: (Math.random() - 0.5) * 0.4,
        });
        World.add(world, body);
        return { chip, body, width: w, height: h };
      });

      const mouse = Mouse.create(container);

      const wheelTarget = mouse.element as HTMLElement & {
        mousewheel?: EventListener;
      };
      if (wheelTarget.mousewheel) {
        wheelTarget.removeEventListener("wheel", wheelTarget.mousewheel);
        wheelTarget.removeEventListener(
          "DOMMouseScroll",
          wheelTarget.mousewheel
        );
      }

      const mouseConstraint = MouseConstraint.create(engine, {
        mouse,
        constraint: {
          stiffness: 0.2,
          damping: 0.2,
          render: { visible: false },
        },
      });
      World.add(world, mouseConstraint);

      Events.on(mouseConstraint, "startdrag", () => {
        container.style.cursor = "grabbing";
      });
      Events.on(mouseConstraint, "enddrag", () => {
        container.style.cursor = "grab";
      });

      const runner = Runner.create();
      Runner.run(runner, engine);

      let raf = 0;
      const tick = (): void => {
        for (let i = 0; i < states.length; i++) {
          const s = states[i];
          const el = chipRefs.current[i];
          if (!s || !el) continue;
          const { x, y } = s.body.position;
          el.style.transform = `translate3d(${x - s.width / 2}px, ${y - s.height / 2}px, 0) rotate(${s.body.angle}rad)`;
        }
        raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);

      const onResize = (): void => {
        const newW = container.clientWidth;
        const newH = container.clientHeight;
        if (newW === width && newH === height) return;
        Body.setPosition(floor, {
          x: newW / 2,
          y: newH - WALL_PAD + wallThickness / 2,
        });
        Body.setPosition(leftWall, {
          x: WALL_PAD - wallThickness / 2,
          y: newH / 2,
        });
        Body.setPosition(rightWall, {
          x: newW - WALL_PAD + wallThickness / 2,
          y: newH / 2,
        });
        width = newW;
        height = newH;
      };
      const ro = new ResizeObserver(onResize);
      ro.observe(container);

      cleanup = () => {
        cancelAnimationFrame(raf);
        ro.disconnect();
        Runner.stop(runner);
        World.clear(world, false);
        Engine.clear(engine);
      };
    })();

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, [resetKey, activeCategory, activeChips]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h3 className="text-foreground text-[15px] font-semibold tracking-tight">
              What I do
            </h3>
            <p className="text-foreground/70 text-sm tracking-tight">
              Pick a category and watch the relevant toolbox fall into place.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setResetKey((k) => k + 1)}
            aria-label="Reset stack"
            className="focus-ring border-foreground/8 bg-background text-foreground/70 hover:text-foreground inline-flex h-9 w-9 items-center justify-center rounded-xl border transition-colors"
          >
            <RotateCcw className="h-4 w-4" strokeWidth={2.25} aria-hidden="true" />
          </button>
        </div>

        <div className="inline-flex flex-wrap rounded-full border border-foreground/10 bg-background/80 p-1 shadow-sm">
          {CATEGORIES.map((category) => {
            const active = category.key === activeCategory;
            return (
              <button
                key={category.key}
                type="button"
                onClick={() => {
                  setActiveCategory(category.key);
                  setResetKey((k) => k + 1);
                }}
                className={`rounded-full px-3 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-foreground text-background shadow-sm"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="border-foreground/5 bg-foreground/2 dark:bg-foreground/5 relative h-52 overflow-hidden rounded-4xl border sm:h-80">
        <div
          ref={measureRef}
          aria-hidden="true"
          className="pointer-events-none invisible absolute top-0 left-0 flex flex-wrap gap-2"
        >
          {activeChips.map((chip) => (
            <ChipPill key={`m-${chip.label}`} chip={chip} />
          ))}
        </div>

        <div
          ref={containerRef}
          className="absolute inset-0 cursor-grab select-none"
          style={{ touchAction: "none" }}
        >
          {activeChips.map((chip, i) => (
            <div
              key={`${resetKey}-${chip.label}`}
              ref={(el) => {
                chipRefs.current[i] = el;
              }}
              data-stack-chip
              className="pointer-events-none absolute top-0 left-0 will-change-transform"
              style={{ transform: "translate3d(-9999px, -9999px, 0)" }}
            >
              <ChipPill chip={chip} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ChipPill({ chip }: { chip: Chip }): ReactNode {
  return (
    <div
      className="dark:ring-1 dark:ring-white/15 inline-flex items-center gap-2 p-1 pr-2 text-[15px] font-medium tracking-tight sm:text-[16px]"
      style={{
        backgroundColor: chip.bg,
        color: chip.fg,
        borderRadius: `${CHIP_RADIUS}px`,
      }}
    >
      <span
        className="inline-flex h-8 w-8 items-center justify-center bg-white/95"
        style={{ borderRadius: `${ICON_RADIUS}px` }}
        aria-hidden="true"
      >
        {chip.slug || chip.iconUrl ? (
          <img
            src={chip.iconUrl ?? `https://cdn.simpleicons.org/${chip.slug}`}
            alt=""
            width={18}
            height={18}
            className="h-5 w-5"
            draggable={false}
          />
        ) : (
          <span className="text-[12px] font-semibold uppercase" style={{ color: chip.fg }}>
            {chip.label.charAt(0)}
          </span>
        )}
      </span>
      <span>{chip.label}</span>
    </div>
  );
}
