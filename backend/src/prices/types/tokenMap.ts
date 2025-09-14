export const tokenIdMap: Record<string, string> = {
  ton: 'the-open-network',
  usdt: 'tether',
  btc: 'bitcoin',
  eth: 'ethereum',
  sol: 'solana',
  ada: 'cardano',
  doge: 'dogecoin',
  ltc: 'litecoin',
  xrp: 'ripple',
};

export type SupportedToken = keyof typeof tokenIdMap;

export function toTokenId(token: string): string {
  const t = token.toLowerCase();
  return tokenIdMap[t] ?? t;
}
