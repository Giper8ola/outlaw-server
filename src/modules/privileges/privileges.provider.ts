import { PRIVILEGE_REPOSITORY } from '../../core/constants';
import { Privilege } from './entities/privilege.entity';

export const privilegesProvider = [
    {
        provide: PRIVILEGE_REPOSITORY,
        useValue: Privilege
    }
];
