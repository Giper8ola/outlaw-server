import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { ClustersStatsModule } from '../../modules/clusters-stats/clusters-stats.module';
import { ServerStatsModule } from '../../modules/server-stats/server-stats.module';
import { ServersModule } from '../../modules/servers/servers.module';
import { ClustersModule } from '../../modules/clusters/clusters.module';

@Module({
    controllers: [TasksController],
    providers: [TasksService],
    imports: [
        ClustersStatsModule,
        ServerStatsModule,
        ServersModule,
        ClustersModule
    ]
})
export class TasksModule {}
