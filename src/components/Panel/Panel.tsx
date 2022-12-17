import React, { FC } from "react";

import { classNames } from "../../utils/miscellaneous";

export interface PanelProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  actions?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

export const Panel: FC<PanelProps> = ({
  title,
  subtitle,
  actions,
  footer,
  children,
  className = "",
}) => {
  return (
    <div
      className={classNames(
        "flex w-full flex-col divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow",
        className
      )}
    >
      {title && (
        <div
          className={`flex justify-between items-center p-4 bg-gray-50 ${className}`}
        >
          <div>
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              {title}
            </h3>

            {subtitle && (
              <p className="max-w-2xl text-sm text-gray-500">{subtitle}</p>
            )}
          </div>

          {actions && <div className="flex items-center">{actions}</div>}
        </div>
      )}

      <div>{children}</div>

      {footer && <div className="p-4 bg-gray-50">{footer}</div>}
    </div>
  );
};
