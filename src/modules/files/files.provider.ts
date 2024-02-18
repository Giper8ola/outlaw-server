import { FILE_REPOSITORY } from '../../core/constants';
import { File } from './entities/file.entity';

export const filesProvider = [
    {
        provide: FILE_REPOSITORY,
        useValue: File
    }
];
