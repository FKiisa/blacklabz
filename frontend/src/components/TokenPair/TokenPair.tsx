import { Label } from "../Label/Label";

type TokenPairProps = {
  pair: string;
  value: number;
  currency: string;
};

export const TokenPair = ({ pair, value, currency }: TokenPairProps) => {
  return (
    <div>
      <Label>1 {pair} = </Label>
      <Label>
        {value} {currency.toUpperCase()}
      </Label>
    </div>
  );
};
