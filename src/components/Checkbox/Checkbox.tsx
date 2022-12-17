import React, { FC, Ref, InputHTMLAttributes, forwardRef } from "react";

import { Theme, ThemeColors } from "../../theme";
import { classNames } from "../../utils/miscellaneous";

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  label?: string;
  description?: string;
  color?: keyof typeof ThemeColors;
  ref?: Ref<HTMLInputElement>;
}

const colors = {
  slate: "text-slate-600 focus:ring-slate-500",
  gray: "text-gray-600 focus:ring-gray-500",
  red: "text-red-600 focus:ring-red-500",
  orange: "text-orange-600 focus:ring-orange-500",
  amber: "text-amber-600 focus:ring-amber-500",
  yellow: "text-yellow-600 focus:ring-yellow-500",
  lime: "text-lime-600 focus:ring-lime-500",
  green: "text-green-600 focus:ring-green-500",
  emerald: "text-emerald-600 focus:ring-emerald-500",
  teal: "text-teal-600 focus:ring-teal-500",
  cyan: "text-cyan-600 focus:ring-cyan-500",
  sky: "text-sky-600 focus:ring-sky-500",
  blue: "text-blue-600 focus:ring-blue-500",
  indigo: "text-indigo-600 focus:ring-indigo-500",
  violet: "text-violet-600 focus:ring-violet-500",
  purple: "text-purple-600 focus:ring-purple-500",
  fuchsia: "text-fuchsia-600 focus:ring-fuchsia-500",
  pink: "text-pink-600 focus:ring-pink-500",
  rose: "text-rose-600 focus:ring-rose-500",
};

export const Checkbox: FC<CheckboxProps> = forwardRef<
  HTMLInputElement,
  CheckboxProps
>(({ name, label, description, color = Theme.config.color, ...rest }, ref) => {
  return (
    <div className="relative flex items-start">
      <div className="flex h-5 items-center">
        <input
          ref={ref}
          id={name}
          name={name}
          type="checkbox"
          className={classNames(
            "h-4 w-4 rounded border-gray-300",
            colors[color]
          )}
          {...rest}
        />
      </div>

      <div className="ml-3 text-sm">
        <label htmlFor={name} className="font-medium text-gray-700">
          {label}
        </label>
        {description && <span className="text-gray-500"> {description}</span>}
      </div>
    </div>
  );
});
