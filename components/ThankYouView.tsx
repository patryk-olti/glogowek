"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ParchmentShell } from "@/components/ParchmentShell";
import { thankYou } from "@/config/stages";

export function ThankYouView() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      setReady(true);
      return;
    }

    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => setReady(true));
    });

    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div
      className={ready ? "screen-mount screen-mount--ready" : "screen-mount"}
    >
      <ParchmentShell>
        <div className="flex min-h-0 flex-1 flex-col">
          <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
            <div className="px-4 pt-4 pb-5">
              <p className="animate-fade-in-down anim-delay-100 text-center font-display text-[0.68rem] font-semibold tracking-[0.22em] text-[#5D2E17]/70 uppercase">
                {thankYou.subtitle}
              </p>
              <h1 className="animate-fade-in-down anim-delay-200 mt-2 text-center font-display text-[clamp(1.35rem,4.5dvh,1.75rem)] font-bold leading-tight text-[#5D2E17]">
                {thankYou.headline}
              </h1>
              <div className="animate-expand-line anim-delay-300 mx-auto my-3 h-px w-16 bg-[#5D2E17]/20" />

              <div className="animate-scale-in anim-delay-300 relative mx-auto mb-4 aspect-square w-full max-w-[340px] overflow-hidden rounded-xl bg-[#F9F4EE] shadow-md shadow-[#5D2E17]/20">
                <Image
                  src={thankYou.image}
                  alt={thankYou.imageAlt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 430px) 90vw, 340px"
                  priority
                />
              </div>

              <div className="mx-auto w-[88%] text-center">
                <p className="animate-fade-in-up anim-delay-400 font-display text-[0.95rem] font-semibold text-[#5D2E17]">
                  {thankYou.greeting}
                </p>

                <div className="animate-fade-in-up anim-delay-500 mx-auto mt-4 max-w-[340px] rounded-xl bg-white/70 px-4 py-3.5 shadow-sm shadow-[#5D2E17]/8 ring-1 ring-[#5D2E17]/8">
                  {thankYou.paragraphs.map((paragraph, index) => (
                    <p
                      key={index}
                      className={`text-[0.84rem] leading-relaxed text-[#5D2E17]/85${index > 0 ? " mt-3" : ""}`}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                <p className="animate-fade-in-up anim-delay-700 mt-5 font-display text-[0.72rem] text-[#5D2E17]/60">
                  {thankYou.creatorLabel}
                </p>
                <a
                  href={`mailto:${thankYou.creatorEmail}`}
                  className="animate-fade-in-up anim-delay-800 mt-1 inline-block font-mono text-[0.68rem] tracking-wide text-[#5D2E17]/75 underline decoration-[#5D2E17]/25 underline-offset-2 transition-colors hover:text-[#5D2E17] hover:decoration-[#5D2E17]/50"
                >
                  {thankYou.creatorEmail}
                </a>
              </div>
            </div>
          </div>
        </div>
      </ParchmentShell>
    </div>
  );
}
