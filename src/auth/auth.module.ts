import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthService } from './services/auth-service.service';
import { AuthController } from './controllers/auth.controller';
import { User, UserSchema } from '../users/schemas/user.schema';
import { JwtModule } from '@nestjs/jwt';
import { UsersService } from '../users/services/users.service';
import { CryptoService } from '../crypto/services/crypto.service';

@Module({
    imports: [
        JwtModule.register({
            global: true,
            secret: process.env.SECRET,
            signOptions: { expiresIn: process.env.EXPIRES },
        }),
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    ],
    controllers: [AuthController],
    providers: [UsersService, AuthService, CryptoService],
    exports: [AuthService],
})
export class AuthModule {}
