import type { ReactNode } from "react";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";

type ButtonProps = {
  onClick: () => void;
  isLoading?: boolean;
  children?: ReactNode;
  height?: number;
  width?: number | string;
};

export const Button = ({
  children,
  onClick,
  isLoading,
  height = 40,
  width = "90%",
}: ButtonProps) => {
  return (
    <button
      style={{
        width: width,
        height: height,
        padding: "4px 8px",
        border: "none",
        borderRadius: 4,
        background: "#0070f3",
        color: "#fff",
        cursor: "pointer",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={onClick}
    >
      {isLoading ? <LoadingSpinner isLoading={true} /> : children}
    </button>
  );
};
