import { Response } from 'express';
import { RequestPasswordUpdateDto, RequestUserDto, ResponseUserDto } from '../usersDto/usersDto';

export interface UserControllerInterface {
    createUser(data: RequestUserDto): Promise<ResponseUserDto>;
    updatePasswordById(data: RequestPasswordUpdateDto, res: Response): Promise<void>;
}
