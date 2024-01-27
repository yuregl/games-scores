import { RequestSingInDto } from '../authDto/signInDto';
import { TokenDto } from '../authDto/tokenDto';

export interface AuthControllerInterface {
    singIn(data: RequestSingInDto): Promise<TokenDto>;
}
