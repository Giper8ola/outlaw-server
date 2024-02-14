import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { DatabaseModule } from './core/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { AuthModule } from './modules/auth/auth.module';
import { RolesModule } from './modules/roles/roles.module';
import { UserModule } from './modules/users/user.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports: [
        UserModule,
        AuthModule,
        DatabaseModule,
        PassportModule,
        ConfigModule.forRoot({ isGlobal: true }),
        RolesModule,
        JwtModule
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
