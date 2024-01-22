import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { PrismaService } from '../database/database.service';
import { AuthService } from '../auth-service/auth-service.service';

@Module({
    controllers: [UsersController],
    providers: [UsersService, PrismaService, AuthService],
})
export class UsersModule {}
