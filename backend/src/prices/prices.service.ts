import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import type { Cache } from 'cache-manager';
import axios from 'axios';
import { ApiResponse, PriceResult, PriceRow } from './types/prices.types';
import { isSupportedCurrency } from './types/currencies';
import { toTokenId } from './types/tokenMap';
import { Pool } from 'pg';
import { PG } from 'src/db/db.module';

@Injectable()
export class PricesService {
  constructor(
    @Inject(CACHE_MANAGER) private readonly cache: Cache,
    @Inject(PG) private readonly pg: Pool,
  ) {}

  async getPrice(token: string, currency: string): Promise<PriceResult> {
    const tokenId = toTokenId(token);
    const currencyId = currency.toLowerCase();

    if (!isSupportedCurrency(currencyId)) {
      throw new BadRequestException(`Unsupported currency: ${currency}`);
    }

    const key = `price:${tokenId}:${currencyId}`;

    const cached = await this.cache.get<Omit<PriceResult, 'cached'>>(key);
    if (cached) {
      return { ...cached, cached: true };
    }

    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${tokenId}&vs_currencies=${currencyId}`;
    const res = await axios.get<ApiResponse>(url);

    const price = res.data[tokenId]?.[currencyId];
    if (typeof price !== 'number') {
      throw new BadRequestException(`No pair found for ${token}/${currency}`);
    }

    const result = {
      pair: `${token.toUpperCase()}/${currency.toUpperCase()}`,
      price,
      at: new Date().toISOString(),
    };

    await this.cache.set(key, result, 60 * 1000); // cache for 1 minute
    const tokenPair = `${tokenId}/${currencyId}`;
    void this.pg
      .query(
        `INSERT INTO prices (token, currency, pair, price, at)
       VALUES ($1, $2, $3, $4, $5)`,
        [tokenId, currencyId, tokenPair, result.price, result.at],
      )
      .catch((err) => console.error('DB insert failed:', err));
    return { ...result, cached: false };
  }

  async getHistory(token: string, currency: string, limit: number) {
    const tokenPair = `${token}/${currency}`;
    const { rows } = await this.pg.query<PriceRow>(
      `SELECT token, currency, pair, price, at
         FROM prices
        WHERE pair = $1
        ORDER BY at DESC
        LIMIT $2`,
      [tokenPair, limit],
    );
    return rows.map((r) => ({
      pair: r.pair,
      price: typeof r.price === 'string' ? Number(r.price) : r.price,
      at: r.at,
    }));
  }
}
