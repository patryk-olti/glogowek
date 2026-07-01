"use client";

import { useState, type ReactNode } from "react";
import { Star } from "lucide-react";
import { TypingStory, TypingText } from "@/components/TypingText";

type ParchmentCardBodyProps = {
  paragraphs: readonly string[];
  passwordHint?: string;
  typing?: boolean;
  children?: React.ReactNode;
};

export function ParchmentCardBody({
  paragraphs,
  passwordHint,
  typing = false,
  children,
}: ParchmentCardBodyProps) {
  const [paragraphsDone, setParagraphsDone] = useState(!typing);
  const [hintDone, setHintDone] = useState(!typing || !passwordHint);
  const showFooter = !typing || paragraphsDone;
  const showChildren = !typing || (paragraphsDone && hintDone);

  if (!typing) {
    return (
      <>
        <div className="story-body">
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className={`story-paragraph${index === 0 ? " drop-cap" : ""}`}
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="card-footer">
          <CardFooterStars />
          {passwordHint && (
            <p className="story-hint text-center font-display italic">
              {passwordHint}
            </p>
          )}
          {children}
        </div>
      </>
    );
  }

  return (
    <>
      <TypingStory
        paragraphs={paragraphs}
        onComplete={() => setParagraphsDone(true)}
      />

      {showFooter && (
        <div className="card-footer">
          <CardFooterStars />

          {passwordHint && paragraphsDone && !hintDone && (
            <TypingText
              text={passwordHint}
              className="story-hint text-center font-display italic"
              startDelay={350}
              onComplete={() => setHintDone(true)}
            />
          )}

          {passwordHint && hintDone && (
            <p className="story-hint text-center font-display italic">
              {passwordHint}
            </p>
          )}

          {!passwordHint && paragraphsDone && children}
          {passwordHint && showChildren && children}
        </div>
      )}
    </>
  );
}

function CardFooterStars() {
  return (
    <div className="flex items-center justify-center gap-1.5 text-chronicle-red/60">
      <Star
        className="animate-twinkle h-[clamp(0.45rem,1.1dvh,0.625rem)] w-[clamp(0.45rem,1.1dvh,0.625rem)] fill-current"
        aria-hidden
      />
      <Star
        className="animate-twinkle twinkle-delay-1 h-[clamp(0.45rem,1.1dvh,0.625rem)] w-[clamp(0.45rem,1.1dvh,0.625rem)] fill-current"
        aria-hidden
      />
      <Star
        className="animate-twinkle twinkle-delay-2 h-[clamp(0.45rem,1.1dvh,0.625rem)] w-[clamp(0.45rem,1.1dvh,0.625rem)] fill-current"
        aria-hidden
      />
    </div>
  );
}
