import React, { FC, Ref, ReactNode, forwardRef } from "react";

import { Theme, ThemeColors } from "../../theme";
import { classNames } from "../../utils/miscellaneous";

export interface BadgeProps {
  children?: ReactNode;
  color?: keyof typeof ThemeColors;
  size?: "sm" | "lg";
  hasCircle?: boolean;
  className?: string;
  ref?: Ref<HTMLSpanElement>;
}

export const Badge: FC<BadgeProps> = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      children,
      color = Theme.config.color,
      size = "sm",
      hasCircle = false,
      className = "",
    },
    ref
  ) => {
    const colors = {
      slate: "text-slate-600 bg-slate-100",
      gray: "text-gray-600 bg-gray-100",
      red: "text-red-600 bg-red-100",
      orange: "text-orange-600 bg-orange-100",
      amber: "text-amber-600 bg-amber-100",
      yellow: "text-yellow-600 bg-yellow-100",
      lime: "text-lime-600 bg-lime-100",
      green: "text-green-600 bg-green-100",
      emerald: "text-emerald-600 bg-emerald-100",
      teal: "text-teal-600 bg-teal-100",
      cyan: "text-cyan-600 bg-cyan-100",
      sky: "text-sky-600 bg-sky-100",
      blue: "text-blue-600 bg-blue-100",
      indigo: "text-indigo-600 bg-indigo-100",
      violet: "text-violet-600 bg-violet-100",
      purple: "text-purple-600 bg-purple-100",
      fuchsia: "text-fuchsia-600 bg-fuchsia-100",
      pink: "text-pink-600 bg-pink-100",
      rose: "text-rose-600 bg-rose-100",
    };

    const sizes = {
      sm: "px-2.5 py-0.5 text-xs font-medium",
      lg: "px-3 py-0.5 text-sm font-medium",
    };

    return (
      <span
        ref={ref}
        className={classNames(
          "inline-flex items-center rounded-full",
          sizes[size],
          colors[color],
          className
        )}
      >
        {hasCircle && (
          <svg
            className="-ml-0.5 mr-1.5 h-2 w-2 opacity-70"
            fill="currentColor"
            viewBox="0 0 8 8"
          >
            <circle cx={4} cy={4} r={3} />
          </svg>
        )}
        {children}
      </span>
    );
  }
);
