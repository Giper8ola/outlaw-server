import { Module } from '@nestjs/common';
import { ClustersStatsService } from './clusters-stats.service';
import { ClustersStatsController } from './clusters-stats.controller';
import { ClustersModule } from '../clusters/clusters.module';

@Module({
    controllers: [ClustersStatsController],
    providers: [ClustersStatsService],
    exports: [ClustersStatsService],
    imports: [ClustersModule]
})
export class ClustersStatsModule {}
