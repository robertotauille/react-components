import React, { FC, ReactNode } from "react";

export interface FormFieldProps {
  name?: string;
  label?: string;
  description?: string;
  children: ReactNode;
}

export const FormField: FC<FormFieldProps> = ({
  name,
  label,
  description,
  children,
}) => {
  return (
    <div className="p-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}

        {description && (
          <p className="mt-1 text-xs font-normal text-gray-400">
            {description}
          </p>
        )}
      </label>

      <div className="h-full mt-1 sm:col-span-2 sm:mt-0">{children}</div>
    </div>
  );
};
