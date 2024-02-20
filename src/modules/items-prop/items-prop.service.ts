import { Inject, Injectable } from '@nestjs/common';
import { CreateItemsPropDto } from './dto/create-items-prop.dto';
import { UpdateItemsPropDto } from './dto/update-items-prop.dto';
import { ITEMS_PROP_REPOSITORY } from '../../core/constants';
import { ItemsProp } from './entities/items-prop.entity';

@Injectable()
export class ItemsPropService {
    constructor(
        @Inject(ITEMS_PROP_REPOSITORY)
        private readonly itemsPropRepository: typeof ItemsProp
    ) {}
    async create(data: CreateItemsPropDto) {
        return await this.itemsPropRepository.create(data);
    }

    async update(id: number, data: UpdateItemsPropDto) {
        return await this.itemsPropRepository.update(data, {
            where: {
                id
            }
        });
    }

    async remove(id: number) {
        return await this.itemsPropRepository.destroy({
            where: {
                id
            }
        });
    }
}
