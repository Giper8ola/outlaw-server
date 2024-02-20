import { CATEGORY_ITEM_REPOSITORY } from '../../core/constants';
import { CategoryItem } from './entities/category-item.entity';

export const categoryItemProviders = [
    {
        provide: CATEGORY_ITEM_REPOSITORY,
        useValue: CategoryItem
    }
];
