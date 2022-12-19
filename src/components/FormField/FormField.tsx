import React, { FC, ReactNode } from "react";

import { classNames } from "../../utils/miscellaneous";

export interface FormFieldProps {
  name?: string;
  label?: string;
  description?: string;
  borderLess?: boolean;
  children: ReactNode;
}

export const FormField: FC<FormFieldProps> = ({
  name,
  label,
  description,
  borderLess = false,
  children,
}) => {
  return (
    <div
      className={classNames(
        "flex flex-col gap-2 p-4 sm:flex-row",
        borderLess ? "" : "border-t"
      )}
    >
      <label
        htmlFor={name}
        className={classNames(
          "block text-sm font-medium text-gray-700",
          "sm:flex sm:flex-col sm:flex-1"
        )}
      >
        {label}

        {description && (
          <p className="text-xs font-normal text-gray-400">{description}</p>
        )}
      </label>

      <div className="sm:flex sm:flex-1 sm:flex-col sm:justify-center">
        <div>{children}</div>
      </div>
    </div>
  );
};
