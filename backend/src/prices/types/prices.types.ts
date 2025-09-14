export type ApiResponse = {
  [token: string]: {
    [currency: string]: number;
  };
};

export type PriceResult = {
  pair: string;
  price: number;
  at: string;
  cached: boolean;
};

export type PriceRow = {
  id: number;
  token: string;
  currency: string;
  pair: string;
  price: number;
  at: string;
};
