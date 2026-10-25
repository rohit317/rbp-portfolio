"use client";

import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Code2,
  Compass,
  KanbanSquare,
  PlaneTakeoff,
  Sparkles,
  Wand2,
  X,
} from "lucide-react";
import { createPortal } from "react-dom";
import { useEffect, useState, type ComponentType, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";

import { FadeIn } from "@/components/ui/motion-primitives";
import { useReducedMotion } from "@/lib/motion";
import TiltedCard from "../ui/tilted-card";

type Project = {
  id: string;
  icon: ComponentType<{ className?: string }>;
  iconLabel: string;
  title: string;
  tagline: string;
  description: string;
  meta: string;
  stack: string[];
  liveHref?: string;
  githubHref: string;
  highlights: string[];
  imageRatio: number;
  image: string;
  imageAlt: string;
  modalImages?: Array<{
    src: string;
    alt: string;
  }>;
};

const PROJECTS: Project[] = [
  {
    id: "kanbi",
    icon: KanbanSquare,
    iconLabel: "Kanbi",
    title: "Kanbi",
    tagline: "A fast, keyboard-first kanban for personal projects and small teams.",
    description:
      "A simple kanban project tracker for personal projects and small teams, with realtime updates, comments, and optional AI task drafting.",
    meta: "Next.js 15 · tRPC · Drizzle · Better Auth",
    stack: ["Next.js 15", "tRPC v11", "Drizzle ORM", "Better Auth", "Tailwind v4", "dnd-kit", "Tiptap"],
    liveHref: "https://kanbi-web.vercel.app/",
    githubHref: "https://github.com/rohit317/Kanbi",
    highlights: [
      "Boards with drag-and-drop columns and tasks",
      "Realtime updates, comments, and online presence",
      "Optional AI task drafting and project invites",
    ],
    imageRatio: 1200 / 800,
    image: "/projects/kanbi-cover.svg",
    imageAlt: "Kanbi illustrated cover art",
    modalImages: [
      {
        src: "/projects/kanbi-home.png",
        alt: "Kanbi landing page",
      },
      {
        src: "/projects/kanbi-dashboard.png",
        alt: "Kanbi dashboard with assigned tasks and projects",
      },
      {
        src: "/projects/kanbi-board.png",
        alt: "Kanbi board with drag-and-drop columns, priorities, and filters",
      },
      {
        src: "/projects/kanbi-task.png",
        alt: "Kanbi task detail with status, checklist, comments, and activity",
      },
    ],
  },
  {
    id: "applypilot",
    icon: PlaneTakeoff,
    iconLabel: "ApplyPilot",
    title: "ApplyPilot",
    tagline: "An agentic job-application copilot that scores jobs and drafts tailored materials.",
    description:
      "Upload a resume, discover matching roles on public boards, and get retrieval-grounded tailored resumes — with a human approval gate before anything is produced.",
    meta: "LangGraph · FastAPI · LlamaIndex · pgvector",
    stack: ["LangGraph", "LangChain", "LlamaIndex", "PostgreSQL + pgvector", "FastAPI", "Langfuse", "Next.js 16"],
    liveHref: "https://apply-pilot-rho-ten.vercel.app/",
    githubHref: "https://github.com/rohit317/Apply-Pilot",
    highlights: [
      "Resume-driven job discovery across free public boards (Remotive, Jobicy, Greenhouse)",
      "Weighted fitness rubric with hard-requirement gating and per-factor evidence",
      "Human approval gate before any tailored PDF/DOCX resume is produced",
    ],
    imageRatio: 1200 / 800,
    image: "/projects/applypilot-cover.svg",
    imageAlt: "ApplyPilot illustrated cover art",
    modalImages: [
      {
        src: "/projects/applypilot-home.png",
        alt: "ApplyPilot landing page with the fitness scoring card",
      },
      {
        src: "/projects/applypilot-discover.png",
        alt: "ApplyPilot resume-driven job discovery",
      },
      {
        src: "/projects/applypilot-new.png",
        alt: "ApplyPilot paste-a-job pipeline with the demo persona",
      },
    ],
  },
  {
    id: "codeforge",
    icon: Code2,
    iconLabel: "CodeForge",
    title: "CodeForge",
    tagline: "A real-time coding platform with a judge, collaborative rooms, and a system-design game.",
    description:
      "Solve LeetCode-style problems with multi-language judging, pair-program in real-time collaborative rooms, and learn systems by building them on a simulated architecture canvas.",
    meta: "Next.js 16 · tRPC v11 · Drizzle · Y.js",
    stack: ["Next.js 16", "React 19", "tRPC v11", "Drizzle ORM", "Better Auth", "Y.js + Hocuspocus", "React Flow", "CodeMirror 6"],
    liveHref: "https://code-forge-web-nine.vercel.app/",
    githubHref: "https://github.com/rohit317/CodeForge",
    highlights: [
      "LeetCode-style judge with multi-language submissions (Python, JS, Java, C++)",
      "Real-time collaborative coding rooms on Y.js CRDTs with roles, chat, and snapshots",
      "System-design puzzle game with traffic simulation and calibrated three-star scoring",
    ],
    imageRatio: 1200 / 800,
    image: "/projects/codeforge-cover.svg",
    imageAlt: "CodeForge illustrated cover art",
    modalImages: [
      {
        src: "/projects/codeforge-home.png",
        alt: "CodeForge landing page",
      },
      {
        src: "/projects/codeforge-problems.png",
        alt: "CodeForge practice problems list",
      },
      {
        src: "/projects/codeforge-machine-coding.png",
        alt: "CodeForge machine coding challenges",
      },
    ],
  },
  {
    id: "askey",
    icon: Sparkles,
    iconLabel: "asꄗ",
    title: "asꄗ (askey)",
    tagline: "Graphics to ASCII art converter with offline support and advanced export controls.",
    description:
      "A SvelteKit ASCII art converter for static and animated images, with offline use, tone controls, and one-click exports.",
    meta: "SvelteKit 2 · Vite 7 · PWA",
    stack: ["SvelteKit 2", "Vite 7", "TypeScript", "Custom service worker", "WASM gifski pipeline"],
    liveHref: "https://askey.vercel.app/",
    githubHref: "https://github.com/rohit317/askey",
    highlights: [
      "Offline-ready PWA with animated input support",
      "Exports to TXT, SVG, PNG, WebP, GIF, APNG, and JSON",
      "Tone controls, custom tinting, and live theme switching",
    ],
    imageRatio: 1200 / 800,
    image: "/projects/askey-cover.svg",
    imageAlt: "askey illustrated cover art",
    modalImages: [
      {
        src: "/projects/askey-animation.png",
        alt: "askey converting an animated sequence into ASCII art",
      },
      {
        src: "/projects/askey-home.png",
        alt: "askey upload screen with export formats",
      },
    ],
  },
  {
    id: "pasteez",
    icon: Compass,
    iconLabel: "Pasteez",
    title: "Pasteez | Paste Bin",
    tagline: "A secure paste bin for sharing encrypted code snippets.",
    description:
      "A paste bin for creating, encrypting, and sharing code snippets, with syntax highlighting and password-protected pastes.",
    meta: "React · Express · Redux · AES-256",
    stack: ["React", "Express", "Redux", "react-simple-code-editor", "highlight.js", "AES-256/Base64 encryption"],
    liveHref: "https://pasteez.netlify.app/",
    githubHref: "https://github.com/rohit317/pasteez",
    highlights: [
      "Encrypted snippets with syntax highlighting",
      "Password-protected create and prompt flows",
      "Profile and post management backed by client/server routes",
    ],
    imageRatio: 1200 / 800,
    image: "/projects/pasteez-cover.svg",
    imageAlt: "Pasteez illustrated cover art",
    modalImages: [
      {
        src: "/projects/pasteez-editor.png",
        alt: "Pasteez paste editor with syntax highlighting",
      },
      {
        src: "/projects/pasteez-home.png",
        alt: "Pasteez landing page",
      },
    ],
  },
  {
    id: "clean-n-cut",
    icon: Wand2,
    iconLabel: "Clean & Cut",
    title: "Clean & Cut",
    tagline: "A fast AI background remover with a polished single-page flow.",
    description:
      "A React + Vite app for fast AI background removal, with drag-and-drop uploads, instant previews, and one-click downloads.",
    meta: "React 18 · Vite 5 · Framer Motion",
    stack: ["React 18", "Vite 5", "TypeScript", "Tailwind CSS", "Framer Motion", "TanStack Query", "Radix UI"],
    liveHref: "https://clean-n-cut.vercel.app/",
    githubHref: "https://github.com/rohit317/clean-n-cut",
    highlights: [
      "Drag-and-drop uploads with client-side preview",
      "Instant background removal and one-click download",
      "Motion-rich single-page UX with custom design tokens",
    ],
    imageRatio: 1200 / 800,
    image: "/projects/cleancut-cover.svg",
    imageAlt: "Clean & Cut illustrated cover art",
    modalImages: [
      {
        src: "/projects/cleanncut-hero.png",
        alt: "Clean & Cut landing page",
      },
      {
        src: "/projects/cleanncut-remover.png",
        alt: "Clean & Cut background remover upload flow",
      },
    ],
  },
];

export type ProjectsProps = {
  withHeadline?: boolean;
  viewMoreVisible?: boolean;
};

export function Projects({
  withHeadline = false,
  viewMoreVisible = false,
}: ProjectsProps): ReactNode {
  const items = viewMoreVisible ? PROJECTS.slice(0, 4) : PROJECTS;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!selectedProject) return;

    const previousOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  useEffect(() => {
    window.dispatchEvent(
      new Event(selectedProject ? "portfolio:modal-open" : "portfolio:modal-close"),
    );
  }, [selectedProject]);

  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 sm:px-10">
        {withHeadline ? (
          <FadeIn className="flex flex-col items-center gap-5 pt-12 pb-10 text-center sm:pt-20 sm:pb-14">
            <h2 className="font-serif text-[2.5rem] font-medium leading-[1.05] tracking-tight text-balance text-foreground md:text-[3rem] lg:text-[3.5rem]">
              My projects
            </h2>
            <p className="max-w-[33ch] text-[18px] leading-[1.45] tracking-tight text-foreground/65 sm:text-[20px]">
              From playful experiments to thoughtful systems, a look at the
              work I&rsquo;m proud to have shipped.
            </p>
          </FadeIn>
        ) : null}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-start md:gap-7">
          <div className="flex flex-col gap-6 md:gap-7">
            {items
              .filter((_, index) => index % 2 === 0)
              .map((project) => (
                <ProjectCard
                  key={project.id}
                  index={items.indexOf(project)}
                  onOpen={setSelectedProject}
                  project={project}
                />
              ))}
          </div>
          <div className="flex flex-col gap-6 md:gap-7">
            {items
              .filter((_, index) => index % 2 === 1)
              .map((project) => (
                <ProjectCard
                  key={project.id}
                  index={items.indexOf(project)}
                  onOpen={setSelectedProject}
                  project={project}
                />
              ))}
          </div>
        </div>

        {viewMoreVisible ? (
          <div className="mt-12 flex justify-center sm:mt-16">
            <Link
              href="#projects"
              className="border border-foreground/8 focus-ring group inline-flex cursor-pointer items-center gap-2 rounded-xl bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
            >
              View all projects
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        ) : null}
      </div>

      {isMounted
        ? createPortal(
          <AnimatePresence>
            {selectedProject ? (
              <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
              />
            ) : null}
          </AnimatePresence>,
          document.body,
        )
        : null}
    </section>
  );
}

