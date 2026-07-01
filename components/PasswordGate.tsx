"use client";

import { ChronicleButton } from "@/components/ChronicleButton";
import { ChronicleInput } from "@/components/ChronicleInput";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

type PasswordGateProps = {
  password: string;
  nextSlug?: string;
  placeholder: string;
  submitLabel: string;
  successMessage: string;
  errorMessage: string;
  onSuccess?: () => void;
};

function matchesPassword(input: string, expected: string) {
  return input.trim().toLowerCase() === expected.trim().toLowerCase();
}

export function PasswordGate({
  password,
  nextSlug,
  placeholder,
  submitLabel,
  successMessage,
  errorMessage,
  onSuccess,
}: PasswordGateProps) {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (matchesPassword(value, password)) {
      onSuccess?.();

      if (nextSlug) {
        router.push(nextSlug);
        return;
      }

      setStatus("success");
      return;
    }

    setStatus("error");
  }

  if (status === "success") {
    return (
      <p className="text-center font-display text-[calc(0.875rem+2px)] italic text-chronicle-gold-light">
        {successMessage}
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="game-form">
      <ChronicleInput
        type="text"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
          if (status === "error") setStatus("idle");
        }}
        placeholder={placeholder}
        autoComplete="off"
        spellCheck={false}
      />
      <ChronicleButton type="submit" showArrow>
        {submitLabel}
      </ChronicleButton>
      {status === "error" && (
        <p className="text-center text-[calc(0.75rem+2px)] text-red-400">{errorMessage}</p>
      )}
    </form>
  );
}
