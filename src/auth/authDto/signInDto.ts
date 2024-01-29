import { IsEmail, IsString, Matches, MinLength } from 'class-validator';

export class RequestSingInDto {
    @IsString()
    @IsEmail()
    email: string;

    @MinLength(8, { message: 'A senha deve ter no mínimo 8 caracteres' })
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, {
        message:
            'A senha deve conter pelo menos um caractere maiúsculo, um caractere minúsculo, um caractere especial e um dígito',
    })
    password: string;
}
