import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthService } from './auth-service/auth-service.service';
import { ConfigModule } from '@nestjs/config';
import { Database } from './database/database.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: '.env',
        }),
        Database,
        UsersModule,
    ],
    controllers: [],
    providers: [AuthService],
})
export class AppModule {}
