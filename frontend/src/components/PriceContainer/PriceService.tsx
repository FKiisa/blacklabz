import type { PairResponse } from "../../types/pairResponse";

export async function getTokenPair(token: string, currency: string) {
  const res = await fetch(
    `/prices/${token.toLowerCase()}/${currency.toLowerCase()}`
  );
  if (!res.ok) throw new Error("Failed to fetch pair");

  return res.json() as Promise<PairResponse>;
}
