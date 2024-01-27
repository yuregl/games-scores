import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { User, UserSchema } from './schemas/user.schema';
import { AuthService } from '../auth/services/auth-service.service';
import { CryptoService } from '../crypto/services/crypto.service';
import { JwtService } from '@nestjs/jwt';

@Module({
    imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
    controllers: [UsersController],
    providers: [UsersService, JwtService, AuthService, CryptoService],
    exports: [UsersService],
})
export class UsersModule {}
