import { Inject, Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { Pool } from 'pg';
import { PG } from './db.module';

@Injectable()
export class DbInitService implements OnModuleInit {
  private readonly logger = new Logger(DbInitService.name);

  constructor(@Inject(PG) private readonly pool: Pool) {}

  async onModuleInit(): Promise<void> {
    const ddl = `
      CREATE TABLE IF NOT EXISTS prices (
        id SERIAL PRIMARY KEY,
        token TEXT NOT NULL,
        currency TEXT NOT NULL,
        pair TEXT NOT NULL,
        price NUMERIC NOT NULL,
        at TIMESTAMPTZ NOT NULL DEFAULT now()
      );
      CREATE INDEX IF NOT EXISTS idx_prices_pair_time
        ON prices (token, currency, at DESC);
    `;
    try {
      await this.pool.query(ddl);
      this.logger.log('PG prices table ready');
    } catch (err: unknown) {
      this.logger.error(
        'PG failed to init DB',
        err instanceof Error ? err.stack : String(err),
      );
    }
  }
}
