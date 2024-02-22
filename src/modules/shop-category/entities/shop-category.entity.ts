import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Shop } from '../../shops/entities/shop.entity';
import { Category } from '../../category/entities/category.entity';
@Table
export class ShopCategory extends Model<ShopCategory> {
    @ForeignKey(() => Category)
    @Column({
        onDelete: 'CASCADE'
    })
    categoryId: number;

    @ForeignKey(() => Shop)
    @Column({
        onDelete: 'CASCADE'
    })
    shopId: number;
}
