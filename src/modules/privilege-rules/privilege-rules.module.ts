import { Module } from '@nestjs/common';
import { PrivilegeRulesService } from './privilege-rules.service';
import { PrivilegeRulesController } from './privilege-rules.controller';
import { privilegeRulesProvider } from './privilege-rules.provider';

@Module({
    controllers: [PrivilegeRulesController],
    providers: [PrivilegeRulesService, ...privilegeRulesProvider],
})
export class PrivilegeRulesModule {}
