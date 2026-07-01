import { forwardRef } from "react";
import type { LucideProps } from "lucide-react";

export const Tower = forwardRef<SVGSVGElement, LucideProps>(
  (
    {
      color = "currentColor",
      size = 24,
      strokeWidth = 2,
      absoluteStrokeWidth,
      className,
      ...props
    },
    ref,
  ) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={
        absoluteStrokeWidth
          ? (Number(strokeWidth) * 24) / Number(size)
          : strokeWidth
      }
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M6 22V10l6-3 6 3v12" />
      <path d="M6 22h12" />
      <path d="M4 10h16" />
      <path d="M8 10V7l4-2 4 2v3" />
      <path d="M10 22v-4h4v4" />
      <path d="M9 14h6" />
    </svg>
  ),
);

Tower.displayName = "Tower";
