import {
    BelongsTo,
    Column,
    DataType,
    ForeignKey,
    Model,
    Table
} from 'sequelize-typescript';
import { Item } from '../../items/entities/item.entity';
import { File } from '../../files/entities/file.entity';
import { Server } from '../../servers/entities/server.entity';
@Table
export class ItemsProp extends Model<ItemsProp> {
    @Column({
        type: DataType.STRING
    })
    name: string;

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

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    version: string;

    @ForeignKey(() => Item)
    @Column({
        type: DataType.INTEGER,
        onDelete: 'CASCADE'
    })
    itemId: number;

    @BelongsTo(() => Item)
    item: Item;

    @ForeignKey(() => File)
    @Column({
        type: DataType.INTEGER,
        onDelete: 'SET DEFAULT'
    })
    fileId: number;

    @BelongsTo(() => File)
    file: File;

    @ForeignKey(() => Server)
    @Column({
        type: DataType.INTEGER,
        onDelete: 'CASCADE'
    })
    serverId: number;

    @BelongsTo(() => Server)
    server: Server;
}
