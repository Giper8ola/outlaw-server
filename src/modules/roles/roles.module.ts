import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { rolesProviders } from './roles.providers';
import { JwtService } from '@nestjs/jwt';

@Module({
    controllers: [RolesController],
    providers: [RolesService, ...rolesProviders, JwtService],
    exports: [RolesService]
})
export class RolesModule {}
