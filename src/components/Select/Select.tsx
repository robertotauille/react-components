import React, {
  FC,
  Ref,
  SelectHTMLAttributes,
  ReactNode,
  forwardRef,
} from "react";

import { Theme, ThemeColors } from "../../theme";
import { classNames } from "../../utils/miscellaneous";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name?: string;
  label?: string;
  color?: keyof typeof ThemeColors;
  error?: string;
  children?: ReactNode;
  ref?: Ref<HTMLSelectElement>;
}

const colors = {
  slate: "focus:border-slate-500 focus:ring-slate-500",
  gray: "focus:border-gray-500 focus:ring-gray-500",
  red: "focus:border-red-500 focus:ring-red-500",
  orange: "focus:border-orange-500 focus:ring-orange-500",
  amber: "focus:border-amber-500 focus:ring-amber-500",
  yellow: "focus:border-yellow-500 focus:ring-yellow-500",
  lime: "focus:border-lime-500 focus:ring-lime-500",
  green: "focus:border-green-500 focus:ring-green-500",
  emerald: "focus:border-emerald-500 focus:ring-emerald-500",
  teal: "focus:border-teal-500 focus:ring-teal-500",
  cyan: "focus:border-cyan-500 focus:ring-cyan-500",
  sky: "focus:border-sky-500 focus:ring-sky-500",
  blue: "focus:border-blue-500 focus:ring-blue-500",
  indigo: "focus:border-indigo-500 focus:ring-indigo-500",
  violet: "focus:border-violet-500 focus:ring-violet-500",
  purple: "focus:border-purple-500 focus:ring-purple-500",
  fuchsia: "focus:border-fuchsia-500 focus:ring-fuchsia-500",
  pink: "focus:border-pink-500 focus:ring-pink-500",
  rose: "focus:border-rose-500 focus:ring-rose-500",
};

export const Select: FC<SelectProps> = forwardRef<
  HTMLSelectElement,
  SelectProps
>(
  (
    { name, label, color = Theme.config.color, error, children, ...rest },
    ref
  ) => {
    return (
      <div className="flex flex-col">
        {label && (
          <label
            htmlFor={name}
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            {label}
          </label>
        )}

        <div className="relative rounded-md shadow-sm">
          <select
            ref={ref}
            id={name}
            name={name}
            className={classNames(
              "block w-full appearance-none border focus:outline-none shadow-sm focus:ring-1",
              "transition-all duration-150 ease-in-out",
              "px-3 py-3 rounded-md",
              colors[color],
              error
                ? "border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500"
                : "border-gray-300 text-gray-900 placeholder-gray-400"
            )}
            {...rest}
          >
            {children}
          </select>
        </div>

        {error && (
          <p className="inline-flex items-center mt-1 text-xs text-red-400">
            {error}
          </p>
        )}
      </div>
    );
  }
);
