import { OmitType } from '@nestjs/swagger';
import { CreateCategoryItemDto } from './create-category-item.dto';

export class UpdateCategoryItemDto extends OmitType(CreateCategoryItemDto, [
    'itemId',
    'categoryId'
] as const) {}
