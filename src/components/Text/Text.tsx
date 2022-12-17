import React, {
  FC,
  Ref,
  HTMLAttributes,
  ReactNode,
  CSSProperties,
  forwardRef,
} from "react";

export interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  ref?: Ref<HTMLSpanElement>;
}

export const Text: FC<TextProps> = forwardRef<HTMLSpanElement, TextProps>(
  ({ children, className, style }, ref) => {
    return (
      <span ref={ref} className={className} style={style}>
        {children}
      </span>
    );
  }
);
