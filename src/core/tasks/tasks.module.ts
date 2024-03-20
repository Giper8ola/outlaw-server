import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { ClustersStatsModule } from '../../modules/clusters-stats/clusters-stats.module';

@Module({
    controllers: [TasksController],
    providers: [TasksService],
    imports: [ClustersStatsModule]
})
export class TasksModule {}
