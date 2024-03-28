import { Controller } from '@nestjs/common';
import { ClustersStatsService } from './clusters-stats.service';
@Controller('clusters-stats')
export class ClustersStatsController {
    constructor(private readonly clustersStatsService: ClustersStatsService) {}
}
