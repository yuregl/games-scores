import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthService } from './auth-service/auth-service.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import configuration from './config/config';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [configuration],
        }),
        DatabaseModule,
        UsersModule,
    ],
    controllers: [],
    providers: [AuthService],
})
export class AppModule {}
