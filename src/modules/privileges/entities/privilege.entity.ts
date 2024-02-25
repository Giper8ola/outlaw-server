import {
    BelongsToMany,
    Column,
    DataType,
    HasMany,
    HasOne,
    Model,
    Table
} from 'sequelize-typescript';
import { Kit } from '../../kits/entities/kit.entity';
import { PrivilegeKit } from '../../privilege-kits/entities/privilege-kit.entity';
import { PrivilegeRule } from '../../privilege-rules/entities/privilege-rule.entity';
@Table
export class Privilege extends Model<Privilege> {
    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false
    })
    name: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    duration: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    cost: number;

    @HasOne(() => Kit)
    kit: Kit;

    @BelongsToMany(() => Kit, () => PrivilegeKit)
    kits: Array<Kit & {PrivilegeKit: PrivilegeKit}>;

    @HasMany(() => PrivilegeRule)
    rules: PrivilegeRule[]
}
