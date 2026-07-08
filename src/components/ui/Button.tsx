import type { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const stylesByVariant: Record<ButtonVariant, string> = {
  primary:
    "bg-razzia-500 text-white hover:bg-razzia-600 border border-razzia-500",
  secondary:
    "bg-white text-smoke-900 border border-line-100 hover:border-razzia-300",
  ghost: "bg-transparent text-smoke-900 hover:bg-surface-50 border border-transparent",
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-colors";
  const classes = `${baseClasses} ${stylesByVariant[variant]} ${className}`;

  if (href) {
    return (
      <Link className={classes} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
