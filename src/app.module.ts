import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbcacheModule } from './dbcache/dbcache.module';

@Module({
  imports: [DbcacheModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
