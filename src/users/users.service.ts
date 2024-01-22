import { Injectable, NotFoundException } from '@nestjs/common';
import { AuthService } from '../auth-service/auth-service.service';
import { PrismaService } from '../database/database.service';
import { ResponseCreateUserDto, UserDto } from '../dto/users/usersDto';

@Injectable()
export class UsersService {
    constructor(
        private prisma: PrismaService,
        private authService: AuthService,
    ) {}
    async create(data: UserDto): Promise<ResponseCreateUserDto> {
        const userExist = await this.prisma.user.findFirst({
            where: {
                email: data.email,
            },
        });

        if (userExist) {
            throw new NotFoundException('Usuário já criado com esse email!');
        }

        data.password = await this.authService.hashPassword(data.password);
        const saved = await this.prisma.user.create({ data });
        const response = <ResponseCreateUserDto>{
            email: saved.email,
            id: saved.id,
            name: saved.name,
        };
        return response;
    }
}
