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

export function Education(): ReactNode {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="font-serif text-[20.5px] font-medium leading-[1.2] tracking-[-0.01em] text-foreground">
        Education
      </h3>
      <BorderGlow className="w-full p-0" backgroundColor="var(--background)" animated animateOnInView>
          <div className="bg-foreground/2 dark:bg-foreground/5 relative overflow-hidden rounded-3xl p-3.5 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.14),0_1px_2px_rgba(0,0,0,0.05)] dark:shadow-none">
            <ul className="flex flex-col gap-2">
              {ENTRIES.map((entry) => (
                <li
                  key={`${entry.school}-${entry.period}`}
                  className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 rounded-[18px] bg-foreground/3 py-3 pr-3.5 pl-2"
                >
                  <SchoolLogo entry={entry} />
                  <div className="flex min-w-0 flex-col">
                    <span className="text-foreground text-[17px] font-semibold tracking-tight sm:text-[18px]">
                      {entry.school}
                    </span>
                    <span className="text-foreground/65 mt-0.5 text-[14px] tracking-tight sm:text-[14px]">
                      {entry.degree}
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
