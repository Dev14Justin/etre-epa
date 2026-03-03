import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export default function Card({
  children,
  className = "",
  hoverEffect = true,
}: CardProps) {
  const hasBackground = className
    .split(" ")
    .some((cls) => cls.startsWith("bg-"));
  const baseBackground = hasBackground ? "" : "bg-white";

  return (
    <div
      className={`${baseBackground} rounded-xl shadow-sm border border-gray-100 p-6 md:p-8 ${hoverEffect ? "hover:shadow-md transition-shadow duration-300" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
