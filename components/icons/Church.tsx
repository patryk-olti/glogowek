import { forwardRef } from "react";
import type { LucideProps } from "lucide-react";

export const Church = forwardRef<SVGSVGElement, LucideProps>(
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
      <path d="M12 2v4" />
      <path d="M10.5 4h3" />
      <path d="M12 6v2" />
      <path d="M4 22V10l8-4 8 4v12" />
      <path d="M4 22h16" />
      <path d="M9 22v-6h6v6" />
      <path d="M9 14h6" />
    </svg>
  ),
);

Church.displayName = "Church";
