import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { JwtModule } from '@nestjs/jwt';
import { RolesModule } from '../roles/roles.module';
import { categoryProviders } from './category.provider';
import { FilesModule } from '../files/files.module';
@Module({
    imports: [JwtModule, RolesModule, FilesModule],
    controllers: [CategoryController],
    providers: [CategoryService, ...categoryProviders]
})
export class CategoryModule {}
