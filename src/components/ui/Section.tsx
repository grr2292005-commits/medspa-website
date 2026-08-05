import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
}

export const Section: React.FC<SectionProps> = ({
  as: Component = "section",
  children,
  className,
  ...props
}) => {
  return (
    <Component className={cn("py-12 md:py-16 lg:py-24", className)} {...props}>
      {children}
    </Component>
  );
};
