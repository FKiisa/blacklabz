import { Module } from '@nestjs/common';
import { PricesModule } from './prices/prices.module';
import { CacheModule } from '@nestjs/cache-manager';
import { DbModule } from './db/db.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    CacheModule.register({ isGlobal: true }),
    ConfigModule.forRoot({ isGlobal: true }),
    PricesModule,
    DbModule,
  ],
})
export class AppModule {}
