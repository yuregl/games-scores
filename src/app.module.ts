import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthService } from './auth-service/auth-service.service';
import { PrismaService } from './database/database.service';

@Module({
    imports: [UsersModule],
    controllers: [],
    providers: [AuthService, PrismaService],
})
export class AppModule {}
