type LoadingSpinnerProps = {
  isLoading: boolean;
};

export const LoadingSpinner = ({ isLoading }: LoadingSpinnerProps) => {
  if (!isLoading) return;
  return (
    <span
      style={{
        height: "50%",
        width: "auto",
        aspectRatio: "1 / 1",
        border: "4px solid #ccc",
        borderTop: "4px solid #1d1d1d",
        borderRadius: "50%",
        display: "inline-block",
        animation: "spin 1s linear infinite",
      }}
    />
  );
};
