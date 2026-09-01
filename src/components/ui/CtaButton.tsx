"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const BOOKINGS_HREF = "/bookings/";

type CtaVariant = "primary" | "light" | "outline" | "header" | "ghost";
type CtaSize = "default" | "compact" | "mini";

const variantClass: Record<CtaVariant, string> = {
  primary:
    "bg-[#673de6] text-white shadow-lg shadow-[#673de6]/30 hover:bg-[#5025d1]",
  light: "bg-white text-[#18191c] shadow-xl hover:bg-gray-100",
  outline: "bg-[#18191c] border border-white/30 text-white hover:bg-white/10",
  header: "bg-[#673de6] text-white hover:bg-[#5025d1]",
  ghost: "bg-white border border-gray-300 text-gray-900 hover:bg-gray-100 shadow-sm",
};

const sizeClass: Record<CtaSize, string> = {
  default: "gap-2 px-7 py-3.5 text-sm sm:text-base font-bold",
  compact: "gap-1.5 px-5 py-2 text-sm font-normal",
  mini: "gap-1 px-3 py-1.5 text-xs font-normal",
};

const arrowClass: Record<CtaSize, string> = {
  default: "h-4 w-4",
  compact: "h-3.5 w-3.5",
  mini: "h-3 w-3",
};

interface CtaButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  variant?: CtaVariant;
  size?: CtaSize;
  onClick?: () => void;
}

export function CtaButton({
  children,
  href = BOOKINGS_HREF,
  className = "",
  variant = "primary",
  size = "default",
  onClick,
}: CtaButtonProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`group inline-flex items-center justify-center rounded-xl transition-all duration-300 ease-out cursor-pointer active:scale-[0.98] ${variantClass[variant]} ${sizeClass[size]} ${className}`}
    >
      <span>{children}</span>
      <ArrowRight
        className={`${arrowClass[size]} shrink-0 bg-transparent transition-transform duration-300 ease-out group-hover:translate-x-1`}
      />
    </Link>
  );
}
