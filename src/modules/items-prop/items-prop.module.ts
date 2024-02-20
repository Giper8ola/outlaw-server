import { Module } from '@nestjs/common';
import { ItemsPropService } from './items-prop.service';
import { ItemsPropController } from './items-prop.controller';
import { JwtModule } from '@nestjs/jwt';
import { RolesModule } from '../roles/roles.module';
import { itemsPropProviders } from './items-prop.provider';

@Module({
    imports: [JwtModule, RolesModule],
    controllers: [ItemsPropController],
    providers: [ItemsPropService, ...itemsPropProviders]
})
export class ItemsPropModule {}
