import { Inject, Injectable } from '@nestjs/common';
import { CreateShopDto } from './dto/create-shop.dto';
import { UpdateShopDto } from './dto/update-shop.dto';
import { SHOP_REPOSITORY } from '../../core/constants';
import { Shop } from './entities/shop.entity';
import { Express } from 'express';
import { FilesService } from '../files/files.service';

@Injectable()
export class ShopsService {
    constructor(
        @Inject(SHOP_REPOSITORY) private readonly shopRepository: typeof Shop,
        private readonly filesService: FilesService
    ) {}
    async create(createShopDto: CreateShopDto, icon: Express.Multer.File) {
        const file = await this.filesService.create(icon);
        return await this.shopRepository.create({
            ...createShopDto,
            iconId: file.id
        });
    }

    async update(id: number, updateShopDto: UpdateShopDto) {
        return await this.shopRepository.update(updateShopDto, {
            where: {
                id
            }
        });
    }

    async remove(id: number) {
        return await this.shopRepository.destroy({
            where: {
                id
            }
        });
    }
}
