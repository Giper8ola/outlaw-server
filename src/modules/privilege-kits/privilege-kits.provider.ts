import { PRIVILEGE_KITS_REPOSITORY } from '../../core/constants';
import { PrivilegeKit } from './entities/privilege-kit.entity';

export const privilegeKitsProvider = [
    {
        provide: PRIVILEGE_KITS_REPOSITORY,
        useValue: PrivilegeKit
    }
]