import { Inject, Injectable } from '@nestjs/common';
import { CreateItemsTypeDto } from './dto/create-items-type.dto';
import { UpdateItemsTypeDto } from './dto/update-items-type.dto';
import { ITEMS_TYPE_REPOSITORY } from '../../core/constants';
import { ItemsType } from './entities/items-type.entity';

@Injectable()
export class ItemsTypeService {
    constructor(
        @Inject(ITEMS_TYPE_REPOSITORY)
        private readonly itemsTypeRepository: typeof ItemsType
    ) {}

    async create(data: CreateItemsTypeDto) {
        return await this.itemsTypeRepository.create(data);
    }

    findAll() {
        return `This action returns all itemsType`;
    }

    findOne(id: number) {
        return `This action returns a #${id} itemsType`;
    }

    async update(id: number, data: UpdateItemsTypeDto) {
        return await this.itemsTypeRepository.update(data, {
            where: {
                id
            }
        });
    }

    async remove(id: number) {
        return await this.itemsTypeRepository.destroy({
            where: {
                id
            }
        });
    }
}
