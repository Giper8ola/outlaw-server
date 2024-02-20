import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { ItemsProp } from '../../items-prop/entities/items-prop.entity';
import { DataTypes } from 'sequelize';
import { ServerPhasesEnum } from '../../../core/enums/ServerPhasesEnum';
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
}
