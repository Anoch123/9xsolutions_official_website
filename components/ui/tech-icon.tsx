"use client";

import { techIcons } from "@/lib/constants/helper-constants";
import { useState } from "react";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons";

export default function TechIcon({ name }: { name: string }) {
  const key = name.split(" (")[0];
  const entry = techIcons[key];

  const sources: string[] = [];
  if (entry?.devicon) {
    sources.push(
      `${DEVICON}/${entry.devicon}/${entry.devicon}-original.svg`,
      `${DEVICON}/${entry.devicon}/${entry.devicon}-plain.svg`,
    );
  }
  if (entry?.simple) sources.push(`https://cdn.simpleicons.org/${entry.simple}`);

  const [attempt, setAttempt] = useState(0);

  // Fallback: a small letter badge when no icon is found or all sources fail
  if (attempt >= sources.length) {
    return (
      <span
        className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[#0B1020] text-[10px] font-semibold text-[#8FA0FF]"
        aria-hidden="true"
      >
        {key.replace(/[^A-Za-z]/g, "").slice(0, 2)}
      </span>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={sources[attempt]}
      alt=""
      width={20}
      height={20}
      loading="lazy"
      onError={() => setAttempt((a) => a + 1)}
      className="h-5 w-5 shrink-0 object-contain"
    />
  );
}