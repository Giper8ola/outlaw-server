import { Category } from '../../category/entities/category.entity';
import { Item } from '../../items/entities/item.entity';
import {
    Column,
    DataType,
    ForeignKey,
    Model,
    Table
} from 'sequelize-typescript';
@Table
export class CategoryItem extends Model<CategoryItem> {
    @ForeignKey(() => Category)
    @Column({
        onDelete: 'CASCADE'
    })
    categoryId: number;

    @ForeignKey(() => Item)
    @Column({
        onDelete: 'CASCADE'
    })
    itemId: number;

    @Column({
        type: DataType.INTEGER,
        unique: true,
        allowNull: true
    })
    poses: number;
}
