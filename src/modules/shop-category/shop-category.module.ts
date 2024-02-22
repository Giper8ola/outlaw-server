import { Module } from '@nestjs/common';
import { ShopCategoryService } from './shop-category.service';
import { ShopCategoryController } from './shop-category.controller';
import { JwtModule } from '@nestjs/jwt';
import { RolesModule } from '../roles/roles.module';
import { shopCategoryProvider } from './shop-category.provider';

@Module({
    imports: [JwtModule, RolesModule],
    controllers: [ShopCategoryController],
    providers: [ShopCategoryService, ...shopCategoryProvider]
})
export class ShopCategoryModule {}
