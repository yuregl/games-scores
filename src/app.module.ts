import { Module } from '@nestjs/common';
import { UsersModule } from '@src/users/users.module';
import { AuthService } from '@src/auth-service/auth-service.service';
import { PrismaService } from '@src/database/database.service';

@Module({
  imports: [UsersModule],
  controllers: [],
  providers: [AuthService, PrismaService],
})
export class AppModule {}
