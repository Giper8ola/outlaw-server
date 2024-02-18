import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Item } from '../../items/entities/item.entity';
@Table
export class ItemsType extends Model<ItemsType> {
    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false
    })
    name: string;

    @HasMany(() => Item)
    items: Item[];
}
