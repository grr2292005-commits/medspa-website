import React from "react";
import { cn } from "@/lib/utils";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: HeadingLevel;
}

export const Heading: React.FC<HeadingProps> = ({
  as: Component = "h2",
  children,
  className,
  ...props
}) => {
  const styles: Record<HeadingLevel, string> = {
    h1: "text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl",
    h2: "text-3xl font-bold tracking-tight sm:text-4xl",
    h3: "text-2xl font-semibold tracking-tight",
    h4: "text-xl font-semibold",
    h5: "text-lg font-medium",
    h6: "text-base font-medium",
  };

  return (
    <Component className={cn(styles[Component], className)} {...props}>
      {children}
    </Component>
  );
};
