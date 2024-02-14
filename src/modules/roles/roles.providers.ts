import { ROLE_REPOSITORY } from '../../core/constants';
import { Role } from './entities/role.entity';

export const rolesProviders = [
    {
        provide: ROLE_REPOSITORY,
        useValue: Role
    }
];
