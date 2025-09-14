export const supportedTokens = ["TON", "BTC", "ETH", "USDT", "SOL", "ADA", "DOGE", "LTC", "XRP"];
export type SupportedToken = (typeof supportedTokens)[number];

export function isSupportedToken(token: string): token is SupportedToken {
  return supportedTokens.includes(token.toUpperCase());
}