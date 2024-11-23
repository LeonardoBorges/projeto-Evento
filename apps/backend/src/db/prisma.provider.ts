import { Global, Injectable, OnModuleDestroy, OnModuleInit,   } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Global()
@Injectable()
export class PrismaProvider extends PrismaClient 
implements OnModuleDestroy, OnModuleInit{
    onModuleDestroy() 
    {
        this.$connect;
    }

    onModuleInit() {
        this.$disconnect;
    }
}