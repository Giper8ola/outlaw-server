import { ApiProperty, IntersectionType, OmitType } from '@nestjs/swagger';
import { CreateCategoryDto } from './create-category.dto';

class AdditionCategoryUpdateValues {
    @ApiProperty()
    fileId: number;
}
export class UpdateCategoryDto extends IntersectionType(
    OmitType(CreateCategoryDto, ['icon', 'type'] as const),
    AdditionCategoryUpdateValues
) {}
