import { SERVER_STAT_REPOSITORY } from '../../core/constants';
import { ServerStat } from './entities/server-stat.entity';

export const serverStatsProvider = [
    {
        provide: SERVER_STAT_REPOSITORY,
        useValue: ServerStat
    }
];
