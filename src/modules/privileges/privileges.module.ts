import { Module } from '@nestjs/common';
import { PrivilegesService } from './privileges.service';
import { PrivilegesController } from './privileges.controller';
import { privilegesProvider } from './privileges.provider';

@Module({
    controllers: [PrivilegesController],
    providers: [PrivilegesService, ...privilegesProvider]
})
export class PrivilegesModule {}
