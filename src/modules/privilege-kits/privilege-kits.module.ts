import { Module } from '@nestjs/common';
import { PrivilegeKitsService } from './privilege-kits.service';
import { PrivilegeKitsController } from './privilege-kits.controller';
import { privilegeKitsProvider } from './privilege-kits.provider';

@Module({
    controllers: [PrivilegeKitsController],
    providers: [PrivilegeKitsService, ...privilegeKitsProvider]
})
export class PrivilegeKitsModule {}
