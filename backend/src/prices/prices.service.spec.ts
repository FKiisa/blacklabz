import { Test, TestingModule } from '@nestjs/testing';
import { PricesController } from './prices.controller';
import { PricesService } from './prices.service';
import { BadRequestException } from '@nestjs/common';

describe('PricesController', () => {
  let controller: PricesController;
  let service: jest.Mocked<PricesService>;

  beforeEach(async () => {
    const mockService = {
      getPrice: jest.fn(),
    } as unknown as jest.Mocked<PricesService>;

    const module: TestingModule = await Test.createTestingModule({
      controllers: [PricesController],
      providers: [{ provide: PricesService, useValue: mockService }],
    }).compile();

    controller = module.get<PricesController>(PricesController);
    service = module.get<jest.Mocked<PricesService>>(PricesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('GET /prices/:token/:currency delegates to service and returns result', async () => {
    const fake = {
      pair: 'TON/EUR',
      price: 2.34,
      at: '2025-01-01T00:00:00.000Z',
      cached: false,
    };
    service.getPrice.mockResolvedValue(fake);

    const res = await controller.findPair('ton', 'eur');

    expect(service.getPrice).toHaveBeenCalledWith('ton', 'eur');
    expect(res).toEqual(fake);
  });

  it('GET /prices/:token/:currency handles BadRequestException', async () => {
    service.getPrice.mockRejectedValue(
      new BadRequestException('Invalid currency pair unknown/eur'),
    );
    await expect(controller.findPair('unknown', 'eur')).rejects.toThrow(
      BadRequestException,
    );
    expect(service.getPrice).toHaveBeenCalledWith('unknown', 'eur');
  });
});
