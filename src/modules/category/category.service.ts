import { Inject, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CATEGORY_REPOSITORY } from '../../core/constants';
import { Category } from './entities/category.entity';
import { Express } from 'express';
import { FilesService } from '../files/files.service';

@Injectable()
export class CategoryService {
    constructor(
        @Inject(CATEGORY_REPOSITORY)
        private readonly categoryRepository: typeof Category,
        private readonly filesService: FilesService
    ) {}
    async create(
        createCategoryDto: CreateCategoryDto,
        file: Express.Multer.File
    ) {
        const fileEntity = await this.filesService.create(file);
        return await this.categoryRepository.create({
            ...createCategoryDto,
            fileId: fileEntity.id
        });
    }

    async update(id: number, updateCategoryDto: UpdateCategoryDto) {
        return await this.categoryRepository.update(updateCategoryDto, {
            where: {
                id
            }
        });
    }

    async remove(id: number) {
        return await this.categoryRepository.destroy({
            where: {
                id
            }
        });
    }
}
