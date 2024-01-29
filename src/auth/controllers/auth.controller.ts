import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthControllerInterface } from './auth.controller.interface';
import { RequestSingInDto } from '../authDto/signInDto';
import { TokenDto } from '../authDto/tokenDto';
import { AuthService } from '../services/auth-service.service';
import { LocalAuthGuard } from '../guard/local-auth-guard';
import { Public } from '../../decorators/public-endPoint';

@Controller('auth')
export class AuthController implements AuthControllerInterface {
    constructor(private authService: AuthService) {}

    @Public()
    @UseGuards(LocalAuthGuard)
    @Post('login')
    async singIn(@Body() data: RequestSingInDto): Promise<TokenDto> {
        const { email, password } = data;
        return await this.authService.singIn(email, password);
    }
}
