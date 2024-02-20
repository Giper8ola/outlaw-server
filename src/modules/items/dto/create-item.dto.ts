import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';
import { ItemTypeEnum } from '../../../core/enums/ItemTypeEnum';

export class CreateItemDto {
    @ApiProperty()
    name: string;

    @ApiProperty({ type: 'string', format: 'binary' })
    icon: any;

    @ApiProperty()
    @IsEnum(ItemTypeEnum)
    type: ItemTypeEnum;

    @ApiProperty()
    entityTypeId: number;
}
