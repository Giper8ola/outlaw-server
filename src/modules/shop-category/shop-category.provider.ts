import { SHOP_CATEGORY_REPOSITORY } from '../../core/constants';
import { ShopCategory } from './entities/shop-category.entity';

export const shopCategoryProvider = [
    {
        provide: SHOP_CATEGORY_REPOSITORY,
        useValue: ShopCategory
    }
];
