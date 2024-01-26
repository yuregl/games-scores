import { RequestUserDto, ResponseUserDto } from '../usersDto/usersDto';

export interface UserControllerInterface {
    createUser(data: RequestUserDto): Promise<ResponseUserDto>;
}
