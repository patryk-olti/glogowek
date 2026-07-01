import { ArrowRight } from "lucide-react";
import { type ButtonHTMLAttributes, type ReactNode } from "react";

type ChronicleButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  showArrow?: boolean;
  children: ReactNode;
};

export function ChronicleButton({
  showArrow = false,
  children,
  className,
  type = "button",
  ...props
}: ChronicleButtonProps) {
  return (
    <button
      type={type}
      className={["chronicle-btn", className].filter(Boolean).join(" ")}
      {...props}
    >
      {children}
      {showArrow && (
        <ArrowRight className="chronicle-btn__arrow h-4 w-4" aria-hidden />
      )}
    </button>
  );
}
