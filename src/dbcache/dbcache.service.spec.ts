import { Test, TestingModule } from '@nestjs/testing';
import { DbcacheService } from './dbcache.service';

describe('DbcacheService', () => {
  let service: DbcacheService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DbcacheService],
    }).compile();

    service = module.get<DbcacheService>(DbcacheService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
