import {
    BelongsTo,
    Column,
    DataType,
    ForeignKey,
    Model,
    Table
} from 'sequelize-typescript';
import { Privilege } from '../../privileges/entities/privilege.entity';
@Table
export class PrivilegeRule extends Model<PrivilegeRule> {
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    title: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    description: string;

    @ForeignKey(() => Privilege)
    @Column({
        onDelete: 'CASCADE'
    })
    privilegeId: number;

    @BelongsTo(() => Privilege)
    privilege: Privilege;
}
