import { KITS_REPOSITORY } from '../../core/constants';
import { Kit } from './entities/kit.entity';

export const kitsProvider = [
    {
        provide: KITS_REPOSITORY,
        useValue: Kit
    }
]