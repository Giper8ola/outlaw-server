import { CLUSTER_REPOSITORY } from '../../core/constants';
import { Cluster } from './entities/cluster.entity';

export const clustersProvider = [
    {
        provide: CLUSTER_REPOSITORY,
        useValue: Cluster
    }
];
