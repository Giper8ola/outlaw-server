import {
    BelongsTo,
    Column,
    DataType,
    ForeignKey,
    Model,
    Table
} from 'sequelize-typescript';
import { Server } from '../../servers/entities/server.entity';

@Table
export class ServerStat extends Model<ServerStat> {
    @Column({
        type: DataType.INTEGER,
        defaultValue: 0
    })
    cur_online: number;

    @Column({
        type: DataType.INTEGER,
        defaultValue: 0
    })
    max_online: number;

    @ForeignKey(() => Server)
    @Column({
        type: DataType.INTEGER,
        onDelete: 'CASCADE'
    })
    serverId: number;

    @BelongsTo(() => Server)
    server: Server;
}
