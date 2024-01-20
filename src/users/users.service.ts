import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '@prisma/client';
import { AuthService } from '@src/auth-service/auth-service.service';
import { PrismaService } from '@src/database/database.service';
import { ResponseCreateUserDto, UserDto } from '@src/dto/users/usersDto';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService, private authService: AuthService){}
    async create(data: UserDto) : Promise<ResponseCreateUserDto> {

        const userExist = await this.prisma.user.findFirst({
            where: {
                email: data.email
            }
        });

        if(!userExist){
            throw new NotFoundException("Usuário não encontrado!")
        }

        data.password = await this.authService.hashPassword(data.password);
        const saved = await this.prisma.user.create({data});
        let response: ResponseCreateUserDto;

        response.email = saved.email;
        response.id = saved.id;
        response.name = saved.name;

        return response
    }
}
