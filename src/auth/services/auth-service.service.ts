import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthServiceInterface } from './auth-service.service.interface';
import { UsersService } from '../../users/services/users.service';
import { TokenDto } from '../authDto/tokenDto';
import { CryptoService } from '../../crypto/services/crypto.service';

@Injectable()
export class AuthService implements AuthServiceInterface {
    constructor(
        private userService: UsersService,
        private jwtService: JwtService,
        private cryptoService: CryptoService,
    ) {}

    async singIn(email: string, password: string): Promise<TokenDto> {
        const user = await this.userService.getUserByEmail(email);

        if (!user) {
            throw new NotFoundException('Usuário não cadastrado!');
        }

        if (!this.cryptoService.comparePassword(password, user.password)) {
            throw new UnauthorizedException('Dados inválidos');
        }

        const payload = { userId: user.id, userName: user.name };

        return {
            accessToken: await this.jwtService.signAsync(payload),
        } as TokenDto;
    }
}
