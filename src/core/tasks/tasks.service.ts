import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { ClustersStatsService } from '../../modules/clusters-stats/clusters-stats.service';
import { ping } from 'mcstatus.js';
import { ServersService } from '../../modules/servers/servers.service';
import { PingServerResponse } from '../types/types';
import { ServerStatsService } from '../../modules/server-stats/server-stats.service';
import { ClustersService } from '../../modules/clusters/clusters.service';

@Injectable()
export class TasksService {
    constructor(
        private readonly clusterStatsService: ClustersStatsService,
        private readonly serverService: ServersService,
        private readonly serverStatService: ServerStatsService,
        private readonly clusterService: ClustersService
    ) {}

    @Cron(CronExpression.EVERY_30_SECONDS)
    async updateServerOnline() {
        this.serverService
            .findAll()
            .then((data) => {
                data.map((el) => {
                    ping(
                        el.ip,
                        el.port,
                        true,
                        async (response: PingServerResponse) => {
                            await this.serverService.update(el.id, {
                                online: response.players.online
                            });
                        }
                    );
                });
            })
            .catch((reason) => console.log(reason));
    }

    @Cron('0 */5 * * * *')
    async updateServersStat() {
        const servers = await this.serverService.findAll();
        servers.map(async (el) => {
            await this.serverStatService
                .findAllByServerId(el.id)
                .then(async (data) => {
                    await this.serverStatService.create({
                        cur_online: el.online,
                        max_online:
                            data.at(-1).max_online === 0 ||
                            data.at(-1).max_online < el.online
                                ? el.online
                                : data.at(-1).max_online,
                        serverId: el.id
                    });

                    const cluster_stat = await this.clusterService.findOne(
                        el.clusterId
                    );
                    const last_stat = cluster_stat.at(-1);
                    const maxOnlinePeriod =
                        last_stat.maxServerOnline + el.online;
                    await this.clusterStatsService.update(last_stat.id, {
                        maxOnlineOnPeriod:
                            maxOnlinePeriod > last_stat.maxOnlineOnPeriod
                                ? maxOnlinePeriod
                                : last_stat.maxOnlineOnPeriod,
                        maxServerOnline:
                            el.online > last_stat.maxServerOnline
                                ? el.online
                                : last_stat.maxServerOnline
                    });
                })
                .catch((reason) => console.log(reason));
        });
    }

    @Cron('0 0 0 * * *')
    async updateServersStatCounter() {
        await this.serverService
            .findAll()
            .then((data) => {
                data.map(async (el) => {
                    await this.serverStatService.create({
                        cur_online: 0,
                        max_online: 0,
                        serverId: el.id
                    });
                });
            })
            .catch((reason) => console.log(reason));
    }

    @Cron('0 0 */3 * * *')
    async updateClusterStatCounter() {
        await this.clusterService.findAll().then((clusters) => {
            clusters.map(async (cluster) => {
                await this.clusterStatsService.create({
                    maxServerOnline: 0,
                    maxOnlineOnPeriod: 0,
                    clusterId: cluster.id
                });
            });
        });
    }
}
