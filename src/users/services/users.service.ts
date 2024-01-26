import { Injectable, NotFoundException } from '@nestjs/common';
import { AuthService } from '../../auth-service/auth-service.service';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../schemas/user.schema';
import { UserServiceInterface } from './user.service.interface';
import { RequestUserDto, ResponseUserDto } from '../usersDto/usersDto';

@Injectable()
export class UsersService implements UserServiceInterface {
    constructor(
        @InjectModel(User.name) private userModel: Model<User>,
        private authService: AuthService,
    ) {}
    async create(data: RequestUserDto): Promise<ResponseUserDto> {
        const { email, name, password } = data;

        const userExist = await this.userModel.findOne<UserDocument>({ email }).exec();

        if (userExist) {
            throw new NotFoundException('Usuário já criado com esse email!');
        }

        data.password = await this.authService.hashPassword(data.password);

        const createdUser = await this.userModel.create<UserDocument>({
            email,
            name,
            password,
        });

        createdUser.save();

        const response = <ResponseUserDto>{
            email: createdUser.email,
            id: createdUser.id,
            name: createdUser.name,
        };
        return response;
    }
}
