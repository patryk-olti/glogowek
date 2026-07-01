"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ContinueButton } from "@/components/ContinueButton";
import type { Destination } from "@/config/destinations";

type DestinationViewProps = {
  destination: Destination;
};

type SplashPhase = "blink" | "exit" | "done";

const SPLASH_BLINK_MS = 2200;
const SPLASH_EXIT_MS = 550;

export function DestinationView({ destination }: DestinationViewProps) {
  const [splashPhase, setSplashPhase] = useState<SplashPhase>("blink");
  const [contentReady, setContentReady] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      setSplashPhase("done");
      setContentReady(true);
      return;
    }

    const exitTimer = window.setTimeout(() => {
      setSplashPhase("exit");
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setContentReady(true));
      });
    }, SPLASH_BLINK_MS);
    const doneTimer = window.setTimeout(
      () => setSplashPhase("done"),
      SPLASH_BLINK_MS + SPLASH_EXIT_MS,
    );

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(doneTimer);
    };
  }, []);

  return (
    <div
      className={
        contentReady ? "screen-mount screen-mount--ready" : "screen-mount"
      }
    >
      <div className="destination-page game-viewport relative w-full bg-[#F9F4EE]">
        {splashPhase !== "done" && (
          <div
            className={`destination-splash${splashPhase === "exit" ? " destination-splash--exit" : ""}`}
            aria-hidden="true"
          >
            <p className="destination-splash__subtitle">{destination.subtitle}</p>
            <h1 className="destination-splash__title">{destination.title}</h1>
          </div>
        )}

        <div
          className={`destination-shell mx-auto flex h-full w-full max-w-[430px] flex-col px-[max(0px,env(safe-area-inset-left))] pr-[max(0px,env(safe-area-inset-right))] pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]${splashPhase === "blink" ? " destination-content--hidden" : ""}`}
        >
          <div className="flex min-h-0 flex-1 flex-col">
            <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 pt-6">
              <header className="destination-header">
                <p className="animate-fade-in-down anim-delay-100 text-center font-display text-[0.68rem] font-semibold tracking-[0.22em] text-[#2D2926]/70 uppercase">
                  {destination.subtitle}
                </p>
                <h1 className="animate-fade-in-down anim-delay-200 mt-3 text-center font-display text-[clamp(1.35rem,4.8dvh,1.85rem)] font-bold leading-tight text-[#2D2926]">
                  {destination.title}
                </h1>
              </header>
              <div className="animate-expand-line anim-delay-300 mx-auto mt-4 h-px w-full max-w-[280px] bg-[#2D2926]/12" />

              <div className="animate-scale-in anim-delay-400 relative mx-auto mt-5 w-full max-w-[340px]">
                <div className="destination-image-frame relative aspect-square overflow-hidden bg-[#F9F4EE] shadow-md shadow-[#2D2926]/15">
                  <Image
                    src={destination.image}
                    alt={destination.imageAlt}
                    fill
                    className={
                      "imageClassName" in destination
                        ? destination.imageClassName
                        : "object-contain"
                    }
                    sizes="(max-width: 430px) 90vw, 340px"
                    priority
                  />
                </div>
              </div>

              <div className="animate-fade-in-up anim-delay-500 mx-auto mt-5 max-w-[340px] rounded-xl bg-white px-5 py-4 shadow-sm shadow-[#2D2926]/8 ring-1 ring-[#2D2926]/6">
                {destination.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className={`animate-fade-in-up text-center font-body text-[0.84rem] leading-relaxed text-[#2D2926]/80 italic${index > 0 ? " mt-3" : ""}`}
                    style={{ animationDelay: `${600 + index * 100}ms` }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="animate-fade-in-up anim-delay-800 shrink-0 px-5 pt-4 pb-5">
              <ContinueButton
                label={destination.continueLabel}
                nextSlug={destination.nextSlug}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
