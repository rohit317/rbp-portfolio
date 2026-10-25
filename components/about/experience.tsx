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
    company: "Freelance",
    role: "Full Stack Developer",
    period: "Aug 2025 – Present",
    icon: "/fs-freelance.svg",
    brand: "#F59E0B",
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

export function Experience(): ReactNode {
  return (
    <div className="flex w-full flex-col gap-3">
      <h3 className="font-serif text-[20.5px] font-medium leading-[1.2] tracking-[-0.01em] text-foreground">
        Experience
      </h3>
        <BorderGlow className="w-full p-0" backgroundColor="var(--background)" animated animateOnInView>
          <div className="bg-foreground/2 dark:bg-foreground/5 relative overflow-hidden rounded-3xl p-3.5 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.14),0_1px_2px_rgba(0,0,0,0.05)] dark:shadow-none">
            <ul className="flex flex-col gap-2">
              {ENTRIES.map((entry) => (
                <li
                  key={`${entry.company}-${entry.period}`}
                  className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 rounded-[18px] bg-foreground/3 py-[11px] pr-3.5 pl-2"
                >
                  <CompanyLogo entry={entry} />
                  <div className="flex min-w-0 flex-col">
                    <span className="text-foreground text-[17px] font-semibold tracking-tight sm:text-[18px]">
                      {entry.company}
                    </span>
                    <span className="text-foreground/65 mt-0.5 text-[14px] tracking-tight sm:text-[14px]">
                      {entry.role}
                    </span>
                  </div>
                  <span className="text-foreground/55 text-[13px] tracking-[-0.01em] whitespace-nowrap tabular-nums">
                    {entry.period}
                  </span>
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
