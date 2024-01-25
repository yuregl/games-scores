import { ResponseCreateUserDto, UserDto } from '@src/dto/users/usersDto';

export interface UserServiceInterface {
    create(data: UserDto): Promise<ResponseCreateUserDto>;
}
