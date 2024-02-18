import { Module } from '@nestjs/common';
import { FilesService } from './files.service';
import { FilesController } from './files.controller';
import { filesProvider } from './files.provider';
import { JwtModule } from '@nestjs/jwt';
import { RolesModule } from '../roles/roles.module';

@Module({
    imports: [JwtModule, RolesModule],
    controllers: [FilesController],
    providers: [FilesService, ...filesProvider],
    exports: [FilesService]
})
export class FilesModule {}
