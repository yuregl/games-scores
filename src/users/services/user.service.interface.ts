import { RequestUserDto, ResponseUserDto } from '../usersDto/usersDto';

export interface UserServiceInterface {
    create(data: RequestUserDto): Promise<ResponseUserDto>;
}
