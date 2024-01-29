import { Body, Controller, Post } from '@nestjs/common';
import { AuthControllerInterface } from './auth.controller.interface';
import { RequestSingInDto } from '../authDto/signInDto';
import { TokenDto } from '../authDto/tokenDto';
import { AuthService } from '../services/auth-service.service';

@Controller('auth')
export class AuthController implements AuthControllerInterface {
    constructor(private authService: AuthService) {}

    @Post('login')
    async singIn(@Body() data: RequestSingInDto): Promise<TokenDto> {
        const { email, password } = data;
        return await this.authService.singIn(email, password);
    }
}
