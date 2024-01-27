import { TokenDto } from '../authDto/tokenDto';

export interface AuthServiceInterface {
    singIn(email: string, password: string): Promise<TokenDto>;
}
