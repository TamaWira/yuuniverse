import { cn } from "@/lib/utils";
import React, { JSX } from "react";

type Props = {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
  children: React.ReactNode;
};

export default function Heading({
  variant = "h1",
  className,
  children,
}: Props) {
  const Component = variant as keyof JSX.IntrinsicElements;

  return (
    <Component
      className={cn("font-abhaya font-bold text-3xl lg:text-6xl", className)}
    >
      {children}
    </Component>
  );
}
