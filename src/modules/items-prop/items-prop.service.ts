import { Injectable } from '@nestjs/common';
import { CreateItemsPropDto } from './dto/create-items-prop.dto';
import { UpdateItemsPropDto } from './dto/update-items-prop.dto';

@Injectable()
export class ItemsPropService {
    create(createItemsPropDto: CreateItemsPropDto) {
        return 'This action adds a new itemsProp';
    }

    findAll() {
        return `This action returns all itemsProp`;
    }

    findOne(id: number) {
        return `This action returns a #${id} itemsProp`;
    }

    update(id: number, updateItemsPropDto: UpdateItemsPropDto) {
        return `This action updates a #${id} itemsProp`;
    }

    remove(id: number) {
        return `This action removes a #${id} itemsProp`;
    }
}
