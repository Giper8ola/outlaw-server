import { ITEMS_TYPE_REPOSITORY } from '../../core/constants';
import { ItemsType } from './entities/items-type.entity';

export const itemsTypeProviders = [
    {
        provide: ITEMS_TYPE_REPOSITORY,
        useValue: ItemsType
    }
];
