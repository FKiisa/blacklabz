type LoadingSpinnerProps = {
  isLoading: boolean;
};

export const LoadingSpinner = ({ isLoading }: LoadingSpinnerProps) => {
  return (
    <>
      {isLoading ? (
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
      ) : null}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
};
