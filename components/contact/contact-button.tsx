"use client";

import { AnimatePresence, motion } from "motion/react";
import { Check, Copy, Mail } from "lucide-react";
import { useRef, useState } from "react";
import type { ReactNode } from "react";

const EMAIL = "rohit.totlani.317@gmail.com";
const EASE = [0.22, 1, 0.36, 1] as const;
const COPIED_MS = 1600;

export function ContactButton(): ReactNode {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  // The button must never collapse as a *result of clicking*. Hover and
  // focus can close it, but only once the copied window has elapsed.
  const engagedRef = useRef(false);
  const copiedUntilRef = useRef(0);

  const collapseIfIdle = (): void => {
    if (!engagedRef.current && Date.now() >= copiedUntilRef.current) {
      setOpen(false);
    }
  };

  const markCopied = (): void => {
    copiedUntilRef.current = Date.now() + COPIED_MS;
    setCopied(true);
    window.setTimeout(() => {
      setCopied(false);
      collapseIfIdle();
    }, COPIED_MS);
  };

  const handleCopy = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      markCopied();
    } catch {
      const ta = document.createElement("textarea");
      ta.value = EMAIL;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
        markCopied();
      } catch {}
      document.body.removeChild(ta);
    }
  };

  return (
    <motion.button
      type="button"
      layout
      onClick={handleCopy}
      onHoverStart={() => {
        engagedRef.current = true;
        setOpen(true);
      }}
      onHoverEnd={() => {
        engagedRef.current = false;
        collapseIfIdle();
      }}
      onFocus={() => {
        engagedRef.current = true;
        setOpen(true);
      }}
      onBlur={() => {
        engagedRef.current = false;
        collapseIfIdle();
      }}
      aria-label={
        copied ? "Email copied" : open ? `Copy ${EMAIL}` : "Show email"
      }
      transition={{ layout: { duration: 0.55, ease: EASE } }}
      style={{ borderRadius: 12 }}
      className="focus-ring relative inline-flex h-11 cursor-pointer items-center justify-center bg-foreground px-5 text-sm font-medium text-background"
    >
      <motion.span
        layout="position"
        className="relative inline-flex items-center"
      >
        <AnimatePresence initial={false} mode="popLayout">
          {open ? (
            <motion.span
              key="email"
              layout="position"
              initial={{ opacity: 0, filter: "blur(8px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(8px)" }}
              transition={{ duration: 0.35, ease: EASE }}
              className="inline-flex items-center gap-2 whitespace-nowrap"
            >
              <span className="relative inline-flex h-4 w-4 shrink-0 items-center justify-center">
                <AnimatePresence initial={false} mode="wait">
                  {copied ? (
                    <motion.span
                      key="check"
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.5, opacity: 0 }}
                      transition={{ duration: 0.2, ease: EASE }}
                      className="inline-flex"
                    >
                      <Check className="h-4 w-4" aria-hidden="true" />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="copy"
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.5, opacity: 0 }}
                      transition={{ duration: 0.2, ease: EASE }}
                      className="inline-flex"
                    >
                      <Copy className="h-4 w-4" aria-hidden="true" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </span>
              <span className="tabular-nums">{EMAIL}</span>
            </motion.span>
          ) : (
            <motion.span
              key="contact"
              layout="position"
              initial={{ opacity: 0, filter: "blur(8px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(8px)" }}
              transition={{ duration: 0.35, ease: EASE }}
              className="inline-flex items-center gap-2 whitespace-nowrap"
            >
              <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>Contact</span>
            </motion.span>
          )}
        </AnimatePresence>
      </motion.span>
    </motion.button>
  );
}
