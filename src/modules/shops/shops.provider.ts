import { SHOP_REPOSITORY } from '../../core/constants';
import { Shop } from './entities/shop.entity';

export const shopsProvider = [
    {
        provide: SHOP_REPOSITORY,
        useValue: Shop
    }
];
