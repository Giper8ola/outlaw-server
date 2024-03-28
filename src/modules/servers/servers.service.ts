import { Inject, Injectable } from '@nestjs/common';
import { CreateServerDto } from './dto/create-server.dto';
import { UpdateServerDto } from './dto/update-server.dto';
import { SERVER_REPOSITORY } from '../../core/constants';
import { Server } from './entities/server.entity';
import * as moment from 'moment';
import { Op } from 'sequelize';
import { ServerStat } from '../server-stats/entities/server-stat.entity';
@Injectable()
export class ServersService {
    constructor(
        @Inject(SERVER_REPOSITORY)
        private readonly serverRepository: typeof Server
    ) {}
    async create(createServerDto: CreateServerDto) {
        return await this.serverRepository.create({
            ...createServerDto,
            number: (await this.countAllServers()) + 1
        });
    }

    async countAllServers() {
        const servers = await this.serverRepository.findAndCountAll();
        return servers.count;
    }

    async update(id: number, updateServerDto: UpdateServerDto) {
        return await this.serverRepository.update(updateServerDto, {
            where: {
                id
            }
        });
    }

    async findAllServerStats(id: number) {
        const server = await this.serverRepository.findByPk(id, {
            include: {
                model: ServerStat,
                where: {
                    createdAt: {
                        [Op.gt]: moment().subtract(5, 'hours').format(),
                        [Op.lt]: moment().format()
                    }
                }
            }
        });
        return server.serverStats;
    }

    async remove(id: number) {
        return await this.serverRepository.destroy({
            where: {
                id
            }
        });
    }

    async findAll() {
        return await this.serverRepository.findAll();
    }
}
