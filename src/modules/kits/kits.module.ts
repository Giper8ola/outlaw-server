import { Module } from '@nestjs/common';
import { KitsService } from './kits.service';
import { KitsController } from './kits.controller';
import { kitsProvider } from './kits.provider';

@Module({
    controllers: [KitsController],
    providers: [KitsService, ...kitsProvider],
})
export class KitsModule {}
