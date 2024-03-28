import { CLUSTER_STATS_REPOSITORY } from '../../core/constants';
import { ClustersStat } from './entities/clusters-stat.entity';

export const clustersStatsProvider = [
    {
        provide: CLUSTER_STATS_REPOSITORY,
        useValue: ClustersStat
    }
];
