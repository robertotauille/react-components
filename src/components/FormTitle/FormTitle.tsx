import { Box } from "../Box/Box";

import { classNames } from "~/utils/miscellaneous";

export interface FormTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export const FormTitle = ({ title, subtitle, className }: FormTitleProps) => {
  return (
    <Box
      className={classNames(
        "p-4 bg-gray-50 border-t sm:border-gray-200",
        className ? className : ""
      )}
    >
      <h3 className="text-lg font-medium leading-6 text-gray-900">{title}</h3>

      {subtitle && (
        <p className="mt-1 max-w-2xl text-sm text-gray-500">{subtitle}</p>
      )}
    </Box>
  );
};
