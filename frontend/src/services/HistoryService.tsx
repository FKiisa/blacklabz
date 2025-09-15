import type { PriceHistory } from "../types/history";

export async function getHistory(token: string, currency: string, limit = 5) {
  const res = await fetch(
    `/prices/history/${token.toLowerCase()}/${currency.toLowerCase()}?limit=${limit}`
  );
  if (!res.ok) throw new Error("Failed to fetch history");
  return res.json() as Promise<PriceHistory[]>;
}
