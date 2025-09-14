import { useState } from "react";
import { TokenCurrencySelector } from "./components/TokenCurrencySelector/TokenCurrencySelector";
import { HistoryContainer } from "./components/HistoryContainer/HistoryContainer";
import { supportedTokens } from "./types/tokens";
import { supportedCurrencies } from "./types/currencies";
import { PriceContainer } from "./components/PriceContainer/PriceContainer";

export default function App() {
  const [token, setToken] = useState<string>(supportedTokens[0]);
  const [currency, setCurrency] = useState<string>(supportedCurrencies[0]);
  return (
    <div
      style={{
        width: 600,
        maxWidth: "100%",
        margin: "32px",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <TokenCurrencySelector
        token={token}
        setToken={setToken}
        currency={currency}
        setCurrency={setCurrency}
      />
      <PriceContainer token={token} currency={currency} />
      <HistoryContainer token={token} currency={currency} />
    </div>
  );
}
