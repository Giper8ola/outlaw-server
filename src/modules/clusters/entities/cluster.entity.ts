import {
    BelongsTo,
    Column,
    DataType,
    ForeignKey,
    HasOne,
    Model,
    Table
} from 'sequelize-typescript';
import { Shop } from '../../shops/entities/shop.entity';
import { File } from '../../files/entities/file.entity';
import { ServerPhasesEnum } from '../../../core/enums/ServerPhasesEnum';
@Table
export class Cluster extends Model<Cluster> {
    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false
    })
    name: string;

    @Column({
        type: DataType.ENUM(...Object.values(ServerPhasesEnum)),
        defaultValue: ServerPhasesEnum.test
    })
    phase: keyof typeof ServerPhasesEnum;

    @ForeignKey(() => File)
    @Column
    iconId: number;

    @BelongsTo(() => File)
    icon: File;

    @HasOne(() => Shop)
    shop: Shop;
}
