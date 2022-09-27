import { Test, TestingModule } from '@nestjs/testing';
import { DbcacheController } from './dbcache.controller';

describe('DbcacheController', () => {
  let controller: DbcacheController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DbcacheController],
    }).compile();

    controller = module.get<DbcacheController>(DbcacheController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
