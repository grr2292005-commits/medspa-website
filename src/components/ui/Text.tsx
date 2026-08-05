import React from "react";
import { cn } from "@/lib/utils";

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  as?: React.ElementType;
}

export const Text: React.FC<TextProps> = ({
  as: Component = "p",
  children,
  className,
  ...props
}) => {
  return (
    <Component
      className={cn("text-base text-[var(--color-muted)] leading-relaxed", className)}
      {...props}
    >
      {children}
    </Component>
  );
};
