import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, HasOne, Model, Table } from 'sequelize-typescript';
import { Privilege } from '../../privileges/entities/privilege.entity';
import { PrivilegeKit } from '../../privilege-kits/entities/privilege-kit.entity';
import { Category } from '../../category/entities/category.entity';
@Table
export class Kit extends Model<Kit> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true
    })
    name: string;

    @ForeignKey(() => Privilege)
    @Column({
        type: DataType.INTEGER,
        onDelete: "CASCADE"
    })
    privilegeId: number;

    @BelongsTo(() => Privilege)
    privilege: Privilege;

    @BelongsToMany(() => Privilege, () => PrivilegeKit)
    privileges: Array<Privilege & {PrivilegeKit: PrivilegeKit}>;

    @ForeignKey(() => Category)
    @Column({
        onDelete: "SET DEFAULT"
    })
    categoryId: number;

    @BelongsTo(() => Category)
    category: Category;
}
