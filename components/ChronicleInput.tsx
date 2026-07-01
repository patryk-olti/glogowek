import { type InputHTMLAttributes } from "react";

type ChronicleInputProps = InputHTMLAttributes<HTMLInputElement>;

export function ChronicleInput({ className, ...props }: ChronicleInputProps) {
  return (
    <input
      className={["chronicle-input", className].filter(Boolean).join(" ")}
      {...props}
    />
  );
}
