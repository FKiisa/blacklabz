import { Module } from '@nestjs/common';
import { Pool } from 'pg';

export const PG = 'PG_POOL';

import { DbInitService } from './db-init.service';

@Module({
  providers: [
    {
      provide: PG,
      useFactory: (): Pool => {
        const url = process.env.DATABASE_URL;
        if (!url) throw new Error('DATABASE_URL not set');
        return new Pool({ connectionString: url });
      },
    },
    DbInitService,
  ],
  exports: [PG],
})
export class DbModule {}
