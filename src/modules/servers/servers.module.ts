import { Module } from '@nestjs/common';
import { ServersService } from './servers.service';
import { ServersController } from './servers.controller';
import { serversProvider } from './servers.provider';
import { JwtModule } from '@nestjs/jwt';
import { RolesModule } from '../roles/roles.module';

@Module({
    imports: [JwtModule, RolesModule],
    controllers: [ServersController],
    providers: [ServersService, ...serversProvider]
})
export class ServersModule {}
