import { Module } from '@nestjs/common';
import { ClustersService } from './clusters.service';
import { ClustersController } from './clusters.controller';
import { clustersProvider } from './clusters.provider';
import { FilesModule } from '../files/files.module';
import { JwtModule } from '@nestjs/jwt';
import { RolesModule } from '../roles/roles.module';

@Module({
    imports: [FilesModule, JwtModule, RolesModule],
    controllers: [ClustersController],
    providers: [ClustersService, ...clustersProvider]
})
export class ClustersModule {}
