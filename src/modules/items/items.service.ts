import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { ITEMS_REPOSITORY } from '../../core/constants';
import { Item } from './entities/item.entity';
import { Express } from 'express';
import { FilesService } from '../files/files.service';

@Injectable()
export class ItemsService {
    constructor(
        @Inject(ITEMS_REPOSITORY) private readonly itemsRepository: typeof Item,
        private readonly filesService: FilesService
    ) {}
    async create(data: CreateItemDto, icon: Express.Multer.File) {
        const file = await this.filesService.create(icon);
        return await this.itemsRepository.create({ ...data, fileId: file.id });
    }


    async getOne(id: number) {
        return await this.itemsRepository.findByPk(id)
    }
    async update(id: number, data: UpdateItemDto) {
        return await this.itemsRepository.update(data, {
            where: {
                id
            }
        });
    }

    async remove(id: number) {
        return await this.itemsRepository.destroy({
            where: {
                id
            }
        });
    }
}
