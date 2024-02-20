import { ApiProperty, IntersectionType, OmitType } from '@nestjs/swagger';
import { CreateItemDto } from './create-item.dto';

class AdditionUpdateItemValues {
    @ApiProperty()
    fileId: number;
}

export class UpdateItemDto extends IntersectionType(
    OmitType(CreateItemDto, ['type', 'icon'] as const),
    AdditionUpdateItemValues
) {}
