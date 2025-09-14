import { supportedTokens } from "../../types/tokens";
import { supportedCurrencies } from "../../types/currencies";

type TokenCurrencySelectorProps = {
  token: string;
  currency: string;
  setToken: (token: string) => void;
  setCurrency: (currency: string) => void;
};

export const TokenCurrencySelector = ({
  token,
  setToken,
  currency,
  setCurrency,
}: TokenCurrencySelectorProps) => {
  const SelectDropDown = (
    value: string,
    data: string[],
    setValue: (value: string) => void
  ) => {
    return (
      <div
        style={{
          padding: 16,
          display: "flex",
          gap: 8,
          border: "1px solid #eee",
          borderRadius: 8,
          width: "100%",
          margin: 16
        }}
      >
        <select
          style={{
            padding: 8,
            borderRadius: 4,
            border: "1px solid #eee",
            justifyContent: "center",
            width: "100%",
          }}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        >
          {data.map((item) => (
            <option key={item} value={item}>
              {item.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    );
  };
  return (
    <>
      {SelectDropDown(token, supportedTokens, setToken)}
      {SelectDropDown(currency, supportedCurrencies, setCurrency)}
    </>
  );
};
