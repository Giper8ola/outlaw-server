import {
    BelongsTo,
    BelongsToMany,
    Column,
    DataType,
    ForeignKey,
    Model,
    Table
} from 'sequelize-typescript';
import { Cluster } from '../../clusters/entities/cluster.entity';
import { File } from '../../files/entities/file.entity';
import { ShopCategory } from '../../shop-category/entities/shop-category.entity';
import { Category } from '../../category/entities/category.entity';
@Table
export class Shop extends Model<Shop> {
    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false
    })
    name: string;

    @ForeignKey(() => File)
    @Column
    iconId: number;

    @BelongsTo(() => File)
    icon: File;

    @ForeignKey(() => Cluster)
    @Column({
        type: DataType.INTEGER,
        onDelete: 'CASCADE'
    })
    clusterId: number;

    @BelongsTo(() => Cluster)
    cluster: Cluster;

    @BelongsToMany(() => Category, () => ShopCategory)
    categories: Array<Category & { ShopCategory: ShopCategory }>;
}
