import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { ResponseCreateUserDto, UserDto } from '@src/dto/users/usersDto';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService){}

    @Post()
    async createUser(@Body() data: UserDto): Promise<ResponseCreateUserDto> {
        return await this.userService.create(data)
    }
}
