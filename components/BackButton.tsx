"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

type BackButtonProps = {
  href: string;
  label?: string;
};

export function BackButton({ href, label = "Wstecz" }: BackButtonProps) {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.push(href)}
      className="chronicle-btn chronicle-btn--back"
    >
      <ArrowLeft
        className="chronicle-btn__arrow chronicle-btn__arrow--back h-4 w-4"
        aria-hidden
      />
      {label}
    </button>
  );
}
