"use client";

import type { ReactNode } from "react";
import BorderGlow from "../ui/border-glow";

type Entry = {
  company: string;
  role: string;
  period: string;
  icon?: string;
  brand?: string;
};

const ENTRIES: Entry[] = [
  {
    company: "Horizon Labs",
    role: "Full Stack Developer (Part Time)",
    period: "Jan 2026 – Present",
    icon: "/horizon.jpeg",
    brand: "#0AE448",
  },
  {
    company: "Concentrix",
    role: "Technical Advisor",
    period: "Aug 2025 – Present",
    icon: "/concentrix.jpeg",
    brand: "#5E6AD2",
  },
  {
    company: "Accenture",
    role: "Software Engineering Analyst",
    period: "Jan 2021 – Aug 2023",
    icon: "/accenture.jpeg",
    brand: "#0a0a0a",
  },
  {
    company: "Cognizant",
    role: "Programmer Analyst Trainee",
    period: "Jun 2020 – Dec 2020",
    icon: "/cognizant.jpeg",
    brand: "#635BFF",
  }
];

const ROW_HEIGHT = 64;

export function Experience(): ReactNode {
  return (
    <div className="flex w-full flex-col gap-3">
      <h3 className="text-foreground text-[15px] font-semibold tracking-tight">
        Experience
      </h3>
      <BorderGlow className="w-full p-0" backgroundColor="var(--background)" animated>
          <div className="bg-foreground/2 dark:bg-foreground/5 relative overflow-hidden rounded-3xl p-2 sm:p-4">
              <ul className="flex flex-col gap-2">
                {ENTRIES.map((entry) => (
                  <li
                    key={`${entry.company}-${entry.period}`}
                    className="bg-background border-foreground/5 flex items-center gap-4 rounded-3xl border p-2"
                    style={{ minHeight: ROW_HEIGHT }}
                  >
                    <CompanyLogo entry={entry} />
                    <div className="flex min-w-0 flex-col">
                      <span className="text-foreground text-[17px] font-semibold tracking-tight sm:text-[18px]">
                        {entry.company}
                      </span>
                      <span className="text-foreground/65 mt-0.5 text-[14px] tracking-tight sm:text-[15px]">
                        {entry.role}
                        <span className="text-foreground/30 mx-2">•</span>
                        <span className="text-foreground/55">{entry.period}</span>
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
          </div>
        </BorderGlow>
    </div>
  );
}

function CompanyLogo({ entry }: { entry: Entry }): ReactNode {
  const initials = entry.company.charAt(0);

  return (
    <span
      className="ring-foreground/8 inline-flex h-12 w-12 shrink-0 items-center justify-center bg-white ring-1 dark:ring-white/10"
      aria-hidden="true"
      style={{
        borderRadius: 14,
        ...(entry.icon ? {} : { backgroundColor: entry.brand }),
      }}
    >
      {entry.icon ? (
        <img
          src={entry.icon}
          alt=""
          width={32}
          height={32}
          className="h-8 w-8 rounded object-contain"
          draggable={false}
        />
      ) : (
        <span className="text-[18px] font-semibold tracking-tight text-white">
          {initials}
        </span>
      )}
    </span>
  );
}
