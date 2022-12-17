import React, { FC, Ref, HTMLAttributes, ReactNode, forwardRef } from "react";

export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
  ref?: Ref<HTMLDivElement>;
}

export const Box: FC<BoxProps> = forwardRef<HTMLDivElement, BoxProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <div ref={ref} className={className} {...rest}>
        {children}
      </div>
    );
  }
);
