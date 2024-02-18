import { ApiProperty, IntersectionType, PartialType } from '@nestjs/swagger';
import { CreateItemDto } from './create-item.dto';

class AdditionUpdateItemValues {
    @ApiProperty()
    fileId: number;
}

export class UpdateItemDto extends IntersectionType(
    CreateItemDto,
    AdditionUpdateItemValues
) {}
