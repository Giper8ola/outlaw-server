import {
    Table,
    Column,
    Model,
    DataType,
    ForeignKey,
    BelongsTo
} from 'sequelize-typescript';
import { Role } from '../roles/entities/role.entity';

@Table
export class User extends Model<User> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true
    })
    name: string;

    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false
    })
    email: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    password: string;

    @Column({
        type: DataType.UUID,
        allowNull: true,
        defaultValue: null
    })
    uuid: string;

    @Column({
        type: DataType.STRING(32),
        allowNull: true,
        defaultValue: null
    })
    accessToken: string;

    @Column({
        type: DataType.STRING(41),
        allowNull: true,
        defaultValue: null
    })
    serverID: string;

    @ForeignKey(() => Role)
    @Column({
        type: DataType.INTEGER,
        onDelete: 'SET DEFAULT'
    })
    roleId: number;

    @BelongsTo(() => Role)
    role: Role;
}
