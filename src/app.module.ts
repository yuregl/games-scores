import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import configuration from './config/config';
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [configuration],
        }),
        DatabaseModule,
        UsersModule,
        AuthModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
