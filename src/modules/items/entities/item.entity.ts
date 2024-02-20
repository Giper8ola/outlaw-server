import {
    BelongsTo,
    BelongsToMany,
    Column,
    DataType,
    ForeignKey,
    HasMany,
    Model,
    Table
} from 'sequelize-typescript';
import { ItemsType } from '../../items-type/entities/items-type.entity';
import { ItemsProp } from '../../items-prop/entities/items-prop.entity';
import { File } from '../../files/entities/file.entity';
import { ItemTypeEnum } from '../../../core/enums/ItemTypeEnum';
import { Category } from '../../category/entities/category.entity';
import { CategoryItem } from '../../category-item/entities/category-item.entity';

@Table
export class Item extends Model<Item> {
    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false
    })
    name: string;

    @Column({
        type: DataType.ENUM(...Object.values(ItemTypeEnum)),
        allowNull: false
    })
    type: keyof typeof ItemTypeEnum;

    /*=====associations=====*/
    @ForeignKey(() => ItemsType)
    @Column({
        type: DataType.INTEGER,
        onDelete: 'SET DEFAULT'
    })
    entityTypeId: number;

    @BelongsTo(() => ItemsType)
    entityType: ItemsType;

    @HasMany(() => ItemsProp)
    props: ItemsProp[];

    @ForeignKey(() => File)
    @Column({
        type: DataType.INTEGER,
        onDelete: 'SET DEFAULT'
    })
    fileId: number;

    @BelongsTo(() => File)
    file: ItemsType;

    @BelongsToMany(() => Category, () => CategoryItem)
    categories: Array<Category & { CategoryItem: CategoryItem }>;
}
