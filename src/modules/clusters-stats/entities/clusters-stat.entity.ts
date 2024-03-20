import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class ClustersStat extends Model<ClustersStat> {
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
}
