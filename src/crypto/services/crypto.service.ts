import { CryptoServiceInterface } from './crypto.service.interface';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcrypt';

export class CryptoService implements CryptoServiceInterface {
    constructor(private configService: ConfigService) {}

    async hashPassword(password: string): Promise<string> {
        const salt = this.configService.get('salt');

        const hashedPassword = await bcrypt.hash(password, salt);
        return hashedPassword;
    }

    async comparePassword(password: string, hashedPassword: string): Promise<boolean> {
        return await bcrypt.compare(password, hashedPassword);
    }
}
