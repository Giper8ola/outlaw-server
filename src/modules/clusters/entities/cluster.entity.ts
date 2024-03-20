import {
    BelongsTo,
    Column,
    DataType,
    ForeignKey,
    HasMany,
    HasOne,
    Model,
    Table
} from 'sequelize-typescript';
import { Shop } from '../../shops/entities/shop.entity';
import { File } from '../../files/entities/file.entity';
import { ServerPhasesEnum } from '../../../core/enums/ServerPhasesEnum';
import { Server } from '../../servers/entities/server.entity';
@Table
export class Cluster extends Model<Cluster> {
    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false
    })
    name: string;

    @Column({
        type: DataType.ENUM(...Object.values(ServerPhasesEnum)),
        defaultValue: ServerPhasesEnum.test
    })
    phase: keyof typeof ServerPhasesEnum;

    @Column({
        type: DataType.INTEGER,
        defaultValue: 0
    })
    record_online: number;

    @ForeignKey(() => File)
    @Column({
        type: DataType.INTEGER,
        onDelete: 'SET DEFAULT'
    })
    iconId: number;

    @BelongsTo(() => File)
    icon: File;

    @HasOne(() => Shop)
    shop: Shop;

    @HasMany(() => Server)
    servers: Server[];
}
