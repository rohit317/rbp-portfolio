"use client";

import BorderGlow from "@/components/ui/border-glow";
import type { ReactNode } from "react";

type Entry = {
  school: string;
  degree: string;
  period: string;
  icon?: string;
};

const ENTRIES: Entry[] = [
  {
    school: "Conestoga College • Canada",
    degree: "Diploma, Applied AI & ML",
    period: "2024 – 2025",
    icon: "/conestoga.jpeg",
  },
  {
    school: "Conestoga College • Canada",
    degree: "Diploma, Computer Applications Development",
    period: "2023 – 2025",
    icon: "/conestoga.jpeg",
  },
  {
    school: "Pune University • India",
    degree: "Bachelor of Engineering, Information Technology",
    period: "2016 – 2020",
    icon: "/sppu.webp",
  },
];

const ROW_HEIGHT = 64;

export function Education(): ReactNode {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-foreground text-[15px] font-semibold tracking-tight">
        Education
      </h3>
      <BorderGlow className="w-full p-0" backgroundColor="var(--background)" animated>
        <div className="bg-foreground/2 dark:bg-foreground/5 relative overflow-hidden rounded-3xl p-2 sm:p-4">
          <ul className="flex flex-col gap-2">
            {ENTRIES.map((entry) => (
              <li
                key={`${entry.school}-${entry.period}`}
                className="bg-background border-foreground/5 flex items-center gap-4 rounded-3xl border p-2"
                style={{ minHeight: ROW_HEIGHT }}
              >
                <SchoolLogo entry={entry} />
                <div className="flex min-w-0 flex-col">
                  <span className="text-foreground text-[17px] font-semibold tracking-tight sm:text-[18px]">
                    {entry.school}
                  </span>
                  <span className="text-foreground/65 mt-0.5 text-[14px] tracking-tight sm:text-[14px]">
                    {entry.degree}
                    <span className="text-foreground/30 mx-2">•</span>
                    <span className="text-foreground/55">{entry.period}</span>
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </BorderGlow>
    </div >
  );
}

function SchoolLogo({ entry }: { entry: Entry }): ReactNode {
  const initials = entry.school.charAt(0);
  return (
    <span
      className="ring-foreground/8 inline-flex h-12 w-12 shrink-0 items-center justify-center bg-white ring-1 dark:ring-white/10"
      aria-hidden="true"
      style={{
        borderRadius: 14,
      }}
    >
      {entry.icon ? (
        <img
          src={entry.icon}
          alt=""
          width={40}
          height={40}
          className="h-10 w-10 rounded object-contain"
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
