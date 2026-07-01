import { Lightbulb, MapPin } from "lucide-react";

type HeaderProps = {
  title: string;
};

export function Header({ title }: HeaderProps) {
  return (
    <header className="animate-fade-in-down game-header flex shrink-0 items-center justify-between border-b border-chronicle-gold/20">
      <Lightbulb
        className="animate-fade-in anim-delay-200 h-[clamp(0.9rem,2.2dvh,1.25rem)] w-[clamp(0.9rem,2.2dvh,1.25rem)] shrink-0 text-chronicle-gold/80"
        strokeWidth={1.5}
        aria-hidden
      />
      <div className="animate-fade-in-up anim-delay-100 flex flex-col items-center">
        <h1 className="game-header-title font-display font-semibold tracking-wide text-chronicle-gold">
          {title}
        </h1>
        <span className="mt-0.5 font-display text-[clamp(calc(0.5rem+2px),calc(1.2dvh+2px),calc(0.625rem+2px))] tracking-[0.18em] text-chronicle-gold/50 uppercase">
          Wersja alfa
        </span>
      </div>
      <MapPin
        className="animate-fade-in anim-delay-200 h-[clamp(0.9rem,2.2dvh,1.25rem)] w-[clamp(0.9rem,2.2dvh,1.25rem)] shrink-0 text-chronicle-gold/80"
        strokeWidth={1.5}
        aria-hidden
      />
    </header>
  );
}
