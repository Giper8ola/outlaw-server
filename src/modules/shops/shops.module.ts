import { Module } from '@nestjs/common';
import { ShopsService } from './shops.service';
import { ShopsController } from './shops.controller';
import { FilesModule } from '../files/files.module';
import { JwtModule } from '@nestjs/jwt';
import { RolesModule } from '../roles/roles.module';
import { shopsProvider } from './shops.provider';

@Module({
    imports: [FilesModule, JwtModule, RolesModule],
    controllers: [ShopsController],
    providers: [ShopsService, ...shopsProvider]
})
export class ShopsModule {}
