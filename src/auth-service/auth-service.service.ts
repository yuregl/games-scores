import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { AuthServiceInterface } from './auth-service.service.interface';
import { AppConfig } from '@src/config/app-config';

@Injectable()
export class AuthService implements AuthServiceInterface {
    async hashPassword(password: string): Promise<string> {
        const salt = AppConfig.get('salt');

        const hashedPassword = await bcrypt.hash(password, salt);
        return hashedPassword;
    }

    async comparePassword(password: string, hashedPassword: string): Promise<boolean> {
        return bcrypt.compare(password, hashedPassword);
    }
}
