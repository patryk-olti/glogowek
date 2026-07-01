import { Beer, BookOpen, Castle, SignpostBig, Trees, Waves, type LucideIcon } from "lucide-react";
import { Church } from "@/components/icons/Church";
import { Scepter } from "@/components/icons/Scepter";
import { Tower } from "@/components/icons/Tower";

const heroIcons = {
  book: BookOpen,
  castle: Castle,
  church: Church,
  mug: Beer,
  signpost: SignpostBig,
  scepter: Scepter,
  tower: Tower,
  trees: Trees,
  waves: Waves,
} as const satisfies Record<string, LucideIcon>;

export type HeroIcon = keyof typeof heroIcons;

type HeroQuoteProps = {
  subtitle: string;
  quote: string;
  icon?: HeroIcon;
};

export function HeroQuote({ subtitle, quote, icon = "book" }: HeroQuoteProps) {
  const Icon = heroIcons[icon];
  return (
    <section className="game-compact-hero flex shrink-0 flex-col items-center px-[clamp(0.75rem,3vw,1.5rem)] pt-[clamp(0.5rem,1.4dvh,0.75rem)] pb-[clamp(0.35rem,1dvh,0.5rem)] text-center">
      <div
        className="animate-icon-in mb-1.5 flex items-center justify-center rounded-lg bg-chronicle-gold/15 ring-1 ring-chronicle-gold/40 sm:rounded-xl"
        style={{
          width: "var(--hero-icon-size)",
          height: "var(--hero-icon-size)",
        }}
      >
        <Icon
          className="text-chronicle-gold"
          style={{
            width: "calc(var(--hero-icon-size) * 0.5)",
            height: "calc(var(--hero-icon-size) * 0.5)",
          }}
          strokeWidth={1.5}
          aria-hidden
        />
      </div>
      <p className="animate-fade-in-up anim-delay-200 mb-1 font-display text-[clamp(calc(0.58rem+2px),calc(1.4dvh+2px),calc(0.75rem+2px))] font-semibold tracking-[0.2em] text-chronicle-gold">
        {subtitle}
      </p>
      <blockquote
        className="animate-fade-in-up anim-delay-300 font-display italic leading-tight text-white/90"
        style={{ fontSize: "var(--hero-quote-size)" }}
      >
        &ldquo;{quote}&rdquo;
      </blockquote>
    </section>
  );
}
