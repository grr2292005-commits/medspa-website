import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = "primary",
  size = "md",
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50";
  
  const variants = {
    primary: "bg-[var(--color-primary)] text-[var(--color-primary-foreground)] hover:opacity-90",
    secondary: "bg-[var(--color-secondary)] text-[var(--color-secondary-foreground)] hover:opacity-80",
    outline: "border border-[var(--color-border)] bg-transparent hover:bg-[var(--color-secondary)]",
  };

  const sizes = {
    sm: "h-8 px-3 text-xs rounded-[var(--radius-sm)]",
    md: "h-10 px-4 text-sm rounded-[var(--radius-md)]",
    lg: "h-12 px-6 text-base rounded-[var(--radius-lg)]",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};
