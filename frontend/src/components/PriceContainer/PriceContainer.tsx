import { useEffect, useState } from "react";
import { Label } from "../Label/Label";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";
import { TokenPair } from "../TokenPair/TokenPair";
import { Button } from "../Button/Button";
import { getTokenPair } from "../../services/PriceService";

export type PriceContainerProps = {
  token: string;
  currency: string;
};

export const PriceContainer = ({ token, currency }: PriceContainerProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [price, setPrice] = useState<number>(0);
  const [at, setAt] = useState<string>("");
  const updateDate = new Date(at).toLocaleString();

  const loadPair = async () => {
    setIsLoading(true);
    const data = await getTokenPair(token, currency);
    setPrice(data.price);
    setAt(data.at);
    setIsLoading(false);
  };

  useEffect(() => {
    loadPair();
  }, [token, currency]);

  return (
    <div
      style={{
        margin: 16,
        padding: 16,
        gap: 8,
        border: "1px solid #eee",
        borderRadius: 8,
        width: "100%",
        textAlign: "center",
        display: "flex",
        height: 100,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LoadingSpinner isLoading={isLoading} />
      {!isLoading && price !== 0 && (
        <>
          <div style={{ fontSize: 28 }}>
            <TokenPair pair={token} value={price} currency={currency} />
          </div>
          <div style={{ opacity: 0.7 }}>
            <Label>Last updated: {updateDate ?? "N/A"}</Label>
          </div>

          <Button isLoading={false} onClick={loadPair}>
            <Label>Refresh</Label>
          </Button>
        </>
      )}
    </div>
  );
};
