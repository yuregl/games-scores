import { Body, Controller, Post, Res, UseGuards } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { UserControllerInterface } from './user.controler.interface';
import { RequestPasswordUpdateDto, RequestUserDto, ResponseUserDto } from '../usersDto/usersDto';
import { Public } from '../../decorators/public-endPoint';
import { LocalAuthGuard } from '../../auth/guard/local-auth-guard';
import { Response } from 'express';
import { JwtAuthGuard } from '../../auth/guard/jwt-auth-guard';

@Controller('users')
export class UsersController implements UserControllerInterface {
    constructor(private userService: UsersService) {}

    @Public()
    @UseGuards(LocalAuthGuard)
    @Post('create')
    async createUser(@Body() data: RequestUserDto): Promise<ResponseUserDto> {
        return await this.userService.create(data);
    }

    @UseGuards(JwtAuthGuard)
    @Post('update-password')
    async updatePasswordById(@Body() data: RequestPasswordUpdateDto, @Res() res: Response): Promise<void> {
        await this.userService.userUpdatePassword(data);
        res.status(204).send('Senha atualizada!');
    }
}
