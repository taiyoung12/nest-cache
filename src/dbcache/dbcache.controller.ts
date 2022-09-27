import { Controller, Param, Post } from '@nestjs/common';
import { DbcacheService } from './dbcache.service';

@Controller('dbcache')
export class DbcacheController {
    constructor(private dbcacheService: DbcacheService) { }

    @Post('/:to_email')
    async redis_test(@Param("to_email") to_email: string): Promise<number> {
        console.log(to_email)
        return this.dbcacheService.redis_test(to_email)
    }
}

