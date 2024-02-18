import { ApiProperty } from '@nestjs/swagger';
import { BelongsTo, Column, DataType, ForeignKey } from 'sequelize-typescript';
import { Item } from '../../items/entities/item.entity';

export class CreateItemsPropDto {
    @ApiProperty({
        default: ''
    })
    name: string;

    @ApiProperty({
        default: ''
    })
    icon: string;

    @ApiProperty({
        default: ''
    })
    path: string;

    @ApiProperty()
    price: number;

    @ApiProperty()
    gameId: string;

    @ApiProperty({
        default: 1
    })
    count: number;

    @ApiProperty()
    itemId: number;

    @ApiProperty({
        default: '1.12.2'
    })
    version: string;
}
