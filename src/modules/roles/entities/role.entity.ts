import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { AreasEnum } from '../enums/AreasEnum';
import { User } from '../../users/user.entity';

@Table
export class Role extends Model<Role> {
    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false
    })
    name: string;

    @Column({
        type: DataType.ARRAY(DataType.ENUM(...Object.keys(AreasEnum))),
        allowNull: false
    })
    areas: AreasEnum[];

    @HasMany(() => User)
    users: User[];
}
