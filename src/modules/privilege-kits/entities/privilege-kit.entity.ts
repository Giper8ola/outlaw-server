import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Privilege } from '../../privileges/entities/privilege.entity';
import { Kit } from '../../kits/entities/kit.entity';
@Table
export class PrivilegeKit extends Model<PrivilegeKit> {
    @ForeignKey(() => Privilege)
    @Column({
        onDelete: 'CASCADE'
    })
    privilegeId: number;

    @ForeignKey(() => Kit)
    @Column({
        onDelete: 'CASCADE'
    })
    kitId: number;
}
