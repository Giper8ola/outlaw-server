import { Inject, Injectable } from '@nestjs/common';
import { CreatePrivilegeRuleDto } from './dto/create-privilege-rule.dto';
import { UpdatePrivilegeRuleDto } from './dto/update-privilege-rule.dto';
import { PRIVILEGE_RULES_REPOSITORY } from '../../core/constants';
import { PrivilegeRule } from './entities/privilege-rule.entity';

@Injectable()
export class PrivilegeRulesService {
    constructor(@Inject(PRIVILEGE_RULES_REPOSITORY) private readonly privilegeRulesRepository: typeof PrivilegeRule) {}
    async create(createPrivilegeRuleDto: CreatePrivilegeRuleDto) {
        return await this.privilegeRulesRepository.create(createPrivilegeRuleDto);
    }

    async update(id: number, updatePrivilegeRuleDto: UpdatePrivilegeRuleDto) {
        return await this.privilegeRulesRepository.update(updatePrivilegeRuleDto, {
            where: {
                id
            }
        });
    }

    async remove(id: number) {
        return await this.privilegeRulesRepository.destroy({
            where:{
                id
            }
        });
    }
}
