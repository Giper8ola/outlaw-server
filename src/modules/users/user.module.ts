import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { usersProviders } from './users.providers';
import { JwtService } from '@nestjs/jwt';

@Module({
    controllers: [UserController],
    providers: [UserService, ...usersProviders, JwtService],
    exports: [UserService]
})
export class UserModule {}
