import { Module } from '@nestjs/common';
import { ItemsTypeService } from './items-type.service';
import { ItemsTypeController } from './items-type.controller';
import { itemsTypeProviders } from './items-type.provider';
import { JwtService } from '@nestjs/jwt';
import { RolesModule } from '../roles/roles.module';

@Module({
    imports: [RolesModule],
    controllers: [ItemsTypeController],
    providers: [ItemsTypeService, ...itemsTypeProviders, JwtService]
})
export class ItemsTypeModule {}
