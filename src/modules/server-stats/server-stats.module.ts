import { Module } from '@nestjs/common';
import { ServerStatsService } from './server-stats.service';
import { ServerStatsController } from './server-stats.controller';
import { serverStatsProvider } from './server-stats-provider';
import { ServersModule } from '../servers/servers.module';

@Module({
    imports: [ServersModule],
    controllers: [ServerStatsController],
    providers: [ServerStatsService, ...serverStatsProvider],
    exports: [ServerStatsService]
})
export class ServerStatsModule {}
