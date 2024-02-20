import { Module } from '@nestjs/common';
import { CategoryItemService } from './category-item.service';
import { CategoryItemController } from './category-item.controller';
import { categoryItemProviders } from './category-item.provider';
import { JwtModule } from '@nestjs/jwt';
import { RolesModule } from '../roles/roles.module';

@Module({
    imports: [JwtModule, RolesModule],
    controllers: [CategoryItemController],
    providers: [CategoryItemService, ...categoryItemProviders],
    exports: [CategoryItemService]
})
export class CategoryItemModule {}
