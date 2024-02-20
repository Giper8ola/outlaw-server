import {
    BelongsToMany,
    Column,
    DataType,
    ForeignKey,
    Model,
    Table
} from 'sequelize-typescript';
import { File } from '../../files/entities/file.entity';
import { CategoryTypeEnum } from '../../../core/enums/CategoryTypeEnum';
import { Item } from '../../items/entities/item.entity';
import { CategoryItem } from '../../category-item/entities/category-item.entity';

@Table
export class Category extends Model<Category> {
    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false
    })
    name: string;

    @ForeignKey(() => File)
    @Column({
        type: DataType.INTEGER,
        onDelete: 'SET DEFAULT'
    })
    fileId: number;

    @Column({
        type: DataType.ENUM(...Object.values(CategoryTypeEnum)),
        allowNull: false
    })
    type: keyof typeof CategoryTypeEnum;

    @BelongsToMany(() => Item, () => CategoryItem)
    items: Array<Item & { CategoryItem: CategoryItem }>;
}
