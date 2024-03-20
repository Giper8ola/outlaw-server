import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { ClustersStatsService } from '../../modules/clusters-stats/clusters-stats.service';

@Injectable()
export class TasksService {
    constructor(private readonly clusterStatsService: ClustersStatsService) {}

    @Cron(CronExpression.EVERY_30_SECONDS)
    handleCron() {
        this.logger.debug('Called every 30 seconds');
    }
}
