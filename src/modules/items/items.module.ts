import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import { JwtModule } from '@nestjs/jwt';
import { itemsProviders } from './items.provider';
import { RolesModule } from '../roles/roles.module';
import { FilesModule } from '../files/files.module';

@Module({
    imports: [JwtModule, RolesModule, FilesModule],
    controllers: [ItemsController],
    providers: [ItemsService, ...itemsProviders],
    exports: [ItemsService]
})
export class ItemsModule {}
