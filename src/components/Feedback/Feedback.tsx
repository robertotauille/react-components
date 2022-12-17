import React, { FC, CSSProperties } from "react";

import {
  InformationCircleIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  XCircleIcon,
} from "@heroicons/react/20/solid";

import { classNames } from "../../utils/miscellaneous";

export interface FeedbackProps {
  type: "error" | "success" | "warning" | "info";
  message?: string | null;
  className?: string;
  style?: CSSProperties;
}

const types = {
  error: {
    icon: <XCircleIcon className="h-6 w-6 text-red-400" />,
    colors: ["bg-red-50", "text-red-400", "text-red-800", "border-red-300"],
  },
  success: {
    icon: <CheckCircleIcon className="h-6 w-6 text-green-400" />,
    colors: [
      "bg-green-50",
      "text-green-400",
      "text-green-800",
      "border-green-300",
    ],
  },
  warning: {
    icon: <ExclamationCircleIcon className="h-6 w-6 text-yellow-400" />,
    colors: [
      "bg-yellow-50",
      "text-yellow-400",
      "text-yellow-800",
      "border-yellow-300",
    ],
  },
  info: {
    icon: <InformationCircleIcon className="h-6 w-6 text-blue-400" />,
    colors: ["bg-blue-50", "text-blue-400", "text-blue-800", "border-blue-300"],
  },
};

export const Feedback: FC<FeedbackProps> = ({
  type,
  message,
  className = "",
  style,
}) => {
  return (
    <div
      className={classNames(
        "p-4 rounded-md border border-1 mb-4",
        types[type].colors[0],
        types[type].colors[3],
        className
      )}
      style={style}
    >
      <div className="flex">
        <div className="flex-shrink-0">{types[type].icon}</div>

        <div className="ml-3">
          <h3
            className={classNames("text-md font-medium", types[type].colors[2])}
          >
            {message || "Ops..."}
          </h3>
        </div>
      </div>
    </div>
  );
};
