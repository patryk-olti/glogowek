"use client";

import {
  createElement,
  useEffect,
  useRef,
  useState,
} from "react";

const DEFAULT_SPEED = 26;
const PARAGRAPH_PAUSE = 350;
const DIVIDER_PAUSE = 250;

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return reduced;
}

type UseTypingOptions = {
  speed?: number;
  startDelay?: number;
  enabled?: boolean;
  onComplete?: () => void;
};

function useTyping(
  text: string,
  {
    speed = DEFAULT_SPEED,
    startDelay = 0,
    enabled = true,
    onComplete,
  }: UseTypingOptions = {},
) {
  const reducedMotion = usePrefersReducedMotion();
  const [displayed, setDisplayed] = useState(reducedMotion ? text : "");
  const [isTyping, setIsTyping] = useState(false);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    if (reducedMotion) {
      setDisplayed(text);
      setIsTyping(false);
      onCompleteRef.current?.();
      return;
    }

    if (!enabled) {
      setDisplayed("");
      setIsTyping(false);
      return;
    }

    setDisplayed("");
    setIsTyping(text.length > 0);

    if (text.length === 0) {
      setIsTyping(false);
      onCompleteRef.current?.();
      return;
    }

    let charIndex = 0;
    let timeoutId = 0;

    const tick = () => {
      charIndex += 1;
      setDisplayed(text.slice(0, charIndex));

      if (charIndex >= text.length) {
        setIsTyping(false);
        onCompleteRef.current?.();
        return;
      }

      timeoutId = window.setTimeout(tick, speed);
    };

    timeoutId = window.setTimeout(tick, startDelay + speed);

    return () => window.clearTimeout(timeoutId);
  }, [text, speed, startDelay, enabled, reducedMotion]);

  return { displayed, isTyping };
}

type TypingCursorProps = {
  visible: boolean;
};

function TypingCursor({ visible }: TypingCursorProps) {
  if (!visible) {
    return null;
  }

  return <span className="typing-cursor" aria-hidden />;
}

type TypingTextProps = {
  text: string;
  className?: string;
  as?: "p" | "h2" | "blockquote" | "span";
  prefix?: string;
  suffix?: string;
  speed?: number;
  startDelay?: number;
  enabled?: boolean;
  onComplete?: () => void;
};

export function TypingText({
  text,
  className,
  as = "p",
  prefix = "",
  suffix = "",
  speed,
  startDelay,
  enabled = true,
  onComplete,
}: TypingTextProps) {
  const { displayed, isTyping } = useTyping(text, {
    speed,
    startDelay,
    enabled,
    onComplete,
  });

  return createElement(
    as,
    { className },
    prefix,
    displayed,
    suffix,
    <TypingCursor visible={isTyping} />,
  );
}

type TypingParagraphProps = {
  text: string;
  dropCap?: boolean;
  active: boolean;
  completed: boolean;
  pauseBefore?: boolean;
  onComplete: () => void;
};

function TypingParagraph({
  text,
  dropCap = false,
  active,
  completed,
  pauseBefore = false,
  onComplete,
}: TypingParagraphProps) {
  const { displayed, isTyping } = useTyping(text, {
    enabled: active && !completed,
    startDelay: active && !completed && pauseBefore ? PARAGRAPH_PAUSE : 0,
    onComplete,
  });

  if (!active && !completed) {
    return null;
  }

  return (
    <p className={`story-paragraph${dropCap ? " drop-cap" : ""}`}>
      {completed ? text : displayed}
      <TypingCursor visible={isTyping} />
    </p>
  );
}

type TypingStoryProps = {
  paragraphs: readonly string[];
  onComplete?: () => void;
};

export function TypingStory({ paragraphs, onComplete }: TypingStoryProps) {
  const reducedMotion = usePrefersReducedMotion();
  const [activeIndex, setActiveIndex] = useState(reducedMotion ? paragraphs.length : 0);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    if (reducedMotion) {
      onCompleteRef.current?.();
    }
  }, [reducedMotion]);

  const handleParagraphComplete = (index: number) => {
    if (index + 1 < paragraphs.length) {
      setActiveIndex(index + 1);
      return;
    }

    onCompleteRef.current?.();
  };

  if (reducedMotion) {
    return (
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
    );
  }

  return (
    <div className="story-body story-body--typing">
      {paragraphs.map((paragraph, index) => (
        <TypingParagraph
          key={index}
          text={paragraph}
          dropCap={index === 0}
          active={index <= activeIndex}
          completed={index < activeIndex}
          pauseBefore={index > 0}
          onComplete={() => handleParagraphComplete(index)}
        />
      ))}
    </div>
  );
}

export type TypingSequenceItem =
  | {
      type: "text";
      text: string;
      className?: string;
      as?: "p" | "h2" | "blockquote" | "span";
      prefix?: string;
      suffix?: string;
    }
  | {
      type: "divider";
      className?: string;
    };

type TypingSequenceProps = {
  items: TypingSequenceItem[];
  onComplete?: () => void;
  className?: string;
};

export function TypingSequence({
  items,
  onComplete,
  className,
}: TypingSequenceProps) {
  const reducedMotion = usePrefersReducedMotion();
  const [activeIndex, setActiveIndex] = useState(reducedMotion ? items.length : 0);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    if (reducedMotion) {
      onCompleteRef.current?.();
    }
  }, [reducedMotion]);

  const advance = (index: number) => {
    const next = index + 1;

    if (next >= items.length) {
      onCompleteRef.current?.();
      return;
    }

    setActiveIndex(next);

    if (items[next]?.type === "divider") {
      window.setTimeout(() => advance(next), DIVIDER_PAUSE);
    }
  };

  if (reducedMotion) {
    return (
      <div className={className}>
        {items.map((item, index) => {
          if (item.type === "divider") {
            return <div key={index} className={item.className} />;
          }

          return createElement(
            item.as ?? "p",
            { key: index, className: item.className },
            item.prefix,
            item.text,
            item.suffix,
          );
        })}
      </div>
    );
  }

  return (
    <div className={className}>
      {items.map((item, index) => {
        if (index > activeIndex) {
          return null;
        }

        if (item.type === "divider") {
          return <div key={index} className={item.className} />;
        }

        const completed = index < activeIndex;

        if (completed) {
          return createElement(
            item.as ?? "p",
            { key: index, className: item.className },
            item.prefix,
            item.text,
            item.suffix,
          );
        }

        return (
          <TypingText
            key={index}
            text={item.text}
            className={item.className}
            as={item.as}
            prefix={item.prefix}
            suffix={item.suffix}
            startDelay={index === 0 ? 0 : PARAGRAPH_PAUSE}
            onComplete={() => advance(index)}
          />
        );
      })}
    </div>
  );
}
