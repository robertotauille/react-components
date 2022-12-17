import React, { FC } from "react";
import { Switch as HLSwitch } from "@headlessui/react";

import { Theme, ThemeColors } from "../../theme";
import { classNames } from "../../utils/miscellaneous";

export interface SwitchProps {
  enabled?: boolean;
  color?: keyof typeof ThemeColors;
  onChange?: (value: boolean) => void;
}

const colors = {
  background: {
    slate: "bg-slate-600",
    gray: "bg-gray-600",
    red: "bg-red-600",
    orange: "bg-orange-600",
    amber: "bg-amber-600",
    yellow: "bg-yellow-600",
    lime: "bg-lime-600",
    green: "bg-green-600",
    emerald: "bg-emerald-600",
    teal: "bg-teal-600",
    cyan: "bg-cyan-600",
    sky: "bg-sky-600",
    blue: "bg-blue-600",
    indigo: "bg-indigo-600",
    violet: "bg-violet-600",
    purple: "bg-purple-600",
    fuchsia: "bg-fuchsia-600",
    pink: "bg-pink-600",
    rose: "bg-rose-600",
  },
  text: {
    slate: "text-slate-600",
    gray: "text-gray-600",
    red: "text-red-600",
    orange: "text-orange-600",
    amber: "text-amber-600",
    yellow: "text-yellow-600",
    lime: "text-lime-600",
    green: "text-green-600",
    emerald: "text-emerald-600",
    teal: "text-teal-600",
    cyan: "text-cyan-600",
    sky: "text-sky-600",
    blue: "text-blue-600",
    indigo: "text-indigo-600",
    violet: "text-violet-600",
    purple: "text-purple-600",
    fuchsia: "text-fuchsia-600",
    pink: "text-pink-600",
    rose: "text-rose-600",
  },
};

export const Switch: FC<SwitchProps> = ({
  enabled = false,
  color = Theme.config.color,
  onChange,
}) => {
  const handleChange = (value: boolean) => {
    onChange?.(value);
  };

  return (
    <HLSwitch
      checked={enabled}
      onChange={handleChange}
      className={classNames(
        enabled ? colors.background[color] : "bg-gray-200",
        "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      )}
    >
      <span
        className={classNames(
          enabled ? "translate-x-5" : "translate-x-0",
          "pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
        )}
      >
        <span
          className={classNames(
            enabled
              ? "opacity-0 ease-out duration-100"
              : "opacity-100 ease-in duration-200",
            "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
          )}
          aria-hidden="true"
        >
          <svg
            className="h-3 w-3 text-gray-400"
            fill="none"
            viewBox="0 0 12 12"
          >
            <path
              d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span
          className={classNames(
            enabled
              ? "opacity-100 ease-in duration-200"
              : "opacity-0 ease-out duration-100",
            "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
          )}
          aria-hidden="true"
        >
          <svg
            className={classNames("h-3 w-3", colors.text[color])}
            fill="currentColor"
            viewBox="0 0 12 12"
          >
            <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
          </svg>
        </span>
      </span>
    </HLSwitch>
  );
};
