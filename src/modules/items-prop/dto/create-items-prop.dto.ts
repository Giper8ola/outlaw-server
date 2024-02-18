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

    @ForeignKey(() => Item)
    @Column({
        type: DataType.INTEGER,
        onDelete: 'CASCADE'
    })
    itemId: number;

    @BelongsTo(() => Item)
    item: Item;
}
