import React, { FC, Ref, SVGAttributes, forwardRef } from "react";

import { Theme, ThemeColors } from "../../theme";
import { classNames } from "../../utils/miscellaneous";

export interface LoadingProps extends SVGAttributes<SVGSVGElement> {
  color?: keyof typeof ThemeColors;
  ref?: Ref<SVGSVGElement>;
}

const colors = {
  slate: "text-slate-500",
  gray: "text-gray-500",
  red: "text-red-500",
  orange: "text-orange-500",
  amber: "text-amber-500",
  yellow: "text-yellow-500",
  lime: "text-lime-500",
  green: "text-green-500",
  emerald: "text-emerald-500",
  teal: "text-teal-500",
  cyan: "text-cyan-500",
  sky: "text-sky-500",
  blue: "text-blue-500",
  indigo: "text-indigo-500",
  violet: "text-violet-500",
  purple: "text-purple-500",
  fuchsia: "text-fuchsia-500",
  pink: "text-pink-500",
  rose: "text-rose-500",
};

export const Loading: FC<LoadingProps> = forwardRef<
  SVGSVGElement,
  LoadingProps
>(({ color = Theme.config.color, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      className={classNames("animate-spin -ml-1 mr-3 h-5 w-5", colors[color])}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...rest}
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );
});
