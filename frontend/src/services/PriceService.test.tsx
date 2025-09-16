import { getTokenPair } from "./PriceService";

describe("PriceService", () => {
  it("Fetch price for TON/EUR", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        token: "TON",
        currency: "EUR",
        price: 1.78,
        at: "2025-09-15T13:59:26.418Z",
      }),
    }) as jest.Mock;

    const tokenData = await getTokenPair("TON", "EUR");
    expect(tokenData.token).toEqual("TON");
    expect(tokenData.currency).toEqual("EUR");
    expect(tokenData.price).toEqual(1.78);
    expect(tokenData.at).toEqual("2025-09-15T13:59:26.418Z");
  });
  it("Handles fetch error", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
    }) as jest.Mock;

    await expect(getTokenPair("TON", "EUR")).rejects.toThrow(
      "Failed to fetch pair"
    );
  });
});
