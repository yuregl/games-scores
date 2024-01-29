import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { UserControllerInterface } from './user.controler.interface';
import { RequestUserDto, ResponseUserDto } from '../usersDto/usersDto';
import { Public } from '../../decorators/public-endPoint';
import { LocalAuthGuard } from '../../auth/guard/local-auth-guard';

@Controller('users')
export class UsersController implements UserControllerInterface {
    constructor(private userService: UsersService) {}

    @Public()
    @UseGuards(LocalAuthGuard)
    @Post()
    async createUser(@Body() data: RequestUserDto): Promise<ResponseUserDto> {
        return await this.userService.create(data);
    }
}