function ProjectStack({ stack }: { stack: string[] }): ReactNode {
  return (
    <div className="space-y-3.5 rounded-[1.5rem] border border-foreground/8 bg-foreground/[0.03] p-4 sm:p-5">
      <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-foreground/45">
        Built with
      </p>
      <div className="flex flex-wrap gap-2.5">
        {stack.map((item) => (
          <span
            key={item}
            className="inline-flex items-center rounded-full border border-foreground/10 bg-background/80 px-3 py-1.5 text-[13px] font-medium tracking-tight text-foreground/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.16)]"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
}): ReactNode {
  return (
    <FadeIn
      delay={Math.min(index * 0.06, 0.3)}
      className="mb-6 break-inside-avoid md:mb-7"
    >
      <TiltedCard
        captionText={project.iconLabel}
        rotateAmplitude={8}
        scaleOnHover={1.05}
        showMobileWarning={false}
        showTooltip={false}
        displayOverlayContent
        overlayContent={
<article
                className="flex cursor-pointer flex-col gap-4 rounded-3xl bg-foreground/3 p-2.5 transition-transform duration-300 hover:-translate-y-1 sm:p-3.5"
                onClick={() => onOpen(project)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    onOpen(project);
                  }
                }}
                role="button"
                tabIndex={0}
              >
                <div
                  className="project-card__image ring-foreground/5 relative w-full overflow-hidden rounded-[20px] bg-foreground/5 ring-1"
                  style={{ aspectRatio: project.imageRatio }}
                >
                  <div className="project-card__image-inner">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 540px, (min-width: 768px) 45vw, 100vw"
                      className="object-cover"
                      priority={index < 2}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2.5 px-1 pb-1">
                  <h3 className="font-serif text-[22px] font-medium leading-[1.2] tracking-[-0.015em] text-foreground sm:text-[24px]">
                    {project.title}
                  </h3>
                  <p className="text-[13px] font-medium tracking-tight text-foreground/85">
                    {project.tagline}
                  </p>
                  <p className="text-[14px] leading-normal tracking-tight text-foreground/65 sm:text-[15px]">
                    {project.description}
                  </p>
                </div>

                <div className="flex items-center justify-between px-1 pb-1">
                  <p className="px-1 pb-2 text-[12px] tracking-tight text-foreground/50 tabular-nums">
                    {project.meta}
                  </p>

                  <ArrowRight className="h-3.5 w-3.5 text-foreground/50" aria-hidden="true" />
                </div>
              </article>

        }
      />
    </FadeIn>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}): ReactNode {
  const images = project.modalImages?.length
    ? project.modalImages
    : [{ src: project.image, alt: project.imageAlt }];
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [project.id]);

  const hasMultipleImages = images.length > 1;
  const goToPreviousImage = () => {
    setActiveImageIndex((currentIndex) =>
      currentIndex === 0 ? images.length - 1 : currentIndex - 1,
    );
  };
  const goToNextImage = () => {
    setActiveImageIndex((currentIndex) =>
      currentIndex === images.length - 1 ? 0 : currentIndex + 1,
    );
  };

  const reducedMotion = useReducedMotion();
  const arrive = reducedMotion
    ? { opacity: 0 }
    : { opacity: 0, y: 28, scale: 0.97, filter: "blur(8px)" };
  const settled = reducedMotion
    ? { opacity: 1 }
    : { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" };
  const depart = reducedMotion
    ? { opacity: 0, transition: { duration: 0.01 } }
    : {
      opacity: 0,
      y: 14,
      scale: 0.985,
      filter: "blur(6px)",
      transition: { duration: 0.2, ease: "easeIn" as const },
    };

  return (
    <div
      aria-modal="true"
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto overscroll-contain px-1.5 py-3 sm:items-center sm:px-6 sm:py-6"
      role="dialog"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
      style={{ WebkitOverflowScrolling: "touch" }}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 bg-background/92 backdrop-blur-[24px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: reducedMotion ? 0.01 : 0.3 }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_38%),radial-gradient(circle_at_bottom_right,_rgba(99,102,241,0.12),_transparent_35%)] opacity-100" />

      <motion.div
        className="relative z-10 w-full max-w-5xl"
        initial={arrive}
        animate={settled}
        exit={depart}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative flex max-h-[calc(100dvh-1.5rem)] flex-col overflow-y-auto overscroll-contain rounded-[1.5rem] border border-foreground/10 bg-background shadow-[0_30px_100px_rgba(0,0,0,0.28)] sm:max-h-[calc(100dvh-2rem)] sm:rounded-[2rem]" style={{ WebkitOverflowScrolling: "touch" }}>
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.08),_transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_30%)]" />
          <div className="sticky top-0 z-20 flex items-start justify-between gap-4 border-b border-foreground/8 bg-background/96 px-3.5 py-4 backdrop-blur-xl sm:px-7 sm:py-5">
            <div className="min-w-0">
              <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-foreground/45">
                Project details
              </p>
              <h3 className="mt-2 font-serif text-[2rem] font-medium leading-none tracking-tight text-balance text-foreground sm:text-[2.5rem]">
                {project.title}
              </h3>
            </div>
            <button
              aria-label="Close project modal"
              className="focus-ring inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-foreground/10 bg-background text-foreground transition-colors hover:bg-foreground/5"
              onClick={onClose}
              type="button"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          <div className="project-modal relative px-3.5 py-5 sm:px-7 sm:py-7 lg:grid lg:grid-cols-[1.45fr_0.9fr] lg:gap-8">
                <div className="flex flex-col gap-5 sm:gap-6">
                  <div className="relative overflow-hidden rounded-[1.75rem] border border-foreground/10 bg-foreground/5 ring-1 ring-foreground/5">
                    <div className="relative w-full" style={{ aspectRatio: 1200 / 810 }}>
                      <Image
                        alt={images[activeImageIndex]?.alt ?? project.imageAlt}
                        src={images[activeImageIndex]?.src ?? project.image}
                        fill
                        priority
                        sizes="(min-width: 1024px) 58vw, 100vw"
                        className="object-cover"
                      />

                      {hasMultipleImages ? (
                        <>
                          <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/25 bg-black/35 px-2 py-1 backdrop-blur">
                            <button
                              aria-label="Show previous project image"
                              className="focus-ring inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition-colors hover:bg-white/20"
                              onClick={goToPreviousImage}
                              type="button"
                            >
                              <ChevronLeft className="h-3.5 w-3.5" aria-hidden="true" />
                            </button>

                            {images.map((image, index) => (
                              <button
                                key={image.alt}
                                aria-label={`Show project image ${index + 1}`}
                                aria-pressed={index === activeImageIndex}
                                className={`h-2.5 w-2.5 rounded-full transition ${
                                  index === activeImageIndex
                                    ? "bg-white"
                                    : "bg-white/45 hover:bg-white/70"
                                }`}
                                onClick={() => setActiveImageIndex(index)}
                                type="button"
                              />
                            ))}

                            <button
                              aria-label="Show next project image"
                              className="focus-ring inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition-colors hover:bg-white/20"
                              onClick={goToNextImage}
                              type="button"
                            >
                              <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                            </button>
                          </div>
                        </>
                      ) : null}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2.5 sm:gap-3">
                    {project.liveHref ? (
                      <Link
                        className="focus-ring inline-flex min-w-40 items-center justify-center rounded-2xl bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
                        href={project.liveHref}
                        rel="noreferrer"
                        target="_blank"
                      >
                        View Live Demo
                        <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                      </Link>
                    ) : (
                      <span className="inline-flex min-w-40 items-center justify-center rounded-2xl border border-foreground/10 px-4 py-2.5 text-sm font-medium text-foreground/55">
                        No live demo listed in the repo
                      </span>
                    )}

                    <Link
                      className="focus-ring inline-flex min-w-40 items-center justify-center rounded-2xl border border-foreground/10 bg-background px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
                      href={project.githubHref}
                      rel="noreferrer"
                      target="_blank"
                    >
                      View GitHub
                      <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>

                  <div className="hidden lg:block">
                    <ProjectStack stack={project.stack} />
                  </div>
                </div>

                <div className="mt-5 flex flex-col gap-5 sm:mt-6 sm:gap-6 lg:mt-0">
                  <div className="space-y-3.5 rounded-[1.5rem] border border-foreground/8 bg-foreground/[0.03] p-4 sm:p-5">
                    <h4 className="text-xl font-medium tracking-tight text-foreground">
                      {project.tagline}
                    </h4>
                    <p className="text-[15px] leading-7 tracking-tight text-foreground/65">
                      {project.description}
                    </p>
                  </div>

                  <div className="lg:hidden">
                    <ProjectStack stack={project.stack} />
                  </div>

                  <div className="space-y-3.5 rounded-[1.5rem] border border-foreground/8 bg-foreground/[0.03] p-4 sm:p-5">
                    <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-foreground/45">
                      Highlights
                    </p>
                    <ul className="space-y-2.5 text-[14px] leading-6 tracking-tight text-foreground/68">
                      {project.highlights.map((item) => (
                        <li className="flex gap-2" key={item}>
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

        </div>
      </motion.div>
    </div>
  );
}
