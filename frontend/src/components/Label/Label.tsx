import type { ReactNode } from "react";
type LabelProps = {
  children?: ReactNode;
};

export const Label = ({ children }: LabelProps) => {
  return <span>{children}</span>;
};
