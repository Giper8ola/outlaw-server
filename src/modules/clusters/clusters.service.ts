import { Inject, Injectable } from '@nestjs/common';
import { CreateClusterDto } from './dto/create-cluster.dto';
import { UpdateClusterDto } from './dto/update-cluster.dto';
import { CLUSTER_REPOSITORY } from '../../core/constants';
import { Cluster } from './entities/cluster.entity';
import { FilesService } from '../files/files.service';
import { Express } from 'express';
import { Op } from 'sequelize';
import * as moment from 'moment/moment';
import { ClustersStat } from '../clusters-stats/entities/clusters-stat.entity';

@Injectable()
export class ClustersService {
    constructor(
        @Inject(CLUSTER_REPOSITORY)
        private readonly clusterRepository: typeof Cluster,
        private readonly filesService: FilesService
    ) {}
    async create(
        createClusterDto: CreateClusterDto,
        icon: Express.Multer.File
    ) {
        const file = await this.filesService.create(icon);
        return await this.clusterRepository.create({
            ...createClusterDto,
            iconId: file.id
        });
    }

    async update(id: number, updateClusterDto: UpdateClusterDto) {
        return await this.clusterRepository.update(updateClusterDto, {
            where: {
                id
            }
        });
    }

    async remove(id: number) {
        return await this.clusterRepository.destroy({
            where: {
                id
            }
        });
    }

    async findAll() {
        return await this.clusterRepository.findAll();
    }

    async findOne(id: number) {
        const cluster = await this.clusterRepository.findByPk(id, {
            include: {
                model: ClustersStat,
                where: {
                    createdAt: {
                        [Op.gt]: moment().subtract(2, 'hours').format(),
                        [Op.lt]: moment().format()
                    }
                }
            }
        });

        return cluster.stats;
    }
}
