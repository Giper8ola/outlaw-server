import {
    BelongsTo,
    Column,
    DataType,
    ForeignKey,
    Model,
    Table
} from 'sequelize-typescript';
import { Item } from '../../items/entities/item.entity';
@Table
export class ItemsProp extends Model<ItemsProp> {
    @Column({
        type: DataType.STRING
    })
    name: string;

    @Column({
        type: DataType.STRING
    })
    icon: string;

    @Column({
        type: DataType.STRING
    })
    path: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    price: number;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    gameId: string;

    @Column({
        type: DataType.INTEGER,
        defaultValue: 1
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
