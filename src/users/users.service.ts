import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    async hello() {
        return "Hello"
    }
}
