import { Module } from '@nestjs/common';
import { ClustersStatsService } from './clusters-stats.service';
import { ClustersStatsController } from './clusters-stats.controller';
import { ClustersModule } from '../clusters/clusters.module';
import { clustersStatsProvider } from './clusters-stats.provider';

@Module({
    controllers: [ClustersStatsController],
    providers: [ClustersStatsService, ...clustersStatsProvider],
    exports: [ClustersStatsService],
    imports: [ClustersModule]
})
export class ClustersStatsModule {}
