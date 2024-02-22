import { SERVER_REPOSITORY } from '../../core/constants';
import { Server } from './entities/server.entity';

export const serversProvider = [
    {
        provide: SERVER_REPOSITORY,
        useValue: Server
    }
];
