import {
    BelongsTo,
    Column,
    DataType,
    ForeignKey,
    HasMany,
    Model,
    Table
} from 'sequelize-typescript';
import { ItemsType } from '../../items-type/entities/items-type.entity';
import { ItemsProp } from '../../items-prop/entities/items-prop.entity';
import { File } from '../../files/entities/file.entity';
@Table
export class Item extends Model<Item> {
    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false
    })
    name: string;

    @ForeignKey(() => ItemsType)
    @Column({
        type: DataType.INTEGER,
        onDelete: 'SET DEFAULT'
    })
    typeId: number;

    @BelongsTo(() => ItemsType)
    type: ItemsType;

    @HasMany(() => ItemsProp, {
        onDelete: 'CASCADE'
    })
    props: ItemsProp[];

    @ForeignKey(() => File)
    @Column({
        type: DataType.INTEGER,
        onDelete: 'SET DEFAULT'
    })
    fileId: number;

    @BelongsTo(() => File)
    file: ItemsType;
}
