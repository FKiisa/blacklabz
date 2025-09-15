import { useEffect, useState } from "react";
import type { PriceHistory } from "../../types/history";
import { HistoryTable } from "./HistoryTable/HistoryTable";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";
import { getHistory } from "../../services/HistoryService";

type HistoryContainerProps = {
  token: string;
  currency: string;
};

export const HistoryContainer = ({ token, currency }: HistoryContainerProps) => {
  const [isHistoryLoading, setIsHistoryLoading] = useState<boolean>(false);
  const [history, setHistory] = useState<PriceHistory[]>([]);
  const loadHistory = async () => {
    setIsHistoryLoading(true);
    const data = await getHistory(token, currency);
    setHistory(data);
    setIsHistoryLoading(false);
  };

  useEffect(() => {
    loadHistory();
  }, []);

  useEffect(() => {
    loadHistory();
  }, [token, currency]);

  return (
    <>
      {isHistoryLoading ? (
        <div
          style={{ display: "flex", justifyContent: "center", padding: "20px" }}
        >
          <LoadingSpinner isLoading={true} />
        </div>
      ) : (
        <div
          style={{
            marginTop: "20px",
            marginBottom: "10px",
            width: "100%",
          }}
        >
          {history && history.length > 0 && <HistoryTable items={history} />}
        </div>
      )}
    </>
  );
};
