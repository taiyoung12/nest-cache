import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/common';
import * as redisStore from 'cache-manager-ioredis'
import { DbcacheService } from './dbcache.service';
import { DbcacheController } from './dbcache.controller';

@Module({
  imports: [
    CacheModule.register({
      store: redisStore,
      host: '192.168.0.214',
      port: 6379,
    })],
  providers: [DbcacheService],
  controllers: [DbcacheController]
})
export class DbcacheModule { }
