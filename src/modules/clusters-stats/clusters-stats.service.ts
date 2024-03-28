import { Inject, Injectable } from '@nestjs/common';
import { CreateClustersStatDto } from './dto/create-clusters-stat.dto';
import { CLUSTER_STATS_REPOSITORY } from '../../core/constants';
import { ClustersStat } from './entities/clusters-stat.entity';
import { UpdateClustersStatDto } from './dto/update-clusters-stat.dto';

@Injectable()
export class ClustersStatsService {
    constructor(
        @Inject(CLUSTER_STATS_REPOSITORY)
        private readonly clusterStatsRepository: typeof ClustersStat
    ) {}
    async create(createClustersStatDto: CreateClustersStatDto) {
        return await this.clusterStatsRepository.create(createClustersStatDto);
    }

    async update(id: number, updateClusterStatDto: UpdateClustersStatDto) {
        return await this.clusterStatsRepository.update(updateClusterStatDto, {
            where: {
                clusterId: id
            }
        });
    }

    async remove(id: number) {
        return await this.clusterStatsRepository.destroy({
            where: {
                id: id
            }
        });
    }
}
