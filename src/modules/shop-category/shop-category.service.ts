import { Inject, Injectable } from '@nestjs/common';
import { CreateShopCategoryDto } from './dto/create-shop-category.dto';
import { SHOP_CATEGORY_REPOSITORY } from '../../core/constants';
import { ShopCategory } from './entities/shop-category.entity';

@Injectable()
export class ShopCategoryService {
    constructor(
        @Inject(SHOP_CATEGORY_REPOSITORY)
        private readonly shopCategoryRepository: typeof ShopCategory
    ) {}
    async create(createShopCategoryDto: CreateShopCategoryDto) {
        return await this.shopCategoryRepository.create(createShopCategoryDto);
    }

    async remove(id: number) {
        return await this.shopCategoryRepository.destroy({
            where: {
                id
            }
        });
    }
}
