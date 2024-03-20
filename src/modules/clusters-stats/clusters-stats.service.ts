import { Injectable } from '@nestjs/common';
import { CreateClustersStatDto } from './dto/create-clusters-stat.dto';

@Injectable()
export class ClustersStatsService {
    async create(createClustersStatDto: CreateClustersStatDto) {
        return 'This action adds a new clustersStat';
    }
}
