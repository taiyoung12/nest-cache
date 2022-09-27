import { Injectable } from '@nestjs/common';
import { CACHE_MANAGER, Inject } from '@nestjs/common';
import { Cache } from 'cache-manager';

class test_redis {
    random_number: number;
    static_number1: number;
    static_number2: number;
}

@Injectable()
export class DbcacheService {
    constructor(
        @Inject(CACHE_MANAGER) private cacheManager: Cache,
    ) { }

    public async redis_test(to_email: string): Promise<number> {
        const random_number: number = Math.random() * 101;
        console.log(random_number)

        const test_reds_: test_redis = {
            random_number: random_number,
            static_number1: 2,
            static_number2: 3,
        }

        const value = await this.cacheManager.set(`${to_email}`, test_reds_, {
            ttl: 60,
        });
        const return_value = await this.cacheManager.get(`${to_email}`)

        console.log('value: ', value)
        console.log('return_value: ', return_value)

        return 20
    }
}
