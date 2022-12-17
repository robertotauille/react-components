import React, { FC, CSSProperties } from "react";

import { classNames } from "../../utils/miscellaneous";

export interface DividerProps {
  label?: string;
  className?: string;
  style?: CSSProperties;
}

export const Divider: FC<DividerProps> = ({ label, className = "", style }) => {
  return (
    <div className={classNames("relative my-4 mx-1", className)} style={style}>
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300" />
      </div>

      {label && (
        <div className="relative flex justify-center">
          <span className="bg-white px-2 text-sm text-gray-500">{label}</span>
        </div>
      )}
    </div>
  );
};
