import { Module } from '@nestjs/common';
import { CryptoService } from './services/crypto.service';
import { ConfigService } from '@nestjs/config';

@Module({
    providers: [CryptoService, ConfigService],
    exports: [CryptoService],
})
export class CryptoModule {}
