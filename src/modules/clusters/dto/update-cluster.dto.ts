import { ApiProperty, IntersectionType, OmitType } from '@nestjs/swagger';
import { CreateItemDto } from '../../items/dto/create-item.dto';

class AdditionUpdateClusterValues {
    @ApiProperty()
    iconId: number;
}

export class UpdateClusterDto extends IntersectionType(
    OmitType(CreateItemDto, ['icon'] as const),
    AdditionUpdateClusterValues
) {}
