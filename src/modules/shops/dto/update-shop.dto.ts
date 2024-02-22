import { ApiProperty, IntersectionType, OmitType } from '@nestjs/swagger';
import { CreateShopDto } from './create-shop.dto';

class AdditionUpdateShopValues {
    @ApiProperty()
    iconId: number;
}

export class UpdateShopDto extends IntersectionType(
    OmitType(CreateShopDto, ['icon', 'clusterId'] as const),
    AdditionUpdateShopValues
) {}
