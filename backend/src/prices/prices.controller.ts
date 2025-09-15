import {
  BadRequestException,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { PricesService } from './prices.service';

@Controller('prices')
export class PricesController {
  constructor(private readonly pricesService: PricesService) {}

  // GET /prices/:token/:currency
  @Get(':token/:currency')
  findPair(@Param('token') token: string, @Param('currency') currency: string) {
    return this.pricesService.getPrice(token, currency);
  }

  // GET /prices/history/:token/:currency?limit=50
  @Get('history/:token/:currency')
  async history(
    @Param('token') token: string,
    @Param('currency') currency: string,
    @Query('limit', new DefaultValuePipe(50), ParseIntPipe) limit: number,
  ) {
    if (!token || !currency) {
      throw new BadRequestException(
        'Query params "token" and "currency" are required',
      );
    }
    const safeLimit = Math.min(Math.max(limit, 1), 50);
    return this.pricesService.getHistory(token, currency, safeLimit);
  }
}
