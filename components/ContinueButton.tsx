"use client";

import { ChronicleButton } from "@/components/ChronicleButton";
import { useRouter } from "next/navigation";
import { useState } from "react";

type ContinueButtonProps = {
  label: string;
  nextSlug?: string;
  pendingMessage?: string;
};

export function ContinueButton({
  label,
  nextSlug,
  pendingMessage = "Kolejny etap wkrótce dostępny.",
}: ContinueButtonProps) {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "pending">("idle");

  if (status === "pending") {
    return (
      <p className="text-center font-display text-[calc(0.875rem+2px)] italic text-chronicle-gold-light">
        {pendingMessage}
      </p>
    );
  }

  return (
    <ChronicleButton
      showArrow
      onClick={() => {
        if (nextSlug) {
          router.push(nextSlug);
          return;
        }

        setStatus("pending");
      }}
    >
      {label}
    </ChronicleButton>
  );
}
