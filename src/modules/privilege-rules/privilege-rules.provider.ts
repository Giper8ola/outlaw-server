import { PRIVILEGE_RULES_REPOSITORY } from '../../core/constants';
import { PrivilegeRule } from './entities/privilege-rule.entity';

export const privilegeRulesProvider = [
    {
        provide: PRIVILEGE_RULES_REPOSITORY,
        useValue: PrivilegeRule
    }
];
