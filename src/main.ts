import { NestFactory } from '@nestjs/core';
import { INestApplication } from '@nestjs/common';
import getConfiguration, { Configuration } from './config/config';
import { AppModule } from './app.module';

class App {
    app: INestApplication;

    private defaultConfig: Configuration;

    constructor() {
        this.defaultConfig = getConfiguration();
        this.startSetup();
    }

    async startSetup() {
        try {
            await this.bootStrap();
            await this.serverSetup();
        } catch (err) {
            console.error(err.message);
        }
    }

    async bootStrap() {
        this.app = await NestFactory.create(AppModule);
        this.app.setGlobalPrefix(this.defaultConfig.app.prefix);
    }

    async serverSetup() {
        await this.app.listen(this.defaultConfig.port, async () => {
            console.log(`Application is running on: ${await this.app.getUrl()}`);
        });
    }
}

export default new App();
