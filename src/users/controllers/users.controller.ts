import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { ResponseCreateUserDto, UserDto } from '@src/dto/users/usersDto';
import { UserControllerInterface } from './user.controler.interface';

@Controller('users')
export class UsersController implements UserControllerInterface {
    constructor(private userService: UsersService) {}

    @Post()
    async createUser(@Body() data: UserDto): Promise<ResponseCreateUserDto> {
        return await this.userService.create(data);
    }
}
