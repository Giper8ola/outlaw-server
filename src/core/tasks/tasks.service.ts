import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { ClustersStatsService } from '../../modules/clusters-stats/clusters-stats.service';
import { ping } from 'mcstatus.js';
import { ServersService } from '../../modules/servers/servers.service';
import { PingServerResponse } from '../types/types';

@Injectable()
export class TasksService {
    constructor(
        private readonly clusterStatsService: ClustersStatsService,
        private readonly serverService: ServersService
    ) {}

    @Cron(CronExpression.EVERY_5_MINUTES)
    async updateServerOnline() {
        const servers = await this.serverService.findAll();
        servers.map((el) => {
            ping(el.ip, el.port, true, async (response: PingServerResponse) => {
                await this.serverService.update(el.id, {
                    online: response.players.online
                });
            });
        });
    }
}
