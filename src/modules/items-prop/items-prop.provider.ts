import { ITEMS_PROP_REPOSITORY } from '../../core/constants';
import { ItemsProp } from './entities/items-prop.entity';
export const itemsPropProviders = [
    {
        provide: ITEMS_PROP_REPOSITORY,
        useValue: ItemsProp
    }
];
