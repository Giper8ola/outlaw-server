import { Inject, Injectable } from '@nestjs/common';
import { CreateServerStatDto } from './dto/create-server-stat.dto';
import { UpdateServerStatDto } from './dto/update-server-stat.dto';
import { SERVER_STAT_REPOSITORY } from '../../core/constants';
import { ServerStat } from './entities/server-stat.entity';
import { ServersService } from '../servers/servers.service';

@Injectable()
export class ServerStatsService {
    constructor(
        @Inject(SERVER_STAT_REPOSITORY)
        private readonly serverStatRepository: typeof ServerStat,
        private readonly serversService: ServersService
    ) {}
    async create(createServerStatDto: CreateServerStatDto) {
        return await this.serverStatRepository.create(createServerStatDto);
    }

    async update(id: number, updateServerStatDto: UpdateServerStatDto) {
        return await this.serverStatRepository.update(updateServerStatDto, {
            where: {
                serverId: id
            }
        });
    }

    async remove(id: number) {
        return await this.serverStatRepository.destroy({
            where: { serverId: id }
        });
    }

    async findAllByServerId(id: number) {
        return await this.serversService.findAllServerStats(id);
    }
}
