import { ApiProperty, IntersectionType, OmitType } from '@nestjs/swagger';
import { CreateClusterDto } from './create-cluster.dto';

class AdditionUpdateClusterValues {
    @ApiProperty()
    iconId: number;
}

export class UpdateClusterDto extends IntersectionType(
    OmitType(CreateClusterDto, ['icon'] as const),
    AdditionUpdateClusterValues
) {}
