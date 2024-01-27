import { RequestUserDto, ResponseUserDto, ResponseUserWithPasswordDto } from '../usersDto/usersDto';

export interface UserServiceInterface {
    create(data: RequestUserDto): Promise<ResponseUserDto>;
    getUserByEmail(email: string): Promise<ResponseUserWithPasswordDto>;
}
