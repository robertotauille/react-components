import React, {
  FC,
  Ref,
  ButtonHTMLAttributes,
  ReactNode,
  forwardRef,
} from "react";

import { Theme, ThemeColors } from "../../theme";
import { classNames } from "../../utils/miscellaneous";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  color?: keyof typeof ThemeColors;
  colorType?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  full?: boolean;
  loading?: boolean;
  loadingText?: string;
  disabled?: boolean;
  onClick?: () => void;
  ref?: Ref<HTMLButtonElement>;
}

export const Button: FC<ButtonProps> = forwardRef<
  HTMLButtonElement,
  ButtonProps
>(
  (
    {
      children,
      color = Theme.config.color,
      colorType = "primary",
      size = "md",
      full = false,
      loading,
      loadingText,
      disabled,
      onClick = () => {},
      ...rest
    },
    ref
  ) => {
    const handleClick = () => {
      if (loading || disabled || !onClick) return;

      onClick();
    };

    const colors = {
      primary: {
        slate: "bg-slate-500 hover:bg-slate-600 focus:ring-slate-500",
        gray: "bg-gray-500 hover:bg-gray-600 focus:ring-gray-500",
        red: "bg-red-500 hover:bg-red-600 focus:ring-red-500",
        orange: "bg-orange-500 hover:bg-orange-600 focus:ring-orange-500",
        amber: "bg-amber-500 hover:bg-amber-600 focus:ring-amber-500",
        yellow: "bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-500",
        lime: "bg-lime-500 hover:bg-lime-600 focus:ring-lime-500",
        green: "bg-green-500 hover:bg-green-600 focus:ring-green-500",
        emerald: "bg-emerald-500 hover:bg-emerald-600 focus:ring-emerald-500",
        teal: "bg-teal-500 hover:bg-teal-600 focus:ring-teal-500",
        cyan: "bg-cyan-500 hover:bg-cyan-600 focus:ring-cyan-500",
        sky: "bg-sky-500 hover:bg-sky-600 focus:ring-sky-500",
        blue: "bg-blue-500 hover:bg-blue-600 focus:ring-blue-500",
        indigo: "bg-indigo-500 hover:bg-indigo-600 focus:ring-indigo-500",
        violet: "bg-violet-500 hover:bg-violet-600 focus:ring-violet-500",
        purple: "bg-purple-500 hover:bg-purple-600 focus:ring-purple-500",
        fuchsia: "bg-fuchsia-500 hover:bg-fuchsia-600 focus:ring-fuchsia-500",
        pink: "bg-pink-500 hover:bg-pink-600 focus:ring-pink-500",
        rose: "bg-rose-500 hover:bg-rose-600 focus:ring-rose-500",
      },
      secondary: {
        slate:
          "!text-slate-600 bg-slate-100 hover:bg-slate-200 focus:ring-slate-500",
        gray:
          "!text-gray-600 bg-gray-100 hover:bg-gray-200 focus:ring-gray-500",
        red: "!text-red-600 bg-red-100 hover:bg-red-200 focus:ring-red-500",
        orange:
          "!text-orange-600 bg-orange-100 hover:bg-orange-200 focus:ring-orange-500",
        amber:
          "!text-amber-600 bg-amber-100 hover:bg-amber-200 focus:ring-amber-500",
        yellow:
          "!text-yellow-600 bg-yellow-100 hover:bg-yellow-200 focus:ring-yellow-500",
        lime:
          "!text-lime-600 bg-lime-100 hover:bg-lime-200 focus:ring-lime-500",
        green:
          "!text-green-600 bg-green-100 hover:bg-green-200 focus:ring-green-500",
        emerald:
          "!text-emerald-600 bg-emerald-100 hover:bg-emerald-200 focus:ring-emerald-500",
        teal:
          "!text-teal-600 bg-teal-100 hover:bg-teal-200 focus:ring-teal-500",
        cyan:
          "!text-cyan-600 bg-cyan-100 hover:bg-cyan-200 focus:ring-cyan-500",
        sky: "!text-sky-600 bg-sky-100 hover:bg-sky-200 focus:ring-sky-500",
        blue:
          "!text-blue-600 bg-blue-100 hover:bg-blue-200 focus:ring-blue-500",
        indigo:
          "!text-indigo-600 bg-indigo-100 hover:bg-indigo-200 focus:ring-indigo-500",
        violet:
          "!text-violet-600 bg-violet-100 hover:bg-violet-200 focus:ring-violet-500",
        purple:
          "!text-purple-600 bg-purple-100 hover:bg-purple-200 focus:ring-purple-500",
        fuchsia:
          "!text-fuchsia-600 bg-fuchsia-100 hover:bg-fuchsia-200 focus:ring-fuchsia-500",
        pink:
          "!text-pink-600 bg-pink-100 hover:bg-pink-200 focus:ring-pink-500",
        rose:
          "!text-rose-600 bg-rose-100 hover:bg-rose-200 focus:ring-rose-500",
      },
      outline: {
        slate:
          "!text-gray-700 !border-gray-300 bg-white hover:bg-gray-50 focus:ring-slate-500",
        gray:
          "!text-gray-700 !border-gray-300 bg-white hover:bg-gray-50 focus:ring-gray-500",
        red:
          "!text-gray-700 !border-gray-300 bg-white hover:bg-gray-50 focus:ring-red-500",
        orange:
          "!text-gray-700 !border-gray-300 bg-white hover:bg-gray-50 focus:ring-orange-500",
        amber:
          "!text-gray-700 !border-gray-300 bg-white hover:bg-gray-50 focus:ring-amber-500",
        yellow:
          "!text-gray-700 !border-gray-300 bg-white hover:bg-gray-50 focus:ring-yellow-500",
        lime:
          "!text-gray-700 !border-gray-300 bg-white hover:bg-gray-50 focus:ring-lime-500",
        green:
          "!text-gray-700 !border-gray-300 bg-white hover:bg-gray-50 focus:ring-green-500",
        emerald:
          "!text-gray-700 !border-gray-300 bg-white hover:bg-gray-50 focus:ring-emerald-500",
        teal:
          "!text-gray-700 !border-gray-300 bg-white hover:bg-gray-50 focus:ring-teal-500",
        cyan:
          "!text-gray-700 !border-gray-300 bg-white hover:bg-gray-50 focus:ring-cyan-500",
        sky:
          "!text-gray-700 !border-gray-300 bg-white hover:bg-gray-50 focus:ring-sky-500",
        blue:
          "!text-gray-700 !border-gray-300 bg-white hover:bg-gray-50 focus:ring-blue-500",
        indigo:
          "!text-gray-700 !border-gray-300 bg-white hover:bg-gray-50 focus:ring-indigo-500",
        violet:
          "!text-gray-700 !border-gray-300 bg-white hover:bg-gray-50 focus:ring-violet-500",
        purple:
          "!text-gray-700 !border-gray-300 bg-white hover:bg-gray-50 focus:ring-purple-500",
        fuchsia:
          "!text-gray-700 !border-gray-300 bg-white hover:bg-gray-50 focus:ring-fuchsia-500",
        pink:
          "!text-gray-700 !border-gray-300 bg-white hover:bg-gray-50 focus:ring-pink-500",
        rose:
          "!text-gray-700 !border-gray-300 bg-white hover:bg-gray-50 focus:ring-rose-500",
      },
    };

    const sizes = {
      sm: "text-sm px-2.5 py-1.5",
      md: "px-3 py-2 text-sm font-medium leading-4",
      lg: "px-4 py-2.5 text-base font-medium",
      xl: "px-5 py-2.5 text-md font-medium",
      "2xl": "px-6 py-3 text-md font-medium",
    };

    return (
      <button
        ref={ref}
        className={classNames(
          "inline-flex justify-center items-center rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2",
          "transition-all duration-150 ease-in-out",
          "text-white",
          full ? "!flex !w-full" : "",
          disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : "",
          loading ? "cursor-not-allowed pointer-events-none" : "",
          sizes[size],
          colors[colorType][color]
        )}
        onClick={handleClick}
        {...rest}
      >
        {loading ? (
          <div className="inline-flex items-center">
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
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
                className="opacity-60"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>

            <p className="opacity-70">{loadingText || "Loading..."}</p>
          </div>
        ) : (
          children
        )}
      </button>
    );
  }
);
