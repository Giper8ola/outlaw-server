import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Item } from '../../items/entities/item.entity';
import { Category } from '../../category/entities/category.entity';
import { ItemsProp } from '../../items-prop/entities/items-prop.entity';
import { Cluster } from '../../clusters/entities/cluster.entity';
import { Shop } from '../../shops/entities/shop.entity';
@Table
export class File extends Model<File> {
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    filename: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    path: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    destination: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    type: string;

    @HasMany(() => Item)
    items: Item[];

    @HasMany(() => Category)
    categories: Category[];

    @HasMany(() => ItemsProp)
    itemsProp: ItemsProp[];

    @HasMany(() => Cluster)
    clusters: Cluster[];

    @HasMany(() => Shop)
    shops: Shop[];
}
