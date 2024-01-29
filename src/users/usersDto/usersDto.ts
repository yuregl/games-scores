import { IsEmail, IsString, Length, Matches, MinLength } from 'class-validator';

export class RequestUserDto {
    @IsString()
    @IsEmail()
    email: string;

    @IsString()
    @Length(3, 80)
    name: string;

    @MinLength(8, { message: 'A senha deve ter no mínimo 8 caracteres' })
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, {
        message:
            'A senha deve conter pelo menos um caractere maiúsculo, um caractere minúsculo, um caractere especial e um dígito',
    })
    password: string;
}

export type ResponseUserDto = {
    id: string;
    email: string;
    name: string;
};

export type ResponseUserWithPasswordDto = {
    id: string;
    email: string;
    name: string;
    password: string;
};
