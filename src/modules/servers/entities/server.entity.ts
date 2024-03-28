import {
    BelongsTo,
    Column,
    DataType,
    ForeignKey,
    HasMany,
    Model,
    Table
} from 'sequelize-typescript';
import { ItemsProp } from '../../items-prop/entities/items-prop.entity';
import { DataTypes } from 'sequelize';
import { ServerPhasesEnum } from '../../../core/enums/ServerPhasesEnum';
import { Cluster } from '../../clusters/entities/cluster.entity';
import { ServerStat } from '../../server-stats/entities/server-stat.entity';
@Table
export class Server extends Model<Server> {
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    version: string;

    @Column({
        type: DataTypes.STRING,
        allowNull: false
    })
    ip: string;

    @Column({
        type: DataTypes.INTEGER,
        defaultValue: 25565
    })
    port: number;

    @Column({
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
    })
    number: number;

    @Column({
        type: DataType.ENUM(...Object.values(ServerPhasesEnum)),
        defaultValue: ServerPhasesEnum.test
    })
    phase: keyof typeof ServerPhasesEnum;

    @HasMany(() => ItemsProp)
    ItemsProps: ItemsProp[];

    @ForeignKey(() => Cluster)
    @Column({
        type: DataType.INTEGER,
        onDelete: 'CASCADE'
    })
    clusterId: number;

    @BelongsTo(() => Cluster)
    cluster: Cluster;

    @Column({
        type: DataType.INTEGER,
        defaultValue: 0
    })
    online: number;

    @HasMany(() => ServerStat)
    serverStats: ServerStat[];
}
