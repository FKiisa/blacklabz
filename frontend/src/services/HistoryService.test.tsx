import { getHistory } from "./HistoryService";

describe("HistoryService", () => {
  it("Fetch history for ton/usdt", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => [
        {
          pair: "ton/usdt",
          price: 1.78,
          at: "2025-09-15T13:59:26.418Z",
        },
      ],
    }) as jest.Mock;

    const tokenPair = await getHistory("ton", "usdt");
    expect(tokenPair[0].pair).toEqual("ton/usdt");
  });
  it("Handles fetch error", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
    }) as jest.Mock;

    await expect(getHistory("ton", "usdt")).rejects.toThrow(
      "Failed to fetch history"
    );
  });
});
