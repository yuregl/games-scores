import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthService } from './services/auth-service.service';
import { AuthController } from './controllers/auth.controller';
import { User, UserSchema } from '../users/schemas/user.schema';
import { JwtModule } from '@nestjs/jwt';
import { UsersService } from '../users/services/users.service';
import { CryptoService } from '../crypto/services/crypto.service';
import { JwtStrategy } from './services/jwt-stratergy.service';
import { JwtAuthGuard } from './guard/jwt-auth-guard';
import { ConfigService } from '@nestjs/config';
import { LocalStrategy } from './services/local-stratergy.service';
import { PassportModule } from '@nestjs/passport';

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.register({
            global: true,
            secret: process.env.SECRET,
            signOptions: { expiresIn: process.env.EXPIRES },
        }),
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    ],
    controllers: [AuthController],
    providers: [UsersService, AuthService, CryptoService, JwtStrategy, JwtAuthGuard, ConfigService, LocalStrategy],
    exports: [AuthService],
})
export class AuthModule {}
