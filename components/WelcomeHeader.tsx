import { Lightbulb, MapPin } from "lucide-react";

type WelcomeHeaderProps = {
  title: string;
};

export function WelcomeHeader({ title }: WelcomeHeaderProps) {
  return (
    <header className="flex shrink-0 items-center justify-between border-b border-[#5D2E17]/10 bg-[#FDF6E3] px-4 py-3">
      <Lightbulb
        className="h-5 w-5 shrink-0 text-[#5D2E17]"
        strokeWidth={1.75}
        aria-hidden
      />
      <h1 className="font-display text-[clamp(0.9rem,2.2dvh,1.05rem)] font-semibold tracking-wide text-[#5D2E17]">
        {title}
      </h1>
      <MapPin
        className="h-5 w-5 shrink-0 text-[#5D2E17]"
        strokeWidth={1.75}
        aria-hidden
      />
    </header>
  );
}
