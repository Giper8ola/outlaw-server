import { Module } from '@nestjs/common';
import { ItemsPropService } from './items-prop.service';
import { ItemsPropController } from './items-prop.controller';

@Module({
    controllers: [ItemsPropController],
    providers: [ItemsPropService]
})
export class ItemsPropModule {}
