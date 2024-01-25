import { ResponseCreateUserDto, UserDto } from '@src/dto/users/usersDto';

export interface UserController {
    createUser(data: UserDto): Promise<ResponseCreateUserDto>;
}
