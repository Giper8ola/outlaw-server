import { OmitType } from '@nestjs/swagger';
import { CreatePrivilegeRuleDto } from './create-privilege-rule.dto';

export class UpdatePrivilegeRuleDto extends OmitType(CreatePrivilegeRuleDto, [
    'privilegeId'
] as const) {}
