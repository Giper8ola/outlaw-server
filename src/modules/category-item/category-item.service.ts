import { Inject, Injectable } from '@nestjs/common';
import { CreateCategoryItemDto } from './dto/create-category-item.dto';
import { UpdateCategoryItemDto } from './dto/update-category-item.dto';
import { CATEGORY_ITEM_REPOSITORY } from '../../core/constants';
import { CategoryItem } from './entities/category-item.entity';

@Injectable()
export class CategoryItemService {
    constructor(
        @Inject(CATEGORY_ITEM_REPOSITORY)
        private readonly categoryItemRepository: typeof CategoryItem
    ) {}
    async create(createCategoryItemDto: CreateCategoryItemDto) {
        return await this.categoryItemRepository.create(createCategoryItemDto);
    }

    async update(
        categoryId: number,
        itemId: number,
        updateCategoryItemDto: UpdateCategoryItemDto
    ) {
        return await this.categoryItemRepository.update(updateCategoryItemDto, {
            where: {
                categoryId: categoryId,
                itemId: itemId
            }
        });
    }

    async remove(categoryId: number, itemId: number) {
        return await this.categoryItemRepository.destroy({
            where: {
                categoryId: categoryId,
                itemId: itemId
            }
        });
    }
}
