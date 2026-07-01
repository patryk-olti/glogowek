"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ContinueButton } from "@/components/ContinueButton";
import { ParchmentShell } from "@/components/ParchmentShell";
import { welcome } from "@/config/stages";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function WelcomeScreen() {
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
            <div className="px-4 pt-4">
              <div className="animate-scale-in relative mb-4 aspect-square overflow-hidden rounded-xl bg-[#F9F4EE] shadow-md shadow-[#5D2E17]/20">
                <Image
                  src={`${basePath}/glogowek-welcome.png`}
                  alt="Ilustracja rynku i ratusza w Głogówku"
                  fill
                  className="object-contain"
                  sizes="(max-width: 430px) 100vw, 430px"
                  priority
                />
              </div>

              <div className="mx-auto w-[80%] text-center">
                <h2 className="animate-fade-in-up anim-delay-200 font-display text-[clamp(1.35rem,4.5dvh,1.75rem)] font-bold leading-tight text-[#5D2E17]">
                  {welcome.headline}
                </h2>
                <div className="animate-expand-line anim-delay-300 mx-auto my-2.5 h-px w-16 bg-[#5D2E17]/20" />
                <p className="animate-fade-in-up anim-delay-400 font-display text-[0.95rem] font-semibold text-[#5D2E17]">
                  {welcome.greeting}
                </p>
                <p className="animate-fade-in-up anim-delay-500 mt-2 text-[0.84rem] leading-relaxed text-[#5D2E17]/85">
                  {welcome.intro}
                </p>
                <blockquote className="animate-fade-in-up anim-delay-600 mt-3 text-[0.82rem] italic leading-relaxed text-[#5D2E17]/85">
                  &ldquo;{welcome.quote}&rdquo;
                </blockquote>
                <span className="animate-fade-in-up anim-delay-700 mt-3 inline-block rounded-full border border-[#5D2E17]/20 bg-[#5D2E17]/5 px-3 py-0.5 font-mono text-[0.62rem] font-semibold tracking-widest text-[#5D2E17]/65 uppercase">
                  {welcome.version}
                </span>
                <p className="animate-fade-in-up anim-delay-800 mt-2.5 font-mono text-[0.62rem] leading-relaxed tracking-wide text-[#5D2E17]/55">
                  {welcome.status}
                </p>
              </div>
            </div>
          </div>

          <div className="animate-fade-in-up anim-delay-800 shrink-0 px-4 pt-3 pb-5">
            <ContinueButton
              label={welcome.buttonLabel}
              nextSlug={welcome.startPath}
            />
          </div>
        </div>
      </ParchmentShell>
    </div>
  );
}
