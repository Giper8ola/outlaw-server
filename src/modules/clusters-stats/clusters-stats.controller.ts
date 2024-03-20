import { Controller, Post, Body } from '@nestjs/common';
import { ClustersStatsService } from './clusters-stats.service';
import { CreateClustersStatDto } from './dto/create-clusters-stat.dto';
@Controller('clusters-stats')
export class ClustersStatsController {
    constructor(private readonly clustersStatsService: ClustersStatsService) {}

    @Post()
    create(@Body() createClustersStatDto: CreateClustersStatDto) {
        return this.clustersStatsService.create(createClustersStatDto);
    }
}
