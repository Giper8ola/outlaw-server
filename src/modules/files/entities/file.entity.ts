import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Item } from '../../items/entities/item.entity';
@Table
export class File extends Model<File> {
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    filename: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    path: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    destination: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    type: string;

    @HasMany(() => Item, {
        onDelete: 'SET DEFAULT'
    })
    items: Item[];
}
