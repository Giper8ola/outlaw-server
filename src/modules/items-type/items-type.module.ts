import { Module } from '@nestjs/common';
import { ItemsTypeService } from './items-type.service';
import { ItemsTypeController } from './items-type.controller';
import { itemsTypeProviders } from './items-type.provider';
import { JwtModule } from '@nestjs/jwt';
import { RolesModule } from '../roles/roles.module';

@Module({
    imports: [RolesModule, JwtModule],
    controllers: [ItemsTypeController],
    providers: [ItemsTypeService, ...itemsTypeProviders]
})
export class ItemsTypeModule {}
