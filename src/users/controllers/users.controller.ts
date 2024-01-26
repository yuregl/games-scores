import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { UserControllerInterface } from './user.controler.interface';
import { RequestUserDto, ResponseUserDto } from '../usersDto/usersDto';

@Controller('users')
export class UsersController implements UserControllerInterface {
    constructor(private userService: UsersService) {}

    @Post()
    async createUser(@Body() data: RequestUserDto): Promise<ResponseUserDto> {
        return await this.userService.create(data);
    }
}
