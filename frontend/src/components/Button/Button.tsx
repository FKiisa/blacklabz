import type { ReactNode } from "react";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";

type ButtonProps = {
  onClick: () => void;
  isLoading?: boolean;
  children?: ReactNode;
  withBackground?: boolean;
};

export const Button = ({ children, onClick, isLoading, withBackground = true }: ButtonProps) => {
  return (
    <button
      style={{
        width: "90%",
        height: 40,
        padding: "4px 8px",
        border: "none",
        borderRadius: 4,
        background: withBackground ? "#0070f3" : "transparent",
        color: withBackground ? "#fff" : "#000",
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
